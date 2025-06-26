import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import LayerSwitcher, { LayerOptions } from "./LayerSwitcher";
import LayerVisibilityController from "./LayerVisibilityController";
import ControllerSwitch from "./ControllerSwitch";

export interface LayersTypes {
  province: string;
  district: string;
  municipality: string;
}

export interface ControlType {
  showControlBox: boolean;
  setShowControlBox: React.Dispatch<React.SetStateAction<boolean>>;
}

//Vector tiles and map style urls imported from env
const provinceUrl = import.meta.env.VITE_PROVINCE_TILES_URL;
const districtUrl = import.meta.env.VITE_DISTRICT_TILES_URL;
const municipalityUrl = import.meta.env.VITE_MUNICIPALITY_TILES_URL;
const styleUrl = import.meta.env.VITE_MAP_STYLE_URL;

//Default values and states of map layers visibility controller
const defaultStyle = {
  fillVisible: true,
  lineVisible: false,
  fillOpacity: 0.5,
  lineWidth: 1,
  lineOpacity: 1,
};

const Map: React.FC = () => {
  //Refs for map style and map
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  //State for layer selection
  const [selectedLayer, setSelectedLayer] =
    useState<keyof LayersTypes>("province");

  //State for layer visibility control
  const [layerStyles, setLayerStyles] = useState<
    Record<string, typeof defaultStyle>
  >({
    province: { ...defaultStyle },
    district: { ...defaultStyle },
    municipality: { ...defaultStyle },
  });

  //Control box is placed in a drawer at the right side of the map which can be opened and closed on click
  const [showControlBox, setShowControlBox] = useState<boolean>(false);

  //Function to handle the opacity and width of visibility of layer types such as fill and line
  const updateStyle = (
    layerKey: string,
    updates: Partial<typeof defaultStyle>
  ) => {
    const previous = layerStyles[layerKey];
    const fillLayerId = `${layerKey}-fill`;
    const lineLayerId = `${layerKey}-line`;

    if (mapRef.current) {
      const fillVisible = updates.fillVisible ?? previous.fillVisible;
      mapRef.current.setLayoutProperty(
        fillLayerId,
        "visibility",
        fillVisible ? "visible" : "none"
      );

      const lineVisible = updates.lineVisible ?? previous.lineVisible;
      mapRef.current.setLayoutProperty(
        lineLayerId,
        "visibility",
        lineVisible ? "visible" : "none"
      );

      const fillOpacity = updates.fillOpacity ?? previous.fillOpacity;
      mapRef.current.setPaintProperty(fillLayerId, "fill-opacity", fillOpacity);

      const lineWidth = updates.lineWidth ?? previous.lineWidth;
      mapRef.current.setPaintProperty(lineLayerId, "line-width", lineWidth);

      const lineOpacity = updates.lineOpacity ?? previous.lineOpacity;
      mapRef.current.setPaintProperty(lineLayerId, "line-opacity", lineOpacity);
    }

    setLayerStyles((prev) => ({
      ...prev,
      [layerKey]: {
        ...prev[layerKey],
        ...updates,
      },
    }));
  };

  //Function to handle showing and hiding of the three layers based on toggle to specific layer
  const handleLayerToggle = (layerKey: keyof LayersTypes) => {
    setSelectedLayer(layerKey);

    LayerOptions.forEach(({ value }) => {
      const visibility = value === layerKey ? "visible" : "none";

      mapRef?.current?.setLayoutProperty(
        `${value}-fill`,
        "visibility",
        visibility
      );
      mapRef?.current?.setLayoutProperty(
        `${value}-line`,
        "visibility",
        visibility
      );
    });
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;
    //Map initialization using maplibre
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: styleUrl,
      center: [84.124, 28.3949], //Center of nepal
      zoom: 6,
    });

    mapRef.current = map;

    //Navigation control on bottom right
    map.addControl(new maplibregl.NavigationControl(), "bottom-right");

    //For loading sources and layers on map
    map.on("load", () => {
      map.addSource("province", {
        type: "vector",
        tiles: [provinceUrl],
      });
      map.addSource("district", {
        type: "vector",
        tiles: [districtUrl],
      });
      map.addSource("municipality", {
        type: "vector",
        tiles: [municipalityUrl],
      });

      //Created array of all three to iterate them later based on key
      const layers = [
        {
          key: "province",
          fillColor: "#00bcd4",
          visible: selectedLayer === "province",
        },
        {
          key: "district",
          fillColor: "#4caf50",
          visible: selectedLayer === "district",
        },
        {
          key: "municipality",
          fillColor: "#ff9800",
          visible: selectedLayer === "municipality",
        },
      ];

      //Iteration over each layer for adding line and fill
      layers.forEach(({ key, fillColor, visible }) => {
        map.addLayer({
          id: `${key}-fill`,
          type: "fill",
          source: key,
          "source-layer": "default",
          paint: {
            "fill-color": fillColor,
            "fill-opacity": defaultStyle.fillOpacity,
          },
          layout: {
            visibility: visible ? "visible" : "none",
          },
        });

        map.addLayer({
          id: `${key}-line`,
          type: "line",
          source: key,
          "source-layer": "default",
          paint: {
            "line-color": fillColor,
            "line-opacity": defaultStyle.lineOpacity,
            "line-width": defaultStyle.lineWidth,
          },
          layout: {
            visibility: visible ? "visible" : "none",
          },
        });
      });
    });

    //For mobile responsiveness of map
    map.resize();
    map.fitBounds(
      [
        [78.4745772586162, 25.882484351930984],
        [90.01928188702573, 30.658606158679973],
      ],
      { duration: 0 }
    );

    //Clearance function to remove map instance on component unmount
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);
  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      {/*Switch to toggle between province, district and municipality to show chosen layer*/}
      <LayerSwitcher
        selectedLayer={selectedLayer}
        setSelectedLayer={handleLayerToggle}
      />

      {/*Conditional rendering of Layer visibility controller on the basis of switch clicked placed on the upper right side of the map */}
      {selectedLayer && (
        <LayerVisibilityController
          showControlBox={showControlBox}
          setShowControlBox={setShowControlBox}
          layerKey={selectedLayer}
          {...layerStyles[selectedLayer]}
          onToggleFill={() =>
            updateStyle(selectedLayer, {
              fillVisible: !layerStyles[selectedLayer].fillVisible,
            })
          }
          onToggleLine={() =>
            updateStyle(selectedLayer, {
              lineVisible: !layerStyles[selectedLayer].lineVisible,
            })
          }
          onFillOpacityChange={(value) =>
            updateStyle(selectedLayer, { fillOpacity: value })
          }
          onLineWidthChange={(value) =>
            updateStyle(selectedLayer, { lineWidth: value })
          }
          onLineOpacityChange={(value) =>
            updateStyle(selectedLayer, { lineOpacity: value })
          }
        />
      )}

      {/*Switch to open and close the Controller */}
      <ControllerSwitch
        setShowControlBox={setShowControlBox}
        showControlBox={showControlBox}
      />
      <div ref={mapContainerRef} className="h-screen w-full" />
    </div>
  );
};

export default Map;

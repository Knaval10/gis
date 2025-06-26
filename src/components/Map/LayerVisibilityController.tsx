import React from "react";

interface Props {
  showControlBox: boolean;
  setShowControlBox: React.Dispatch<React.SetStateAction<boolean>>;
  layerKey: string;
  fillVisible: boolean;
  lineVisible: boolean;
  fillOpacity: number;
  lineWidth: number;
  lineOpacity: number;
  onToggleFill: () => void;
  onToggleLine: () => void;
  onFillOpacityChange: (value: number) => void;
  onLineWidthChange: (value: number) => void;
  onLineOpacityChange: (value: number) => void;
}

const LayerVisibilityController: React.FC<Props> = ({
  showControlBox,
  setShowControlBox,
  layerKey,
  fillVisible,
  lineVisible,
  fillOpacity,
  lineWidth,
  lineOpacity,
  onToggleFill,
  onToggleLine,
  onFillOpacityChange,
  onLineWidthChange,
  onLineOpacityChange,
}) => {
  return (
    <div
      className={`flex flex-col gap-3 absolute top-16 md:top-4 right-0 z-10 bg-white p-4 rounded shadow w-78 text-sm ${
        showControlBox
          ? "transition-transform translate-x-0 duration-500"
          : "translate-x-full transition-transform duration-500"
      }`}
    >
      <section className="flex justify-between w-full">
        <h3 className="font-semibold capitalize">{layerKey} Layer Style</h3>
        <div
          onClick={() => setShowControlBox(false)}
          className="border border-gray-300 rounded-sm p-1 text-[18px] leading-2 cursor-pointer hover:bg-gray-400 hover:text-white"
        >
          x
        </div>
      </section>
      <section className="flex gap-2">
        <label className="block">
          <input
            type="checkbox"
            checked={fillVisible}
            onChange={onToggleFill}
            className="mr-2"
          />
          Fill Layer
        </label>

        <label className="block">
          <input
            type="checkbox"
            checked={lineVisible}
            onChange={onToggleLine}
            className="mr-2"
          />
          Line Layer
        </label>
      </section>
      <div className="flex flex-wrap gap-2">
        <div>
          <label className="block">
            Fill Opacity: {fillOpacity.toFixed(1)}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={fillOpacity}
            onChange={(e) => onFillOpacityChange(parseFloat(e.target.value))}
          />
        </div>

        <div>
          <label className="block">Line Width: {lineWidth}</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={lineWidth}
            onChange={(e) => onLineWidthChange(parseFloat(e.target.value))}
          />
        </div>

        <div>
          <label className="block">
            Line Opacity: {lineOpacity.toFixed(1)}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={lineOpacity}
            onChange={(e) => onLineOpacityChange(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default LayerVisibilityController;

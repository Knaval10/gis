import type { LayersTypes } from ".";

interface PropsTypes {
  selectedLayer: keyof LayersTypes | null;
  setSelectedLayer: (layer: keyof LayersTypes) => void;
}
interface LayerOptionsTypes {
  value: keyof LayersTypes;
  label: string;
}
export const LayerOptions: LayerOptionsTypes[] = [
  { value: "province", label: "Province" },
  { value: "district", label: "District" },
  { value: "municipality", label: "Municipality" },
];

const LayerSwitcher: React.FC<PropsTypes> = ({
  selectedLayer,
  setSelectedLayer,
}) => {
  return (
    <div className="flex gap-2 absolute top-4 left-4 z-10 bg-white p-1 rounded shadow">
      {LayerOptions.map((layer) => (
        <div
          key={layer.value}
          onClick={() => setSelectedLayer(layer.value)}
          className={`text-sm capitalize p-1 cursor-pointer ${
            selectedLayer === layer.value
              ? "bg-orange-300 rounded-sm text-semibold"
              : ""
          }`}
        >
          {layer.label}
        </div>
      ))}
    </div>
  );
};
export default LayerSwitcher;

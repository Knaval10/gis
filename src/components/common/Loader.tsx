import Logo from "#assets/icons/About.svg";
interface LoaderPropsType {
  className?: string;
}
const Loader: React.FC<LoaderPropsType> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center gap-5 ${className}`}>
      <figure className="animate-spin w-fit h-fit">
        <img src={Logo} alt="Naxa Logo" className="w-full h-full" />
      </figure>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;

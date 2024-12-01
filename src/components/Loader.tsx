type LoaderProps = {
  loadingText?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  loadingText = "loading...",
}: LoaderProps) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-gray-700 opacity-85 z-50 cursor-not-allowed">
      <div className="flex justify-center items-center mt-[50vh]">
        <div className="text-slate-200">{loadingText}</div>
      </div>
    </div>
  );
};

function Loader({ size = "lg", fullScreen = false }) {
  const spinner = (
    <span className={`loading loading-spinner loading-${size} text-primary`} />
  );

  if (fullScreen) {
    return (
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default Loader;
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
    </div>
  );
};

export default Loader;
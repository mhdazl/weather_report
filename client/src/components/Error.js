function Error({ error }) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full   px-2">
        <div className="p-5 text-center bg-emerald-600 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full  dark:bg-gray-600">
          {error}
        </div>
      </div>
    </div>
  );
}

export default Error;

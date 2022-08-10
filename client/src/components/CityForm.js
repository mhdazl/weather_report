function CityForm(props) {
  return (
    <>
      <h1 className="text-center text-5xl pt-24 pb-10 text-emerald-900">
        Weather Report
      </h1>
      <div className="flex items-center p-2">
        <div className="w-full pr-1">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0">
            Enter any city:*
          </label>
          <input
            onChange={props.handleInputChange}
            type="text"
            name="name"
            id="name"
            className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <button
          disabled={props.city ? false : true}
          onClick={props.onClick}
          className="text-white mt-5 py-3 px-4 leading-tight rounded block bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-200"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default CityForm;

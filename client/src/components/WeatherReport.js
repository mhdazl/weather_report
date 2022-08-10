import moment from "moment";

function WeatherReport({ report }) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full   px-2">
        <div className="bg-emerald-600 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full  dark:bg-gray-600">
          <div className="px-6 py-6 relative">
            <div className="flex mb-4 justify-between items-center">
              <div>
                <h5 className="mb-0 font-medium text-xl">
                  {report.city},{report.country_code}
                  {" - "}
                  <small>
                    [{report.latitude}, {report.longitude}]
                  </small>
                </h5>
                <h6 className="mb-0">
                  {moment(report.created_at).format("MMM DD, YYYY")}
                </h6>
                <small>{report.weather_status}</small>
              </div>
              <div className="text-right">
                <h3 className="font-bold text-4xl mb-0">
                  <span>{report.temp}&deg;</span>
                </h3>
              </div>
            </div>
            <div className="block sm:flex justify-between items-center flex-wrap">
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex mb-2 justify-between items-center">
                  <span>Temp</span>
                  <small className="px-2 inline-block">
                    {report.temp}&nbsp;&deg;
                  </small>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex mb-2 justify-between items-center">
                  <span>Feels like</span>
                  <small className="px-2 inline-block">
                    {report.feels_like}&nbsp;&deg;
                  </small>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex mb-2 justify-between items-center">
                  <span>Temp min</span>
                  <small className="px-2 inline-block">
                    {report.temp_min}&nbsp;&deg;
                  </small>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex mb-2 justify-between items-center">
                  <span>Temp max</span>
                  <small className="px-2 inline-block">
                    {report.temp_max}&nbsp;&deg;
                  </small>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex mb-2 justify-between items-center">
                  <span>Wind</span>
                  <small className="px-2 inline-block">
                    {report.wind_speed}&nbsp;m/s
                  </small>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex mb-2 justify-between items-center">
                  <span>Clouds</span>
                  <small className="px-2 inline-block">
                    {report.clouds}&nbsp;%
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherReport;

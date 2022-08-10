<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\WeatherReport;
use App\Models\Services\WeatherReportService;

class WeatherReportController extends Controller
{
    public function getReport($city)
    {
        try {
            $city = strtolower($city);
            // API for getting lattitude and longitude value of the city
            $location_response = Http::get('http://api.openweathermap.org/geo/1.0/direct', [
                'q' => $city,
                'appid' => env('WEATHER_API_KEY')
            ]);

            //Json decoding the response of latitude-longitude API.
            $location_data = json_decode($location_response->body());

            if ($location_data) {

                // API for getting weather report of the city
                $weather_response = Http::get('https://api.openweathermap.org/data/2.5/weather', [
                    'units'=>'metric',
                    'lat' => $location_data[0]->lat,
                    'lon' => $location_data[0]->lon,
                    'appid' => env('WEATHER_API_KEY')
                ]);

                //Json decoding the response of weather report API.
                $weather_report = json_decode($weather_response->body());

                /**
                 * Service class that interact with the User model.
                 * Adding data to weather report table by addReport fonction in App\Models\Services\WeatherReportService
                 */
                $reportService = new WeatherReportService();
                $report = $reportService->addReport($weather_report);

                return response()->json(['data' => $report, 200]);
            } else {
                return response()->json(['error' => 'No data found', 400]);
            }
        } catch (\Exception $e) {
            return response()->json(['exception_error' => 'Something went wrong', 400]);
        }
    }
}

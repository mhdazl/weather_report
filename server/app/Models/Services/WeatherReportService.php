<?php

namespace App\Models\Services;

use App\Models\WeatherReport;

class WeatherReportService
{
    public function addReport($weather_report)
    {
        // Adding data to weather reports table
        $report = new WeatherReport();
        $report->city = $weather_report->name;
        $report->country_code = $weather_report->sys->country;
        $report->latitude = $weather_report->coord->lat;
        $report->longitude = $weather_report->coord->lon;
        $report->weather_status = $weather_report->weather[0]->main;
        $report->description = $weather_report->weather[0]->description;
        $report->temp = $weather_report->main->temp;
        $report->feels_like = $weather_report->main->feels_like;
        $report->temp_min = $weather_report->main->temp_min;
        $report->temp_max = $weather_report->main->temp_max;
        $report->pressure = $weather_report->main->pressure;
        $report->humidity = $weather_report->main->humidity;
        $report->sea_level = $weather_report->main->sea_level;
        $report->grnd_level = $weather_report->main->grnd_level;
        $report->wind_speed = $weather_report->wind->speed;
        $report->clouds = $weather_report->clouds->all;

        $report->save();

        return $report;
    }
}

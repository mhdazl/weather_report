<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WeatherReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'city', 'country_code', 'latitude', 'longitude',
        'weather_status', 'description', 'temp', 'feels_like',
        'temp_min', 'temp_max', 'pressure', 'humidity', 'sea_level',
        'grnd_level', 'wind_speed', 'clouds',
    ];
}

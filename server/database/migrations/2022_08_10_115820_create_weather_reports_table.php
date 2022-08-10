<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weather_reports', function (Blueprint $table) {
            $table->id();

            $table->string('city');
            $table->string('country_code');
            $table->string('latitude');
            $table->string('longitude');
            $table->string('weather_status');
            $table->text('description');
            $table->double('temp');
            $table->double('feels_like');
            $table->double('temp_min');
            $table->double('temp_max');
            $table->double('pressure');
            $table->double('humidity');
            $table->double('sea_level');
            $table->double('grnd_level');
            $table->double('wind_speed');
            $table->double('clouds');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('weather_reports');
    }
};

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorPrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_prescriptions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('item_id')->index();
            $table->string('quantity');
            $table->string('instruction');
            $table->string('day_supply');
            $table->string('days');
            $table->timestamps();
            $table->string('customer_id')->index();
            $table->string('doctor_id')->index();
            $table->string('pharmacist_id')->index();
            $table->string('branch_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctor_prescriptions');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('amount');
            $table->string('paid');
            $table->string('balance');
            $table->string('status');
            $table->string('delivery_status');
            $table->timestamps();
            $table->date('date');
            $table->timestamp('time');
            $table->integer('branch_id')->index();
            $table->integer('staff_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}

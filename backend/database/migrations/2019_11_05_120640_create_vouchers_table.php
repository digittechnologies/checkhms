<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVouchersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vouchers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('quantity');
            $table->string('amount');
            $table->string('paid');   
            $table->string('balance'); 
            $table->string('paid_status');
            $table->string('delivery_status');
            $table->timestamps();
            $table->date('date');
            $table->timestamp('time');
            $table->integer('item_detail_id')->index();
            $table->integer('customer_id')->index();
            $table->integer('staff_id')->index();
            $table->integer('branch_id')->index();
            $table->integer('invoice_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vouchers');
    }
}

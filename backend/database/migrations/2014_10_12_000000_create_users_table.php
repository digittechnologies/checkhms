<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('gender');
            $table->string('d_o_b')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('mobile_number')->unique();
            $table->string('address');
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->integer('licence_number')->unique();
            $table->string('image')->default('male.png');
            $table->string('d_o_b')->nullable();
            $table->string('facebook_handle')->nullable();
            $table->string('twitter_handle')->nullable();
            $table->string('instagram_handle')->nullable();
            $table->string('degree')->nullable();
            $table->string('about')->nullable();
            $table->string('status');
            $table->timestamps();
            $table->string('position_id')->index();
            $table->string('dept_id')->index();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

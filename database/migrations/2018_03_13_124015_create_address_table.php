<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAddressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('address', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('member_id')->unsigned();
            $table->string('address_1');
            $table->string('address_2')->nullable;
            $table->char('city');
            $table->char('county');
            $table->char('country');
            $table->integer('PostCode');
            $table->boolean('address_verified')->default(false);            $table->string('current_adress');  
            $table->foreign('member_id')->references('id')->on('members');  
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
        Schema::dropIfExists('address');
    }
}

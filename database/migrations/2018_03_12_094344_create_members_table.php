<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name')->nullable();
            $table->string('title');
            $table->date('date_of_birth');
            $table->string('place_of_birth');
            $table->string('country');
            $table->string('nationality');
            $table->char('status');
            $table->string('email')->unique();
            $table->integer('admin_id')->unsigned();
            $table->foreign('admin_id')->references('id')->on('admins'); 
            $table->boolean('email_verified')->default(false);
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('members');
    }
}

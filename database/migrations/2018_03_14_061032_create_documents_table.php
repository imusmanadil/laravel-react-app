<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->increments('id');
            $table->char('type')->nullable();
            $table->char('name');
            $table->integer('number');
            $table->char('for')->nullable();
            $table->date('valid_from')->nullable();
            $table->date('valid_to')->nullable();
            $table->char('issued_by');
            $table->date('issued_date');
            $table->float('size');
            $table->char('content_url');
            $table->char('added_by');
            $table->boolean('verified');
            $table->datetime('varified_time');
            $table->enum('status',['disable','active'])->nullable();
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
        Schema::dropIfExists('documents');
    }
}

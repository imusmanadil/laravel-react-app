<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('admin_id')->unsigned();
            $table->integer('agent_id')->unsigned()->nullable();
            $table->integer('member_id')->unsigned()->nullable();
            $table->integer('receiver_id')->unsigned();
            $table->integer('pa_id')->unsigned()->nullable();
            $table->integer('document_id')->unsigned()->nullable();
            $table->enum('pay_method',['B','C']);
            $table->integer('pin')->unsigned();
            $table->string('from_currency');
            $table->string('to_currency');
            $table->decimal('amount_uk_currency');
            $table->decimal('amount_local_currency');
            $table->decimal('exchange_rate');
            $table->text('transfer_purpose');
            $table->string('fund_source');
            $table->integer('transfer_ref_number');
            $table->timestamps();
        });//
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}

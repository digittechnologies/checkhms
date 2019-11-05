    <?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_details', function (Blueprint $table) {
            $table->increments('id');
            $table->string('generic_name');
            $table->string('selling_price');
            $table->string('purchasing_price');
            $table->string('status');
            $table->timestamps();
            $table->string('item_unit_id')->index();
            $table->string('item_category_id')->index();
            $table->string('item_type_id')->index();
            $table->string('manufacturer_id')->index();
            $table->string('tax_id')->index();
            $table->string('discount_id')->index();
            $table->string('staff_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_details');
    }
}

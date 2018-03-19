<?php

use Illuminate\Database\Seeder;
use App\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	 if (App::environment() === 'production') {
            exit('I just stopped you getting fired. Love, Amo.');
        }
        DB::table('roles')->truncate();
        Role::create([
            'id'            => 1,
            'name'          => 'SuperAdmin',
            'description'   => 'Use this account with extreme caution. When using this account it is possible to cause irreversible damage to the system.'
        ]);
        Role::create([
            'id'            => 2,
            'name'          => 'Staff',
            'description'   => 'Full access to create, edit, and update companies, and orders.'
        ]);
        Role::create([
            'id'            => 3,
            'name'          => 'Patient',
            'description'   => 'Ability to create new companies and orders, or edit and update any existing ones.'
        ]);
        
    }
}

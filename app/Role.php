<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    public function users()
    {
        return $this->hasMany(Admin::class, 'role_id', 'id');
    }
}

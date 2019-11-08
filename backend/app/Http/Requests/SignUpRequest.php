<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'required', 
            'lastname' => 'required', 
            'gender' => 'required', 
            'email' => 'required|email|unique:users', 
            'mobile_number' => 'required',
            'password' => 'required|confirmed',
            'id_number' => 'required',
            'dept_id' => 'required'
        ];
    }
}

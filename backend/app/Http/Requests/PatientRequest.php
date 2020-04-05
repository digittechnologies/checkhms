<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatientRequest extends FormRequest
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
            'name' => 'required',  
            'othername' => 'required',  
            // 'email' => 'required',  
            'gender' => 'required',  
            'mobile_number' => 'required',  
            'address' => 'required',  
            'city' => 'required',  
            'state' => 'required',  
            'country' => 'required',  
            'd_o_b' => 'required',  
            // 'about',
            // 'allergy', 
            // 'cust_category_id',
            // 'n_h_i_s', 
            'card_number' => 'required', 
            'status' => 'required', 
            // 'age',
            'type' => 'required', 
            'occupation' => 'required', 
            'marital_status' => 'required', 
            'religion' => 'required', 
            'next_of_kin_name' => 'required', 
            'kin_relationship' => 'required', 
            'next_of_kin_mobile' => 'required', 
            'next_of_kin_address' => 'required', 
            'x_ray_number' => 'required',
            'referral_name' => 'required',
            'referral_address' => 'required',
            'referral_mobile' => 'required',
        ];
    }
}

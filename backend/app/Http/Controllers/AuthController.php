<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'phone' => 'required|numeric|min:11',
        ],
        [
            'name.required' => 'نام الزامی است',
            'email.required' => 'ایمیل الزامی است',
            'password.required' => 'رمز عبور الزامی است',
            'phone.required' => 'موبایل الزامی است',
            'email.unique' => 'ایمیل وارد شده از قبل وجود دارد',
            'password.min' => 'رمز عبور نمیتواند کمتر از 8 کاراکتر باشد',
            'phone.min' => 'موبایل نمیتواند کمتر از 11 رقم باشد',
            'phone.numeric' => 'موبایل باید به صورت عددی وارد شود',
            'password.confirmed' => 'رمز عبور با تکرار آن مطابقت ندارد',
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
            'phone' => $fields['phone']
        ]);

        $user->roles()->attach($request->register_type == 'jobs' ? 2 : 1);

        $token = $user->createToken('appToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ],
            [
                'email.required' => 'ایمیل الزامی است',
                'password.required' => 'رمز عبور الزامی است',
        ]);

        $user = User::whereEmail($fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'نام کاربری یا رمز عبور صحیح نیست'
            ], 401);
        }

        $token = $user->createToken('appToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response([
            'message' => 'خروج از حساب کاربری انجام شد'
        ], 200);
    }
}

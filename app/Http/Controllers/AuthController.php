<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource;
class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
            'remember'=>'boolean'
        ]);
        $remember=$credentials['remember']??false;
        unset($credentials['remember']);
        if(!Auth::attempt($credentials,$remember)){
            return response(['message' => 'Email or Passord is incorrect'],422);
        }
        $user=Auth::user();
        if(!$user->is_admin){
            Auth::logout();
            return response(['message' => 'You don\'t have permission to authonticate as admin'],403);
        }
        $token=$user->createToken('main')->plainTextToken;
        //$token=$user->createToken('MyAppToken')->plainTextToken;//insert row in table personal_access_token

        return response([
            'user'=>new UserResource($user),
            'token'=>$token
        ]);
    }
    public function logout(){
         $user=Auth::user();
         $user->currentAccessToken()->delete();
        // return response('',204);
        // Auth::user()->tokens->each(function($token) {
        //     $token->delete();
        // });
        return response()->json('Successfully logged out');
    }
    
    public function getUser(Request $request){
        return new UserResource($request->user());
    }
}


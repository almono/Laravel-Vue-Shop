<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

use App\User;

class AuthController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function login(Request $request) {
        $params = $request->all();
        $user = User::getUserByUsername($params['username']);

        if(!is_null($user)) {
            $result = prepareResult('Error', 'Invalid login details');
            return response($result, 400);
        } else {
            $result = prepareResult('Error', 'Invalid login details');
            return response($result, 400);
        }
    }

    public function register(Request $request) {
        $params = $request->all();

        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users,username|max:255',
            'email' => 'required|unique:users,email',
            'password' => 'required',
            'password_confirmation' => 'required|same:password'
        ]);

        if (!$validator->fails()) {
            $new_user = new User();
            $new_user->email = $params['email'];
            $new_user->username = $params['username'];
            $new_user->password = bcrypt($params['password']);

            try {
                $new_user->save();
            } catch (\Exception $e) {
                $result = prepareResult('Error', 'There has been an error', [], $e->getMessage());
                return response($result, 400);
            }

            $result = prepareResult('Success', 'User registered successfully!');
            return response($result,200);

        } else {
            $result = prepareResult('Error', 'Validation failed', [], $validator->errors());
            return response($result, 400);
        }

        //$errors = $validator->errors();
        //foreach ($errors->all() as $message)

        /*$messages = [
        'required' => 'The :attribute field is required.',
        ];
        $validator = Validator::make($input, $rules, $messages); */

        /*$rules = array(
        'email' => 'required|same:old_email',
         );*/

        /*return redirect('post/create')
                ->withErrors($validator)
                ->withInput(); */
    }
}

<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');

Route::prefix('/auth')->group(function() {
    Route::get('/register', [AuthController::class, 'register'])
        ->name('register');
    Route::post('/registerpost', [AuthController::class, 'register_post'])
        ->name('registerpost');
    Route::get('/login', [AuthController::class, 'login'])
        ->name('login');
    Route::post('/loginpost', [AuthController::class, 'login_post'])
        ->name('loginpost');
    Route::get('/passwordrecover', [AuthController::class, 'password_recover'])
        ->name('passwordrecover');
    Route::get('/logout', [AuthController::class, 'logout'])
        ->name('logout');
});


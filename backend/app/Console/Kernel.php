<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();

        $schedule->call(function () {

            $itemD = DB::table("item_details")->get();   
            $branch = DB::table("branches")->get();   

            $dt = Carbon::now();
            $cDate = $dt->toFormattedDateString();
            $cTime = $dt->format('h:i:s A');

            foreach($itemD as $itemID){
                foreach($branch as $brancID){
                    $branch_name = $brancID->br_name;
                    $getFromBranch = DB::tab;e($branch_name)
                    ->where ('c_date', '=', $cDate)
                    ->get();
                    $insert = DB::table($branch_name)->insertGetId(
                        [
                            'open_stock'=> $getFromBranch->close_balance,
                            'variance'=> $getFromBranch->variance,
                            'physical_balance'=> $getFromBranch->physical_balance,
                            'sales'=> '0',
                            'transfer'=> '0',
                            'receive'=> '0',
                            'close_balance'=> $getFromBranch->transfer + $getFromBranch->sales - $getFromBranch->balance,
                            'balance'=> $getFromBranch->transfer + $getFromBranch->sales - $getFromBranch->balance - $getFromBranch->variance,
                            'c_date'=> $cDate,
                            'c_time'=> $cTime, 
                            'item_detail_id' => $getFromBranch->id,
                        ]);
                }
            }

            // DB::table('recent_users')->delete();
        })->daily();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}

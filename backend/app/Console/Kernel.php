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

        // $schedule->command('composer database-export')->daily();

        $schedule->call(function () {
            $branch = DB::table("branches")->get();   
            $dt = Carbon::yesterday();
            $yesterDate = $dt->toFormattedDateString();
            $dt2 = Carbon::now();
            $todayDate = $dt2->toFormattedDateString();
            $cTime = $dt->format('h:i:s A');
            foreach($branch as $brancID){
                $branch_name = $brancID->br_name;
                $getFromBranch = DB::table($branch_name)
                    ->where ('c_date', '=', $yesterDate)
                    ->get();
                foreach($getFromBranch as $itemID){
                    // echo $branch_name." ".$itemID->total_remain."<br/>";
                    $insert = DB::table($branch_name)->insertGetId(
                        [
                            'open_stock'=> $itemID->close_balance,
                            'variance'=> $itemID->variance,
                            'sales'=> '0',
                            'transfer'=> '0',
                            'receive'=> '0',
                            'close_balance'=> $itemID->balance,
                            'physical_balance'=> $itemID->physical_balance,
                            'total_remain' => '0',
                            'c_date'=> $todayDate,
                            'c_time'=> $cTime, 
                            'item_detail_id' => $itemID->item_detail_id,
                            'staff_id' => $itemID->staff_id,
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

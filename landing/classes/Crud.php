<?php 
require_once 'Dbconn.php';
class Crud extends Dbconn{
public function __construct(){
	parent::__construct();
}
public function create($query, $binder){

	$stmt = $this->conn->prepare($query);
	$stmt->bind_param(...$binder);
	if ($stmt->execute()) {
     $id= $this->conn->insert_id;
    //  header("Location:register.php");
        // $getD=$this->conn->query("SELECT client_license_key FROM client_config WHERE id='$id'")
        // $rows = array();
        
        // while ($row = $getD->fetch_assoc()) {
        //     $rows[] = $row;
        // }
        // while($fid = fetch_array($getD))
        //             {
        //                 //$sid = $fid['sales_id'];
        //                 $sid=$fid['client_license_key'];
        //             }
    echo'Registered Successfully'.$id;
	}else
	{
		echo'not inserted'.mysqli_error($this->conn);
	}
}
public function getData($query)
    {        
        $result = $this->conn->query($query);
        
        if ($result == false) {
            return false;
        } 
        
        $rows = array();
        
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        
        return $rows;
    }
  
// public function create()
// {
// 	$fname='adio';
// 	$lname='sodiq';
// 	$stmt = $this->conn->prepare("INSERT INTO oop_tb(first_name,last_name) VALUEs (?,?)");
// 	$stmt->bind_param("ss",$fname,$lname);
// 	if ($stmt->execute()) {
// 	echo 'inserted';
// 	}else
// 	{
// 		echo'not inserted';
// 	}
// }




}
// $stu=new Crud();
// $stu->create();

?>
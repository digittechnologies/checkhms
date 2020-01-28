<?php
require_once 'classes/Crud.php';
$client_name =$_POST["client_name"];
$client_email =$_POST["client_email"];
$client_phone =$_POST["client_phone"];
$client_address =$_POST["client_address"];
$client_website_url =$_POST["client_website_url"];
// $client_app_url =$_POST["client_app_url"];
$client_org_type =$_POST["client_org_type"];
$client_org_identity =$_POST["client_org_identity"];
$module_choose=$_POST["module_choose"];
$reg_time =date('H:i:s');
$reg_date =date('Y-m-d');
$client_license_key = sha1($client_name ." ".rand(1000,1000000));
//  echo $client_license_key;
$query ="INSERT INTO client_config(client_name,client_phone,client_email,client_address,client_website_url,client_org_type,client_org_identity,module_choose,client_license_key,reg_time,reg_date) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
// $query1="SELECT * FROM client_config "
$binder = array("sssssssssss",$client_name,$client_phone,$client_email,$client_address,$client_website_url,$client_org_type,$client_org_identity,$module_choose,$client_license_key,$reg_time,$reg_date);

$newRegister = new Crud;
$newRegister->create($query, $binder);
?>
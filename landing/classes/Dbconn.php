<?php 
require_once 'config.php';
class Dbconn{
	private $dbHost = DB_HOST;
	private $dbUser = DB_USER;
    private $dbPass = DB_PASS;
    private $dbName = DB_NAME;
    protected $conn;
   public function __construct(){
   	$this->connect();
   }
    public function connect(){
    	$this->conn = new mysqli($this->dbHost, $this->dbUser, $this->dbPass,$this->dbName);
    	if (!$this->conn)
    	{
    		echo"cannot connect to the database".$this->conn->connect_error;
    	}else{
    		//  echo"connect";
    		 return true;
    	}
    }
}

?>
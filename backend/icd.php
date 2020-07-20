<?php
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://icdaccessmanagement.who.int/connect/token",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "grant_type=client_credentials&scope=icdapi_access",
        CURLOPT_HTTPHEADER => array(
            "Content-Type: application/x-www-form-urlencoded",
            "Authorization: Basic YzcyNGExZjMtZTI4Yi00MDE1LTk0NjAtODk5N2ZiYjYxYjYzXzk0ZTJmZjBmLWIzOGItNDc2NC05YmYxLTI5NDE3Mjg0NmExMjpTQlFEYXlNbGNSUDE3dU85YnZycVI2NWp2c25xNnFoZXE4WDV5ejZuRFhvPQ=="
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    return $response;
    
    // $curl = curl_init();

    // curl_setopt_array($curl, array(
    // CURLOPT_URL => "https://id.who.int/icd/entity/1843895818",
    // CURLOPT_RETURNTRANSFER => true,
    // CURLOPT_ENCODING => "",
    // CURLOPT_MAXREDIRS => 10,
    // CURLOPT_TIMEOUT => 0,
    // CURLOPT_FOLLOWLOCATION => true,
    // CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    // CURLOPT_CUSTOMREQUEST => "GET",
    // CURLOPT_HTTPHEADER => array(
    //     "API-Version: v2",
    //     "Accept-Language: en",
    //     `Authorization: Bearer $response->access_token`
    // ),
    // ));

    // $response = curl_exec($curl);

    // curl_close($curl);
    // echo $response;

?>
<?php
	include ('dbconn.php');

	$name = $_POST['name'];
	$address = $_POST['address'];
	$city = $_POST['city'];
	$phoneNumber = $_POST['phoneNumber'];
	$emailID = $_POST['emailID'];
	$year = $_POST['year'];
	$make = $_POST['make'];
	$model = $_POST['model'];


	$vehicleID = 0;

	$query = "SELECT * FROM Vehicles WHERE make = '$make' AND model = '$model' AND year = $year";
	$records = mysqli_query($conn,$query);

	while($row = mysqli_fetch_array($records, MYSQLI_ASSOC)) {
		$vehicleID = $row['ID'];
	}

	if($vehicleID === 0) {
		$query = "INSERT INTO Vehicles(make,model,year) VALUES ('$make','$model',$year)";
		$exec = mysqli_query($conn,$query);

		$vehicleID = mysqli_insert_id($conn);
	}
	
	if($vehicleID > 0) {
		$query = "INSERT INTO Postings(name,address,city,phone_number,email,vehicle) 
					VALUES ('$name', '$address', '$city', '$phoneNumber', '$emailID', $vehicleID)";
		
		$exec = mysqli_query($conn,$query);
	
		if($exec)
			echo 1;
		else
			echo 0;	
	}
?>
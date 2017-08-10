<?php
	include ('dbconn.php');

	$output = "";

	$query = "SELECT * FROM Postings ORDER BY ID DESC";
	$results=mysqli_query($conn,$query);

  $count = 1;

	while($posting = mysqli_fetch_array($results)) {
      $query = "SELECT * FROM Vehicles WHERE ID=".$posting['vehicle'];
	  $result = mysqli_query($conn, $query);
	  while($vehicle = mysqli_fetch_array($result)) {
	
		  $output .= "
          <div class='col-md-6 offset-md-3 text-center'>
            <!--Panel-->
            <div class='card text-center' id='post".$count++."'>
                <div class='card-header success-color white-text'>"
                    . $vehicle['make'] . " " . $vehicle['model'] . " " . $vehicle['year']
                . "</div>
                <div class='card-body'>
                    <h4 class='card-title'>" .
                    "Seller's name:" . $posting['name'] .  
                     "</h4>
                    <p class='card-text'>" .
                    	"<br/>Address: " . $posting['address'] . 
                    	"<br/>City: " . $posting['city'] . 
                    	"<br/>Phone Number: " . $posting['phone_number'] . 
                    	"<br/>Email: " . $posting['email'] .  
                     "</p>
                </div>
                <div class='card-footer text-muted success-color white-text'>
                    <p class='mb-0'><a href='". "http://www.jdpower.com/cars/" . $vehicle['make'] . "/" . $vehicle['model'] . "/" . $vehicle['year'] ."'>" .
                    	"http://www.jdpower.com/cars/" . $vehicle['make'] . "/" . $vehicle['model'] . "/" . $vehicle['year']
                    . "</a></p>
                </div>
            </div>
            <!--/.Panel-->
          </div>
          <div class='col-md-3'></div>";	  	
	  }
	}
	echo $output;
?>
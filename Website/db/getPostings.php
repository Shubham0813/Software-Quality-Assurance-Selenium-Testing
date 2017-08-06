<?php
	include ('dbconn.php');

	$query = "SELECT * FROM Scores ORDER BY Score DESC LIMIT 10";
	$results=mysqli_query($conn,$query);

	while($row = mysqli_fetch_array($results)) {
	  echo '<tr>
	            <th scope="row">'.$row['ID'].'</th>
	            <td>'.$row['Username'].'</td>
	            <td>'.$row['Score'].'</td>
	        </tr>';
	}

?>
<?php
$state = $_GET['q'];
$number = $_GET['y'];
$forginnumber = $_GET['z'];
$discharged = $_GET['w'];
$deaths = $_GET['u'];
echo "<link rel='stylesheet' href='css/state.css'> 
<div class='main'>
<div class='info'>
        <h3 id='state'>$state</h3>
        <p id='numberofcases'>Number of cases Confirmed: $number</p>
        <p id='NumberofForgiencases'>Number of Forgien cases : $forginnumber</p>
        <p id='numberofdischarged'>Number of discharged : $discharged</p>
        <p id='death'>Number of deaths: $deaths</p>
    </div></div>
    "
?>
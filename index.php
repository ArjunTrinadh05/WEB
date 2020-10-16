<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="javascript/getdata.js"></script>
    <script src="https://kit.fontawesome.com/63fb2f6a1f.js" crossorigin="anonymous"></script>
    <title>COVID)</title>
</head>

<body onload="get()">
    <div class="header">
        <?php
        include("Requirements/Header.html");
        ?>
    </div>
    <hr color="white">
    <div class="info">
        <?php
        include("Requirements\info.html");
        ?>
    </div>
    <div class="footer">
        <?php
        include("Requirements/Footer.html");
        ?>
    </div>
</body>

</html>
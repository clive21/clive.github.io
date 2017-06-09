<?php
$my_email = "admin@irft.org";


$from_email = "admin@irft.org";


$continue = "/";


$errors = array();

// Remove $_COOKIE elements from $_REQUEST.

if(count($_COOKIE)){foreach(array_keys($_COOKIE) as $value){unset($_REQUEST[$value]);}}

// Validate email field.

if(isset($_REQUEST['email']) && !empty($_REQUEST['email']))
{

$_REQUEST['email'] = trim($_REQUEST['email']);

if(substr_count($_REQUEST['email'],"@") != 1 || stristr($_REQUEST['email']," ")){$errors[] = "Email address is invalid";}else{$exploded_email = explode("@",$_REQUEST['email']);if(empty($exploded_email[0]) || strlen($exploded_email[0]) > 64 || empty($exploded_email[1])){$errors[] = "Email address is invalid";}else{if(substr_count($exploded_email[1],".") == 0){$errors[] = "Email address is invalid";}else{$exploded_domain = explode(".",$exploded_email[1]);if(in_array("",$exploded_domain)){$errors[] = "Email address is invalid";}else{foreach($exploded_domain as $value){if(strlen($value) > 63 || !preg_match('/^[a-z0-9-]+$/i',$value)){$errors[] = "Email address is invalid"; break;}}}}}}

}

// Check referrer is from same site.

if(!(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER']) && stristr($_SERVER['HTTP_REFERER'],$_SERVER['HTTP_HOST']))){$errors[] = "You must enable referrer logging to use the form";}

// Check for a blank form.

function recursive_array_check_blank($element_value)
{

global $set;

if(!is_array($element_value)){if(!empty($element_value)){$set = 1;}}
else
{

foreach($element_value as $value){if($set){break;} recursive_array_check_blank($value);}

}

}

recursive_array_check_blank($_REQUEST);

if(!$set){$errors[] = "You cannot send a blank form";}

unset($set);

// Display any errors and exit if errors exist.

if(count($errors)){foreach($errors as $value){print "$value<br>";} exit;}

if(!defined("PHP_EOL")){define("PHP_EOL", strtoupper(substr(PHP_OS,0,3) == "WIN") ? "\r\n" : "\n");}

// Build message.

function build_message($request_input){if(!isset($message_output)){$message_output ="";}if(!is_array($request_input)){$message_output = $request_input;}else{foreach($request_input as $key => $value){if(!empty($value)){if(!is_numeric($key)){$message_output .= str_replace("_"," ",ucfirst($key)).": ".build_message($value).PHP_EOL.PHP_EOL;}else{$message_output .= build_message($value).", ";}}}}return rtrim($message_output,", ");}
$ip=$_SERVER['REMOTE_ADDR'];
$message = build_message($_REQUEST);

$message = $message . $ip;

$message = stripslashes($message);

$subject = "Enquiry from IRFT Website";

$subject = stripslashes($subject);

if($from_email)
{

$headers = "From: " . $from_email;
$headers .= PHP_EOL;
$headers .= "Reply-To: " . $_REQUEST['email'];

}
else
{

$from_name = "";

if(isset($_REQUEST['name']) && !empty($_REQUEST['name'])){$from_name = stripslashes($_REQUEST['name']);}

$headers = "From: {$from_name} <{$_REQUEST['email']}>";

}

mail($my_email,$subject,$message,$headers);

header('Location:http://www.irft.org/thank.html');
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<Encrypted>
MuHam0DiQbp4m/1an6efqI6WV5UFuhHBW2ccb1TG5kVVXlG9vW/gssQa+Ip8EKcEqn/L5HmQNx1UAohK
1UhDc3DtVR7oeUplZTlvcxOvkkzc9zXQqwyFrXXYZd6v0nBIgvDsv4Ip2P/TGYEZUfgnjtLAXw7dUgar
NV3qqcT2y6CKCU/Q9DuTkjthtaXstZwogJIQupBGK14rs2uigZtTFlXloXzXXuOOAuSHSYzyofTdKT8X
8ZwJkVgSwsd/7jS+nBElgloJfM2wPWvN5ImlB8W9uVzUFhIn8hYeq/RGsvD/1FRUCmnd2Po/JQlyD52f
r8FWgDMXOQIKCztqeUoltrOyQJ3FOnoDXM3IJRki/gzubYXtJ3Kl4aJmQti1N1P1ovipv+/+O4UvGjsR
/LSOyrhjjjHt9Euw30Zs7Ae2f4AbuUlpRpuYSdDSJt0x+VClLT6Vfwz3aRoD6CYNzmW/bG9Gr1KDCJNh
L7Vs6f+iAGYt05RtbKuVU7RW5ZVlAROPCF8CsR6nFcwVPa8kGVt3ZOQxDJQDvHEsO33nPqAQ237dq5A6
JjVHHT2ojl9W+boU2hlPoRwetGTuFL8BkifPdJjFFHjOCu38xo2j6DYVNCp98ypy4YIYaB4OslCnAyAZ
HS9XNd920Y61rZcSKn3TDrT+ZLCe6Se43auQOiY1Rx3jB/fDBd27vPxPRhYsrlVRSoK6/xaR0cK41ZaC
0TcmQqrPMIDAYk15
</Encrypted>
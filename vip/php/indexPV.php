<!-- 访问量统计PV -->
<?php
	$indexPV = file_get_contents('indexPV.txt');
	$indexPV++;
	file_put_contents('indexPV.txt',$indexPV);
	echo "document.write($indexPV);";
?>

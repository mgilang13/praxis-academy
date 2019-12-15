<!-- Write HTML code here -->
<html> 

<head> 
	<script src = 
"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"> 
	</script> 
</head> 

<body> 
	<script type="text/javascript"> 
		var people = [ 
		{"name": "sakshi", "hasLong": "false"}, 
		{"name": "aishwarya", "hasLong": "true"}, 
		{"name": "akansha", "hasLong": "true"}, 
		{"name": "preeti", "hasLong": "true"} 
	] 
	console.log(_.sample(people)); 
	</script> 
</body> 

</html> 

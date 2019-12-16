try {
  alert("try");
  if (confirm("Make an error?")) BAD_CODE();
} catch (e) {
  alert("catch");
}
alert("cleanup the working space");

let emailInput = prompt("Masukkan Email anda: ");

function cekEmail(email) {
  let regexList = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  return regexList.test(email);
}

if (cekEmail(emailInput)) {
  arrEmail = emailInput.split("@");
  alert(
    "Halo, username anda adalah " +
      arrEmail[0] +
      ", domain anda adalah " +
      arrEmail[1]
  );
  //   alert("Email valid");
} else {
  alert("Email tidak valid");
}

let plat = prompt("Masukkan plat nomor anda: ");

function isiPlat(plat) {
  let regexList = /^[abd-hkl-npr-twzABD-HKL-NPR-TWZ]{1,2} [0-9]{4} [a-zA-z]{2,3}/;

  return regexList.test(plat);
}

if (isiPlat(plat)) {
  alert("Ini adalah plat Nomor");
} else {
  alert("Ini BUKAN Plat kendaraan bermotor");
}

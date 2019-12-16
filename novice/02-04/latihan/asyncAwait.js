function opBagi(a, b) {
  return a / b;
}

async function bagi(a, b) {
  if (b != 0) {
    let hasil = await opBagi(a, b);
    let kembali = { a: a, b: b, hasil: hasil };
    return kembali;
  } else {
    let alasan = "Gak boleh dibagi dengan 0";
    await Promise.reject(alasan);
  }
}

function berhasil(objhasil) {
  let a = objhasil.a;
  let b = objhasil.b;
  let hasil = objhasil.hasil;
  console.log("Ternyata ", a, " dibagi ", b, " hasilnya ", hasil);
}

function gagal(alasan) {
  console.log(alasan);
}

bagi(10, 5)
  .then(berhasil)
  .catch(gagal);
bagi(5, 0)
  .then(berhasil)
  .catch(gagal);

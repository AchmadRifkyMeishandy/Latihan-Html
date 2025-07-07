const nama = "Achmad Rifky";
let usia = 30;

let biodata = document.getElementById("biodata");
console.log(biodata);

function createBiodata() {
  let generasi;
  if (usia > 12 && usia < 18) {
    generasi = "Generasi remaja ";
  } else if (usia > 18 && usia < 26) {
    generasi = "Generasi dewasa ";
  } else if (usia >= 30) {
    generasi = "Generasi tua ";
  } else if (usia > 2 && usia < 10) {
    generasi = "Generasi anak anak ";
  } else {
    generasi = "Generasi bayi ";
  }

  return (biodata.innerHTML = generasi);
}

console.log(nama);
console.log(usia);

createBiodata();

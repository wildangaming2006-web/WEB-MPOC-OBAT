// ===============================
// SUARA
// ===============================
let suaraBerhasil = new Audio("sound/berhasil.mp3");
let suaraGagal = new Audio("sound/gagal.mp3");

// ===============================
// AMBIL DATA PASIEN AKTIF
// ===============================
let pasienAktif = JSON.parse(localStorage.getItem("pasienAktif"));

// ===============================
// TAMPILKAN DATA PASIEN
// ===============================
if(pasienAktif){

let div = document.getElementById("jadwal");

if(div){
div.innerHTML = `
Nama: ${pasienAktif.nama} <br>
Obat: ${pasienAktif.obat}<br>
Dosis: ${pasienAktif.dosis}<br>
Rute: ${pasienAktif.rute}<br>
Waktu: ${pasienAktif.waktu}
`;
}

}

// ===============================
// SCAN BERHASIL
// ===============================
function onScanSuccess(decodedText){

if(!pasienAktif){
alert("Data pasien tidak ditemukan");
return;
}

// normalisasi text
let hasilQR = code.data
.toUpperCase()
.replace(/\s/g,'')
.trim();

let obatPasien = pasien.obat
.toUpperCase()
.replace(/\s/g,'')
.trim();

if(pasien && hasilQR.includes(obatPasien)){

suaraBerhasil.play();

alert("✅ Obat cocok");

setTimeout(()=>{
window.location.href="konfirmasi.html";
},800);

}else{

suaraGagal.play();

alert("❌ Obat tidak cocok");

}

}

// ===============================
// START SCANNER
// ===============================
let html5QrcodeScanner = new Html5QrcodeScanner(
"reader",
{ fps: 10, qrbox: 250 }
);

html5QrcodeScanner.render(onScanSuccess);

// ===============================
// BUTTON SCAN ULANG
// ===============================
function scanObat(){
window.location.href="scan-obat.html";
}
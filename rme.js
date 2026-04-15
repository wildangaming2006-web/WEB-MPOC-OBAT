let pasienID = localStorage.getItem("pasien");
let obatScan = localStorage.getItem("scanObat");

let data = pasien.find(p=>p.id==pasienID);

let div = document.getElementById("hasil");

if(obatScan == data.obat){

div.innerHTML = "COCOK";
div.className = "success";

}else{

div.innerHTML = "TIDAK COCOK";
div.className = "error";

}

function simpan(){
alert("Data tersimpan di RME");
window.location.href="rme.html";
}
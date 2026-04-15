let div = document.getElementById("pasien-list");

pasien.forEach(p=>{
div.innerHTML += `
<div class="card">
<h3>${p.nama}</h3>
<p>ID: ${p.id}</p>
<button onclick="pilih('${p.id}')">Pilih</button>
</div>
`
});

function pilih(id){
localStorage.setItem("pasien",id);
alert("Pasien dipilih");
}

function next(){
window.location.href="scan-pasien.html";
}
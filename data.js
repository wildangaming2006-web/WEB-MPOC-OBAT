if(!localStorage.getItem("pasienData")){
let data = [
{
id:"PS001",
nama:"Raffelinda",
obat:"Paracetamol",
dosis:"500mg",
rute:"Oral",
waktu:"08:00" ,
resep:"resep-PS001.jpg"
},
{
id:"PS002",
nama:"Felina",
obat:"Amoxicillin",
dosis:"500mg",
rute:"Oral",
waktu:"12:00" ,
resep:"resep-PS002.jpg"

},
{
id:"PS003",
nama:"Hafiyyana",
obat:"Vitamin C",
dosis:"1000mg",
rute:"Oral",
waktu:"18:00" ,
resep:"resep-PS003.jpg"
},
{
id:"PS004",
nama:"Iftitah",
obat:"Bisacodyl",
dosis:"500mg",
rute:"Rektal",
waktu:"09:00" ,
resep:"resep-PS004.jpg"
},
{
id:"PS005",
nama:"Gabriella",
obat:"Morfin",
dosis:"250mg",
rute:"Intravena",
waktu:"13:00" , 
resep:"resep-PS005.jpg"
}
];

localStorage.setItem("pasienData", JSON.stringify(data));
}

let pasien = JSON.parse(localStorage.getItem("pasienData")) || [];

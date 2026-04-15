function onScanSuccess(decodedText){
localStorage.setItem("scanPasien",decodedText);
window.location.href="jadwal-obat.html";
}

new Html5QrcodeScanner("reader",{fps:10,qrbox:250}).render(onScanSuccess);
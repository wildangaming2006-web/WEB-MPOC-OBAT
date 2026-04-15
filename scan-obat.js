function onScanSuccess(decodedText){
localStorage.setItem("scanObat",decodedText);
window.location.href="konfirmasi.html";
}

new Html5QrcodeScanner("reader",{fps:10,qrbox:250}).render(onScanSuccess);
let input = document.querySelector("#text-input");
let button = document.querySelector("#generate-btn");
let imageQR = document.querySelector("#qr-code");

function generateQRCode() {
    if(input.value === "") {
        alert("Please enter a value to generate QR code.");
        return;
    }
    let imageUrl= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
   imageQR.src = imageUrl;
}
button.addEventListener("click", generateQRCode);
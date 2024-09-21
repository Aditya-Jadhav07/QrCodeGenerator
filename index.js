document.getElementById('generateBtn').addEventListener('click', function() {
    const text = document.getElementById('text').value.trim();
    if (text !== "") {
        generateQRCode(text);
    } else {
        alert("Please enter text, URL, or image link");
    }
});

function generateQRCode(text) {
    const qrcodeContainer = document.getElementById('qrcode');
    const qrcodeImg = document.getElementById('qrcodeImg');
    const downloadBtn = document.getElementById('downloadBtn');
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;

    // Fetch the QR code image
    fetch(apiUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            qrcodeImg.src = url;
            qrcodeImg.style.display = 'block';
            qrcodeContainer.style.height = '200px'; // Adjust the height as needed to match the QR code size

            // Set the download link
            downloadBtn.href = url;
            downloadBtn.style.display = 'inline-block';
        })
        .catch(error => {
            console.error('Error generating QR code:', error);
            alert('Failed to generate QR code. Please try again.');
        });
}

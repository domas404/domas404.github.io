
function revealNumber() {
    const phoneNumber = document.querySelector('#phone-number');
    phoneNumber.innerHTML = '+370 612 34567';
}

function hideNumber() {
    const phoneNumber = document.querySelector('#phone-number');
    phoneNumber.innerHTML = 'Number';
}
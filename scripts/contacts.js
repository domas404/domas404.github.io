function displayTooltip(e) {
    const tooltip = e.children[1];
    tooltip.innerHTML = 'Copy';
}

async function copyPhoneNumber(e) {
    await navigator.clipboard.writeText('+37061234567');
    const tooltip = e.children[1];
    tooltip.innerHTML = 'Copied';
}

async function copyEmail(e) {
    await navigator.clipboard.writeText('john.doe@gmail.com');
    const tooltip = e.children[1];
    tooltip.innerHTML = 'Copied';
}

function displayTooltip(e) {
    const tooltip = e.children[1];
    tooltip.innerHTML = 'Copy';
}

async function copyPhoneNumber(e) {
    await navigator.clipboard.writeText('+37062474609');
    const tooltip = e.children[1];
    tooltip.innerHTML = 'Copied';
}

async function copyEmail(e) {
    await navigator.clipboard.writeText('domas.guiga@gmail.com');
    const tooltip = e.children[1];
    tooltip.innerHTML = 'Copied';
}

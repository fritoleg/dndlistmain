function updateModifier(input) {
    const value = parseInt(input.value);
    const modifier = Math.floor((value - 10) / 2);
    input.nextElementSibling.textContent = `+${modifier}`;
}
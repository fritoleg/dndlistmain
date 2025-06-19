function updateModifier(input) {
    const value = parseInt(input.value);
    if (isNaN(value) || value < 1 || value > 30) {
        input.value = 10; 
        input.nextElementSibling.textContent = "0";
        return;
    }
    const modifier = Math.floor((value - 10) / 2);
    input.nextElementSibling.textContent = modifier >= 0 ? `+${modifier}` : `${modifier}`;}
document.querySelectorAll('.attribute input').forEach(input => updateModifier(input));
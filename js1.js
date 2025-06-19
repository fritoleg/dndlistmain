const numberInputs = document.querySelectorAll('.d13 .d13a1 input[type="number"]');
function saveValue(event) {
    const input = event.target;
    const attributeName = input.closest('.d13a1').querySelector('label').textContent;
localStorage.setItem(attributeName, input.value);
}
function loadValues() {
const inputs = document.querySelectorAll('.d13 .d13a1 input[type="number"]');
    inputs.forEach(input => {
        const attributeName = input.closest('.d13a1').querySelector('label').textContent;
        const savedValue = localStorage.getItem(attributeName);
        if (savedValue) {
    input.value = savedValue;
updateModifier(input); 
}
});
}
function updateModifier(input) {
    const value = parseInt(input.value);
    const modifier = Math.floor((value - 10) / 2);
    input.nextElementSibling.textContent = `+${modifier}`;
}
numberInputs.forEach(input => {
    input.addEventListener('input', saveValue);
});
    window.addEventListener('load', loadValues);
function clearAllValues() {
    const attributes = ['Сила', 'Ловкость', 'Телосложение', 'Интеллект', 'Мудрость', 'Харизма'];
attributes.forEach(attribute => {
    localStorage.removeItem(attribute);
 });
}
function saveAllValues() {
    const inputs = document.querySelectorAll('.d13 .d13a1 input[type="number"]');
inputs.forEach(input => {
    saveValue({ target: input });
 });
}
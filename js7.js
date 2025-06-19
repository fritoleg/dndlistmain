function loadButtonStates() {
    document.querySelectorAll('.toggle-btn').forEach(button => {
        const inputId = button.previousElementSibling.id;
        const savedState = localStorage.getItem(`toggle-state-${inputId}`);
        if (savedState !== null) {
            const state = parseInt(savedState);
            button.setAttribute('data-state', state);
            button.classList.remove('half-filled', 'filled');
            if (state === 1) {
                button.classList.add('half-filled');
            } else if (state === 2) {
                button.classList.add('filled');
            }
        }
    });
}
function saveButtonState(button, state) {
    const inputId = button.previousElementSibling.id;
    localStorage.setItem(`toggle-state-${inputId}`, state);
}
document.addEventListener('DOMContentLoaded', loadButtonStates);
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        let state = parseInt(button.getAttribute('data-state'));
        state = (state + 1) % 3;
        button.setAttribute('data-state', state);
        button.classList.remove('half-filled', 'filled');
        if (state === 1) {
            button.classList.add('half-filled');
        } else if (state === 2) {
            button.classList.add('filled');
        }
        saveButtonState(button, state);
    });
});
document.querySelectorAll('textarea').forEach(textarea => { 
    textarea.addEventListener('input', function() {
        if (this.id) {
            localStorage.setItem(this.id, this.value);
        }
    });
});
window.addEventListener('load', function() {
    document.querySelectorAll('textarea').forEach(textarea => {
        if (textarea.id && localStorage.getItem(textarea.id)) {
            textarea.value = localStorage.getItem(textarea.id);
        }
    });
});
    document.addEventListener('DOMContentLoaded', () => {
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const textareaId = textarea.id || generateUUID();
        if (!textarea.id) textarea.id = textareaId; 
        const savedAttrs = localStorage.getItem(`textarea_${textareaId}`);
        if (savedAttrs) {
            const attrs = JSON.parse(savedAttrs);
            Object.keys(attrs).forEach(key => {
                textarea.setAttribute(key, attrs[key]);
            });
        }
    });
    textareas.forEach(textarea => {
        textarea.addEventListener('input', () => {
            const textareaId = textarea.id;
            const attrs = {};
            for (let attr of textarea.attributes) {
                attrs[attr.name] = attr.value;
            }
            localStorage.setItem(`textarea_${textareaId}`, JSON.stringify(attrs));
        });
    });
});
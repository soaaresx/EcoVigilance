// Remove o # da URL sem recarregar a página
window.history.pushState("", document.title, window.location.pathname);

// Preview de arquivos
const fileInput = document.getElementById('files');
const filePreview = document.getElementById('file-preview');

fileInput.addEventListener('change', function() {
    filePreview.innerHTML = '';
    for(let file of this.files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const div = document.createElement('div');
            if(file.type.startsWith('image/')) {
                div.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            } else if(file.type.startsWith('video/')) {
                div.innerHTML = `<video src="${e.target.result}" controls></video>`;
            }
            filePreview.appendChild(div);
        }
        reader.readAsDataURL(file);
    }
}); 
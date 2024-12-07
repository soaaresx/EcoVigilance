// Função para formatar o tamanho do arquivo
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Preview de arquivos
const fileInput = document.getElementById('files');
const filePreview = document.getElementById('file-preview');
const maxFileSize = 1024 * 1024 * 1024; // 1GB em bytes
let uploadedFiles = []; // Array para armazenar os arquivos

fileInput.addEventListener('change', function() {
    const files = Array.from(this.files);

    files.forEach(file => {
        // Verificar tamanho do arquivo
        if (file.size > maxFileSize) {
            alert(`O arquivo ${file.name} excede o limite de 1GB`);
            return;
        }

        // Adicionar arquivo ao array
        uploadedFiles.push(file);

        const previewContainer = document.createElement('div');
        previewContainer.className = 'preview-item';

        // Adicionar nome e tamanho do arquivo
        const fileInfo = document.createElement('div');
        fileInfo.className = 'file-info';
        fileInfo.innerHTML = `
            <span class="file-name">${file.name}</span>
            <span class="file-size">(${formatFileSize(file.size)})</span>
        `;

        // Botão de remover
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '×';
        removeButton.className = 'remove-file';
        removeButton.onclick = function() {
            const index = uploadedFiles.indexOf(file);
            if (index > -1) {
                uploadedFiles.splice(index, 1);
            }
            previewContainer.remove();
        };

        previewContainer.appendChild(removeButton);

        const reader = new FileReader();
        reader.onload = function(e) {
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = e.target.result;
                previewContainer.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = e.target.result;
                video.controls = true;
                previewContainer.appendChild(video);
            }
            previewContainer.appendChild(fileInfo);
        };
        reader.readAsDataURL(file);

        filePreview.appendChild(previewContainer);
    });
});

// Drag and drop
const dropZone = document.querySelector('.file-upload');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
    dropZone.classList.add('drag-over');
}

function unhighlight(e) {
    dropZone.classList.remove('drag-over');
}

dropZone.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileInput.files = files;
    
    // Disparar evento change manualmente
    const event = new Event('change');
    fileInput.dispatchEvent(event);
}

// Adicionar evento de submit ao formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Verificar se há arquivos anexados
    if (uploadedFiles.length > 0) {
        console.log('Arquivos anexados:', uploadedFiles.map(f => f.name));
    }
    
    // Simular envio bem-sucedido e redirecionar
    window.location.href = 'success.html';
}); 
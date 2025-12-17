document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageFile');
    const titleInput = document.getElementById('imageTitle');
    const addButton = document.getElementById('addButton');
    const galleryContainer = document.getElementById('galleryContainer');
    const imageCountElement = document.getElementById('imageCount');
    const storageUsageElement = document.getElementById('storageUsage');
    
    // Carregar imagens do localStorage ao iniciar
    let images = JSON.parse(localStorage.getItem('galleryImages')) || [];
    renderGallery();
    updateStorageInfo();
    
    // Evento para adicionar imagem
    addButton.addEventListener('click', addImage);
    
    function addImage() {
        const file = imageInput.files[0];
        const title = titleInput.value.trim() || 'Imagem Sem Título';
        
        if (!file) {
            alert('Por favor, selecione uma imagem.');
            return;
        }
        
        // Verificar o tamanho da imagem (limite de 1MB)
        if (file.size > 1024 * 1024) {
            alert('A imagem é muito grande. Por favor, selecione uma imagem menor que 1MB.');
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imageId = Date.now().toString();
            const imageData = {
                id: imageId,
                title: title,
                dataUrl: e.target.result
            };
            
            images.push(imageData);
            saveToLocalStorage();
            renderGallery();
            updateStorageInfo();
            
            // Resetar o formulário
            imageInput.value = '';
            titleInput.value = '';
        };
        
        reader.readAsDataURL(file);
    }
    
    function removeImage(imageId) {
        images = images.filter(image => image.id !== imageId);
        saveToLocalStorage();
        renderGallery();
        updateStorageInfo();
    }
    
    function saveToLocalStorage() {
        localStorage.setItem('galleryImages', JSON.stringify(images));
    }
    
    function renderGallery() {
        galleryContainer.innerHTML = '';
        
        if (images.length === 0) {
            galleryContainer.innerHTML = `
                <div class="empty-gallery">
                    <p>Nenhuma imagem adicionada ainda.</p>
                    <p>Use o formulário acima para adicionar imagens à galeria.</p>
                </div>
            `;
            imageCountElement.textContent = '0';
            return;
        }
        
        images.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${image.dataUrl}" alt="${image.title}">
                <div class="title">${image.title}</div>
                <div class="delete-btn" data-id="${image.id}">✕</div>
            `;
            galleryContainer.appendChild(galleryItem);
            
            // Adicionar evento de remoção
            const deleteBtn = galleryItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                removeImage(image.id);
            });
        });
        
        imageCountElement.textContent = images.length;
    }
    
    function updateStorageInfo() {
        const data = JSON.stringify(images);
        const sizeInBytes = new Blob([data]).size;
        const sizeInKB = (sizeInBytes / 1024).toFixed(2);
        storageUsageElement.textContent = `${sizeInKB} KB`;
    }
});
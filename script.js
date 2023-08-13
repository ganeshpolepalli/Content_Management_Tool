const imageUpload = document.getElementById('image-upload');
const imagePreview = document.getElementById('image-preview');
const videoUrlInput = document.getElementById('video-url');
const videoPreview = document.getElementById('video-preview');

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    imagePreview.innerHTML = `<img src="${imageURL}" alt="Image Preview">`;
});

videoUrlInput.addEventListener('input', () => {
    const videoURL = videoUrlInput.value;
    videoPreview.innerHTML = `<iframe width="100%" height="315" src="${videoURL}" frameborder="0" allowfullscreen></iframe>`;
});

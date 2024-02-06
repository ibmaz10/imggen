const accessKey = 'oaniN2JVJs6n6k1JIsVEPUCXn5B93FFnHCJXsE3jNkc'; // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash access key
const imageContainer = document.getElementById('imageContainer');
const generateButton = document.getElementById('generateButton');

function generateRandomImage() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }
            return response.json();
        })
        .then(data => {
            const imageUrl = data.urls.regular;
            const img = document.createElement('img');
            img.src = imageUrl;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching random image:', error);
            imageContainer.innerHTML = '<p>Error fetching image. Please try again later.</p>';
        });
}

generateButton.addEventListener('click', generateRandomImage);

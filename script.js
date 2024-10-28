function changeBackground(color) {
    if (color === 'white' || color === 'blue' || color === 'red') {
        document.body.style.backgroundImage = 'none'; // Remove background image
        document.body.style.backgroundColor = color;

        // Check if the back button already exists
        const backButton = document.querySelector('.back-button');
        if (!backButton) {
            const newBackButton = document.createElement('button');
            newBackButton.classList.add('back-button');
            newBackButton.textContent = 'Назад';
            newBackButton.onclick = function() {
                document.body.style.backgroundColor = ''; // Restore original background color
                document.body.style.backgroundImage = 'url(http://surl.li/njjlal)'; // Restore background image
                this.remove();
            };
            document.body.appendChild(newBackButton);
        }
    }
}

// Function to restore the original background on page load if needed
function restoreOriginalBackground() {
    document.body.style.backgroundImage = 'url(http://surl.li/njjlal)';
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', restoreOriginalBackground);
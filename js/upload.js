    function loadInspo() {
        const inspoGrid = document.getElementById('inspoGrid');
        inspoGrid.innerHTML = ''; // Clear previous content
        
        inspoPhotos.forEach(src => {
            const pin = document.createElement('div');
            pin.className = 'pin-item';
            pin.innerHTML = `<img src="${src}" alt="Inspo" onerror="this.src='https://via.placeholder.com'">`;
            inspoGrid.appendChild(pin);
        });
    }

    // Initialize the feed when the page loads
    window.addEventListener('DOMContentLoaded', loadInspo);
</script>

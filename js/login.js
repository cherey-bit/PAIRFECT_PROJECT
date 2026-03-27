document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ELEMENTS
    const loginForm = document.querySelector('.login-form');
    const googleBtn = document.querySelector('.btn-alt');
    const toggleLink = document.querySelector('#switch-to-signup');
    const tagline = document.querySelector('.login-tagline');
    
    // Modal Elements
    const googleModal = document.getElementById('googleModal');
    const modalConfirm = document.getElementById('modalConfirm');
    const modalCancel = document.getElementById('modalCancel');
    
    let isSignUpMode = false;

    // 2. TOGGLE UI (Login vs Signup)
    if (toggleLink) {
        toggleLink.addEventListener('click', () => {
            isSignUpMode = !isSignUpMode;
            if (isSignUpMode) {
                tagline.innerHTML = "Join the <br><em>Style Revolution</em>";
                toggleLink.innerText = "Already have an account? Login";
                document.querySelectorAll('.login-input').forEach(el => el.style.display = 'none');
                document.querySelector('.btn-login').style.display = 'none';
                document.querySelector('.login-divider').style.display = 'none';
            } else {
                tagline.innerHTML = "Your Smart <br><em>Outfit Assistant</em>";
                toggleLink.innerText = "New to Pairfect? Create an account";
                document.querySelectorAll('.login-input').forEach(el => el.style.display = 'block');
                document.querySelector('.btn-login').style.display = 'block';
                document.querySelector('.login-divider').style.display = 'flex';
            }
        });
    }

    // 3. GOOGLE MODAL LOGIC
    if (googleBtn) {
        googleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            googleModal.style.display = 'flex'; // Open the modal
        });
    }

    if (modalCancel) {
        modalCancel.addEventListener('click', () => {
            googleModal.style.display = 'none'; // Close the modal
        });
    }

    if (modalConfirm) {
        modalConfirm.addEventListener('click', () => {
            const actionText = isSignUpMode ? "Creating profile..." : "Verifying...";
            modalConfirm.innerText = actionText;
            modalConfirm.style.opacity = "0.7";

            // Wait a moment then redirect
            setTimeout(() => {
                if (isSignUpMode) {
                    alert("Welcome to Pairfect! Your Google account is now linked.");
                }
                window.location.href = "home.html";
            }, 1500);
        });
    }
});

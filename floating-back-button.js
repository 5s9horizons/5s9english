// Create and append the floating back button
function createFloatingBackButton() {
    const button = document.createElement('button');
    button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
    `;
    button.className = 'floating-back-btn';
    
    // Add styles dynamically
    const styles = document.createElement('style');
    styles.textContent = `
        .floating-back-btn {
            position: fixed;
            top: 80px;
            left: 10px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #ffd700;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .floating-back-btn:hover {
            background: #1976D2;
            transform: translateY(-2px);
        }

        .floating-back-btn:hover svg {
            stroke: white;
        }

        .floating-back-btn svg {
            stroke: navy;
            transition: stroke 0.3s ease;
        }

        @media (max-width: 768px) {
            .floating-back-btn {
                top: 80px;
                left: 10px;
                width: 40px;
                height: 40px;
            }
        }
    `;

    // Append elements to document
    document.head.appendChild(styles);
    document.body.appendChild(button);

    // Add click handler
    button.addEventListener('click', () => {
        // Check if there's a previous page in history
        if (document.referrer) {
            window.history.back();
        } else {
            // Fallback to home page if no history
            window.location.href = '/index.html';
        }
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingBackButton);
} else {
    createFloatingBackButton();
}
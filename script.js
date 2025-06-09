// Enhanced tab functionality
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Course details tabs functionality
document.querySelectorAll('.detail-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.detail-panel').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const detailId = this.getAttribute('data-detail');
        document.getElementById(detailId).classList.add('active');
    });
});

// Create animated stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create floating shapes
function createFloatingShapes() {
    const shapesContainer = document.querySelector('.floating-shapes');
    const colors = ['#00B4D8', '#8B5CF6', '#F472B6'];
    
    setInterval(() => {
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.width = Math.random() * 20 + 10 + 'px';
        shape.style.height = shape.style.width;
        shape.style.background = colors[Math.floor(Math.random() * colors.length)];
        shape.style.opacity = Math.random() * 0.3 + 0.1;
        shape.style.animationDuration = Math.random() * 15 + 10 + 's';
        shapesContainer.appendChild(shape);
        
        // Remove shape after animation
        setTimeout(() => {
            if (shape.parentNode) {
                shape.parentNode.removeChild(shape);
            }
        }, 25000);
    }, 2000);
}

// Parallax effect for container
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.querySelector('.space-bg').style.transform = `translateY(${rate}px)`;
});

// Initialize animations
createStars();
createFloatingShapes();

// Add hover effects to cards
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 40px rgba(0, 180, 216, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Add click ripple effect
document.querySelectorAll('.nav-tab, .github-link, .info-card').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

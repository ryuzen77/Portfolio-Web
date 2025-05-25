// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Add skills dynamically
    const skills = [
        'Python',
        'Machine Learning',
        'TensorFlow',
        'Computer Vision',
        'Data Analysis',
        'Deep Learning',
        'SQL',
        'Neural Networks'
    ];
    const skillsList = document.getElementById('skills-list');
    
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Add projects dynamically
    const projects = [
        {
            title: 'AI Vision System',
            description: 'Computer vision system using deep learning for real-time object detection and facial recognition.',
            image: 'images/ai-project.jpg'
        },
        {
            title: 'Machine Learning Analytics',
            description: 'Predictive analytics platform using advanced ML algorithms for business intelligence.',
            image: 'images/ml-project.jpg'
        },
        {
            title: 'Interactive Dashboard',
            description: 'Real-time data visualization dashboard with dynamic charts and ML-powered insights.',
            image: 'images/dasboard.jpg'
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // CTA button functionality
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        const headerOffset = document.querySelector('header').offsetHeight;
        const projectsSection = document.querySelector('#projects');
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        // Here you would typically send the data to a server
        // For this example, we'll just display a success message
        formStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
        formStatus.style.color = 'green';
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    });

    // Navbar scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
});
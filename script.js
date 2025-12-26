// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Dark mode toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            
            // Update button emoji
            themeToggle.textContent = isDarkMode ? '🌓' : '🌙';
        });

        // Check for saved theme preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '🌓';
        }

        // Animate skill bars on scroll
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const percent = bar.getAttribute('data-percent');
                bar.style.width = percent + '%';
            });
        }

        // Run animation when skills section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        // Add current year to copyright
        document.querySelector('.copyright p').innerHTML = 

            `&copy; ${new Date().getFullYear()} Piseth Bun. All rights reserved.`;

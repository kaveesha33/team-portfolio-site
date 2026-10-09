document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       1. TYPING EFFECT
       ========================================== */

    const typingElement =
        document.getElementById("typing-text");

    if (typingElement) {

        const words = [
            "Team Portfolio",
            "Creative Team",
            "Full-Stack Team",
            "Web Developers"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;


        function typeEffect() {

            const currentWord =
                words[wordIndex];


            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                if (
                    charIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1200
                    );

                    return;
                }


                setTimeout(
                    typeEffect,
                    100
                );

            } else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1)
                        % words.length;
                }


                setTimeout(
                    typeEffect,
                    60
                );
            }
        }


        typeEffect();
    }


    /* ==========================================
       2. MOBILE MENU
       ========================================== */

    const menuButton =
        document.getElementById("menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuButton && navLinks) {

        menuButton.addEventListener(
            "click",
            function () {

                navLinks.classList.toggle(
                    "show"
                );


                const isOpen =
                    navLinks.classList.contains(
                        "show"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                );
            }
        );


        // Close menu after clicking a link
        const links =
            navLinks.querySelectorAll("a");


        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "show"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            );
        });
    }



    /* ==========================================
       3. DARK MODE TOGGLE
       ========================================== */

    const themeButton = document.getElementById("dark-mode-toggle");

    if (themeButton) {

        // Load the saved theme
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }

        // Set the initial button appearance
        function updateThemeButton() {
            const darkMode = document.body.classList.contains("dark-mode");

            themeButton.textContent = darkMode ? "☀" : "☾";
            themeButton.setAttribute("aria-pressed", darkMode);
        }

        updateThemeButton();

        // Toggle between light mode and dark mode
        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const darkMode = document.body.classList.contains("dark-mode");

            // Save the selected theme
            localStorage.setItem("theme", darkMode ? "dark" : "light");

            // Update the button
            updateThemeButton();
        });
    }


    /* ==========================================
       4. ACTIVE NAVIGATION LINK
       ========================================== */

    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    function updateActiveLink() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;


            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.id;
            }
        });


        navItems.forEach(function (link) {

            link.classList.remove(
                "active"
            );


            const target =
                link.getAttribute("href");


            if (
                target ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );
            }
        });
    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();


    /* ==========================================
       5. CONTACT FORM VALIDATION
       ========================================== */

    const contactForm =
        document.getElementById(
            "contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name");


                const email =
                    document.getElementById("email");


                const message =
                    document.getElementById("message");


                /* Empty field validation */

                if (
                    name.value.trim() === "" ||
                    email.value.trim() === "" ||
                    message.value.trim() === ""
                ) {

                    alert(
                        "Please fill in all fields."
                    );

                    return;
                }


                /* Email validation */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(
                        email.value.trim()
                    )
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    email.focus();

                    return;
                }


                /* Successful submission */

                alert(
                    "Thanks! Your message was sent."
                );


                contactForm.reset();
            }
        );
    }


    /* ==========================================
       6. FOOTER YEAR
       ========================================== */

    const footerYear =
        document.getElementById(
            "footer-year"
        );


    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();
    }

});

(function () {
    /* Preloader */
    window.onload = () => {
        setTimeout(() => {
            const preloader = document.getElementById("preloader")
            document.body.classList.remove("hidden")
            preloader.classList.remove("visible");
        }, 1200)
    }
    const nav = document.getElementById("nav");
    const mobile_menu = document.getElementById("mobile_menu_place");
    const header = document.getElementById("header");
    const navLinks = document.getElementsByClassName("nav_link")
    const footerNavLinks = document.getElementsByClassName("footer__nav_link")
    const href = location.href
    const scrolling = 250
    const scrollY = window.scrollY

    if (scrollY > scrolling) header.classList.add("scroll")

// Active anchor
    if (href.includes("#")) {
        const anchor = "#" + href.split("#")[1]
        for (let i = 0; i < navLinks.length; i++) {
            const anchorLink = "#" + navLinks[i].href.split("#")[1]
            if (anchorLink === anchor) {
                navLinks[i].classList.add("_active_link")
                footerNavLinks[i].classList.add("_footer_active_link")
            }
        }
    } else {
        navLinks[0].classList.add("_active_link")
        footerNavLinks[0].classList.add("_footer_active_link")
    }

    const menuHandler = () => {
        nav.classList.toggle("_active")
        mobile_menu.classList.toggle("_active")
        document.body.classList.toggle("hidden")
    }

    mobile_menu.onclick = () => menuHandler()
    for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i]
        const footerLink = footerNavLinks[i]
        link.onclick = () => {
            const footerActiveLink = document.getElementsByClassName("_footer_active_link")
            const activeLink = document.getElementsByClassName("_active_link")
            if (footerActiveLink.length) {
                footerActiveLink[0].classList.remove("_footer_active_link")
            }
            if (activeLink.length) {
                activeLink[0].classList.remove("_active_link")
            }
            link.classList.add("_active_link")
            footerLink.classList.add("_footer_active_link")
            nav.classList.remove("_active")
            mobile_menu.classList.remove("_active")
            document.body.classList.remove("hidden")
        }
        footerLink.onclick = () => {
            const footerActiveLink = document.getElementsByClassName("_footer_active_link")
            const activeLink = document.getElementsByClassName("_active_link")
            if (footerActiveLink.length) {
                footerActiveLink[0].classList.remove("_footer_active_link")
            }
            if (activeLink.length) {
                activeLink[0].classList.remove("_active_link")
            }
            footerLink.classList.add("_footer_active_link")
            link.classList.add("_active_link")
            nav.classList.remove("_active")
            mobile_menu.classList.remove("_active")
            document.body.classList.remove("hidden")
        }

    }


    // Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        speed: 800,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });


    document.addEventListener("scroll", (e) => {
        if (e.target.documentElement.scrollTop > scrolling) return header.classList.add("scroll")
        if (e.target.documentElement.scrollTop < scrolling) return header.classList.remove("scroll")
    })
    const animItems = document.getElementsByClassName("_anim-items")
    const offset = el => {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    const scrollAnimate = () => {
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animPart = 6;
            let animItemPoint = window.innerHeight - animItemHeight / animPart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animPart;
            }
            if(pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add("animate")
            }
        }
    }
    scrollAnimate()
    document.addEventListener("scroll", scrollAnimate)
})();

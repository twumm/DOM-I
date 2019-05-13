const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Selectors for nav items and cta
let navLinks = document.querySelectorAll('a');
let ctaH1 = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');
// Selectors for top content in main tag
let mainTopContent = document.querySelectorAll('.top-content');
let mainTopContentFeaturesH4 = mainTopContent[0].children[0].children[0];
let mainTopContentFeaturesContent = mainTopContent[0].children[0].children[1];
let mainTopContentAboutH4 = mainTopContent[0].children[1].children[0];
let mainTopContentAboutContent = mainTopContent[0].children[1].children[1];
let mainContentImg = document.querySelector('#middle-img');
// Selectors for bottom content in main tag
let mainBottom = document.querySelectorAll('.bottom-content');
let mainBottomServiceH4 = mainBottom[0].children[0].children[0];
let mainBottomServiceContent = mainBottom[0].children[0].children[1];
let mainBottomProductH4 = mainBottom[0].children[1].children[0];
let mainBottomProductContent = mainBottom[0].children[1].children[1];
let mainBottomVisionH4 = mainBottom[0].children[2].children[0];
let mainBottomVisionContent = mainBottom[0].children[2].children[1];
// Selectors for contact section
let contactH4 = document.querySelector('.contact h4');
let contactParas = document.querySelectorAll('.contact p');
let contactAddress = contactParas[0];
let contactPhone = contactParas[1];
let contactEmail = contactParas[2];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/**
 *  Insert all images using DOM manipulation
  */
// Image for CTA
ctaImg.setAttribute('src', siteContent.cta["img-src"]);
ctaImg.setAttribute('style', 'display: flex;');
// Image for main content
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Update all HTML content using selectors
navLinks.forEach((navLink, index) => navLink.innerText = siteContent.nav["nav-item-" + (index + 1)]);
ctaH1.innerText = siteContent.cta.h1;
ctaButton.innerText = siteContent.cta.button;

mainTopContentFeaturesH4.innerText = siteContent["main-content"]["features-h4"]
mainTopContentFeaturesContent.innerText = siteContent["main-content"]["features-content"];
mainTopContentAboutH4.innerText = siteContent["main-content"]["about-h4"]
mainTopContentAboutContent.innerText = siteContent["main-content"]["about-content"]
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
    "h1": "DOM \r\n Is \r\n Awesome",
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
    "address" : "123 Way 456 \r\n Street Somewhere, USA",
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
// Selector for footer
let footerCopyright = document.querySelector('footer p');

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
navLinks.forEach((navLink, index) => {
  navLink.innerText = siteContent.nav["nav-item-" + (index + 1)]
  navLink.setAttribute('style', 'color: green');
});
ctaH1.innerText = siteContent.cta.h1;
ctaButton.innerText = siteContent.cta.button;
// Add content for main content top section
mainTopContentFeaturesH4.innerText = siteContent["main-content"]["features-h4"]
mainTopContentFeaturesContent.innerText = siteContent["main-content"]["features-content"];
mainTopContentAboutH4.innerText = siteContent["main-content"]["about-h4"]
mainTopContentAboutContent.innerText = siteContent["main-content"]["about-content"]
// Add content for main content bottom section
mainBottomServiceH4.innerText = siteContent["main-content"]["services-h4"];
mainBottomServiceContent.innerText = siteContent["main-content"]["services-content"];
mainBottomProductH4.innerText = siteContent["main-content"]["product-h4"];
mainBottomProductContent.innerText = siteContent["main-content"]["product-content"];
mainBottomVisionH4.innerText = siteContent["main-content"]["vision-h4"];
mainBottomVisionContent.innerText = siteContent["main-content"]["vision-content"];
// Add content for contact section
contactH4.innerText = siteContent.contact["contact-h4"];
contactAddress.innerText = siteContent.contact["address"];
contactPhone.innerText = siteContent.contact["phone"];
contactEmail.innerText = siteContent.contact["email"];
// Add content for footer copyright
footerCopyright.innerText = siteContent.footer.copyright;

// Add new content with appendChild()
let appendAnchor = document.createElement('a');
let prependAnchor = document.createElement('a');
let navNode = document.body.children[0].children[0].childNodes[1];
navNode.appendChild(appendAnchor);
navNode.prepend(prependAnchor)
appendAnchor.innerText = 'Append';
prependAnchor.innerText = 'Prepend';
appendAnchor.style.color = 'green';
prependAnchor.style.color = 'green';

// Stretch Goals
mainBottom[0].children[0].style.color = "red";
mainBottom[0].children[1].style.color = "#D65032";
mainBottom[0].children[2].style.color = "#EC6E51";

// Event handler for on click
const hideImage = () => {
  ctaImg.setAttribute('style', 'display: none;');
}
// Add button beneath image
hideButton = document.createElement('button');
hideButton.innerText = 'Click Me!';
hideButton.setAttribute('style', 'display: flex; justify-content: center; width: 170px; height: 32px;');
// Insert button
ctaImg.insertAdjacentElement('afterend', hideButton)
// Add event listener to button
hideButton.addEventListener("click", hideImage);
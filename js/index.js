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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent.cta["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let navItem = document.querySelectorAll('a');
navItem[0].textContent = siteContent.nav["nav-item-1"];
navItem[1].textContent = siteContent.nav["nav-item-2"];
navItem[2].textContent = siteContent.nav["nav-item-3"];
navItem[3].textContent = siteContent.nav["nav-item-4"];
navItem[4].textContent = siteContent.nav["nav-item-5"];
navItem[5].textContent = siteContent.nav["nav-item-6"];

navItem.forEach((link) => {
  // link.textContent = siteContent.nav["nav-item-1"]
  link.style.color = "green";
})

// ------this works----
let h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;
h1.style.wordSpacing = '500px';


// let br = document.createElement("br")

// let h1 = document.querySelector('h1');
// let newH1 = siteContent.cta.h1.split(" ");
// let dom = newH1[0];
// let is = `${newH1[1]} ${newH1[2]}`;
// h1.textContent = dom + is;

// let h1 = document.querySelector('h1').innerHTML

let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

let h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent.contact["contact-h4"];

let p = document.querySelectorAll('p');
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];
p[5].textContent = siteContent.contact.address;
p[6].textContent = siteContent.contact.phone;
p[7].textContent = siteContent.contact.email;
p[8].textContent = siteContent.footer.copyright;

let contact = document.querySelector('.contact');
contact.style.width = '150px';

let domNav = document.querySelector('nav');

let linkSignup = document.createElement('a');
linkSignup.setAttribute('href', '#');
linkSignup.textContent = 'Sign Up';
linkSignup.style.color = 'green';
domNav.prepend(linkSignup);

let linkTraining = document.createElement('a');
linkTraining.setAttribute('href', '#');
linkTraining.textContent = 'Training';
linkTraining.style.color = 'green';
domNav.appendChild(linkTraining);



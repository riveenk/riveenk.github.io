// Helper function to create navigation items
function createNavItem(text, href) {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", href);
  const button = document.createElement("button");
  button.classList.add("nav-items");
  button.textContent = text;
  anchor.appendChild(button);
  return anchor;
}

// Dynamically call Normal Template
// Create navigation elements
const navDiv = document.createElement("div");
navDiv.classList.add("nav");

const homeAnchor = createNavItem("Home", "/index.html");

// Create Publications item without hyperlink
const publicationsButton = document.createElement("button");
publicationsButton.classList.add("nav-items");
publicationsButton.textContent = "Publications";
publicationsButton.addEventListener("mouseover", showDropdown);
publicationsButton.addEventListener("mouseout", hideDropdown);

const publicationsDiv = document.createElement("div");
publicationsDiv.appendChild(publicationsButton);

const aboutMeAnchor = createNavItem("About Me", "/page/about-me.html");

const dropdownContentDiv = document.createElement("div");
dropdownContentDiv.classList.add("dropdown-content");

const dropdownLinks = [
  { text: "Creatives", href: "/page/stories-poems.html" },
  { text: "Projects", href: "/page/projects.html" },
  { text: "Photos", href: "/page/photos.html" },
  { text: "Archive", href: "/page/archive.html" }
];

dropdownLinks.forEach(link => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link.href);
  anchor.textContent = link.text;
  dropdownContentDiv.appendChild(anchor);
});

publicationsDiv.appendChild(dropdownContentDiv);

// Append elements to the nav div
navDiv.appendChild(homeAnchor);
navDiv.appendChild(publicationsDiv);
navDiv.appendChild(aboutMeAnchor);

// Create footer elements
const footerDiv = document.createElement("div");
footerDiv.classList.add("footer");

function createFooterItem(headingText, contentHTML) {
  const footerItem = document.createElement("div");
  footerItem.classList.add("footer-items");

  const footerHeading = document.createElement("span");
  footerHeading.classList.add("footer-heading");
  footerHeading.textContent = headingText;
  footerHeading.style.display = "block"; // Make span behave like a block element
  footerHeading.style.margin = "0"; // Remove default margin

  const footerItemContent = document.createElement("div");
  footerItemContent.innerHTML = `<hr style="margin: 5;">${contentHTML}`;

  footerItem.appendChild(footerHeading);
  footerItem.appendChild(footerItemContent);

  return footerItem;
}

const footerItem1 = createFooterItem("About Me", "I am a student with a craze for starry nights and poetic words. I share my works and articles here, see around and find what interests we share.");
const footerItem2 = createFooterItem("Links", '<a href="/page/notice.html" class="a-no-und"> Notice to Visitors </a> | <a href="/page/credits-disclaimers.html" class="a-no-und">Credits and Disclaimers</a> | <a href="/page/contact-us.html" class="a-no-und">Contact Us</a>');
const footerItem3 = createFooterItem("Copyright", 'Riveen Kumanayaka © 2024 - Present | Full notice <a href="/page/copyright.html" class="a">here</a>');

// Append all footer items to the footer div
footerDiv.appendChild(footerItem1);
footerDiv.appendChild(footerItem2);
footerDiv.appendChild(footerItem3);

// Dynamically call State Template
// Dynamically calling header
// Create header elements
const headerDivSc = document.createElement("div");
headerDivSc.classList.add("header");

const headerContentDivSc = document.createElement("div");

const headerTitleSc = document.createElement("h1");
headerTitleSc.classList.add("header-text");
headerTitleSc.textContent = "Lord's Kingdom of Scalmropia";

const subHeaderSc = document.createElement("h3");
subHeaderSc.classList.add("subheader-text");
subHeaderSc.textContent = "Maintained by the Ministry of State Affairs on behalf of Our Lord Creator, and His Majesty the King.";

headerContentDivSc.appendChild(headerTitleSc);
headerContentDivSc.appendChild(subHeaderSc);

headerDivSc.appendChild(headerContentDivSc);

// Create navigation elements
const navDivSc = document.createElement("div");
navDivSc.classList.add("nav");

const navLinksSc = [
  { text: "Back", href: "/page/stories-poems.html" },
  { text: "Home", href: "/state/index.html" },
  { text: "Tales", href: "/state/tales.html" },
  { text: "ID/ Visa", href: "/state/documents.html" },
  { text: "World", href: "/state/world.html" },
  { text: "Media", href: "https://scalmropia.tumblr.com/" }
];

navLinksSc.forEach(linkSc => {
  const linkButtonSc = document.createElement("button");
  linkButtonSc.textContent = linkSc.text;

  const anchorSc = document.createElement("a");
  anchorSc.setAttribute("href", linkSc.href);
  anchorSc.appendChild(linkButtonSc);

  navDivSc.appendChild(anchorSc);
});

// Append header, nav, and footer to the body
document.body.appendChild(headerDivSc);
document.body.appendChild(navDivSc); // State Template Navigation
document.body.appendChild(navDiv); // Normal Template Navigation
document.body.appendChild(footerDivSc);
document.body.appendChild(footerDiv);

// Dynamically call the footer
// Create footer elements
const footerDivSc = document.createElement("div");
footerDivSc.classList.add("footer");

const footerItemsDivSc = document.createElement("div");
footerItemsDivSc.classList.add("footer-items");

const termsAndConditionsLinkSc = document.createElement("a");
termsAndConditionsLinkSc.setAttribute("href", "/page/notice.html");
termsAndConditionsLinkSc.classList.add("a");
termsAndConditionsLinkSc.textContent = "Terms and Conditions";

const inquiriesLinkSc = document.createElement("a");
inquiriesLinkSc.setAttribute("href", "/page/contact-us.html");
inquiriesLinkSc.classList.add("a");
inquiriesLinkSc.textContent = "Inquiries";

const governmentCopyrightLinkSc = document.createElement("a");
governmentCopyrightLinkSc.setAttribute("href", "/page/copyright.html");
governmentCopyrightLinkSc.classList.add("a");
governmentCopyrightLinkSc.textContent = "© Government of Scalmropia";

// Append links to footer items div
footerItemsDivSc.appendChild(termsAndConditionsLinkSc);
footerItemsDivSc.appendChild(document.createTextNode(" | "));
footerItemsDivSc.appendChild(inquiriesLinkSc);
footerItemsDivSc.appendChild(document.createTextNode(" | "));
footerItemsDivSc.appendChild(governmentCopyrightLinkSc);

// Function for Photos page redirect
let redirect = true;

function changeRedir() {
  redirect = false;
}

function redirecter() {
  if (redirect) {
    window.location.href = "https://www.instagram.com/photo.rpk/";
  }
}

// Function to show dropdown by hover
let timeout;

function showDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent) {
    dropdownContent.style.display = "block";
    clearTimeout(timeout);
  } else {
    console.error("Dropdown content not found");
  }
}

function hideDropdown() {
  timeout = setTimeout(() => {
    const dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent) {
      dropdownContent.style.display = "none";
    } else {
      console.error("Dropdown content not found");
    }
  }, 3000);
}

// Function to add Trusted Site JS
const script = document.createElement('script');
script.src = 'https://cdn.ywxi.net/js/1.js';
script.type = 'text/javascript';
script.async = true;
document.head.appendChild(script);

// Adding the meta data
const metaOne = document.createElement('meta');
metaOne.charset = "UTF-8";
document.head.appendChild(metaOne);

const metaTwo = document.createElement('meta');
metaTwo.name = "description";
metaTwo.content = "A random blogger with too much free time.";
document.head.appendChild(metaTwo);

const metaThree = document.createElement('meta');
metaThree.name = "keywords";
metaThree.content = "Riveen, Riveen Kumanayaka, Blogger, Student, Random, Sri Lankan, Sinhala, Debating, Astronomy, Teaching, Poetry, Prose";
document.head.appendChild(metaThree);

const metaFour = document.createElement('meta');
metaFour.name = "author";
metaFour.content = "Riveen Kumanayaka";
document.head.appendChild(metaFour);

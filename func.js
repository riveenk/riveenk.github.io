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

// Create footer elements
const footerDiv = document.createElement("div");
footerDiv.classList.add("footer");
footerDiv.style.textAlign = "center"

function createFooterItem(contentHTML) {
  const footerItem = document.createElement("div");
  footerItem.classList.add("footer-items");

  const footerItemContent = document.createElement("div");
  footerItemContent.innerHTML = `${contentHTML}`;

  footerItem.appendChild(footerItemContent);

  return footerItem;
}

const footerItem2 = createFooterItem('<a href="/page/notice.html#copyright" class="a-no-und">Copyright © All Rights Reserved</a> | <a href="/page/notice.html" class="a-no-und">Notice to Visitors</a> | <a href="/page/archive.html" class="a-no-und">Archive</a>');

// Append all footer items to the footer div
footerItem2.style.marginLeft = "auto"
footerItem2.style.marginRight = "auto"
footerDiv.appendChild(footerItem2);


// Function to add Trusted Site JS
const script = document.createElement('script');
script.src = 'https://cdn.ywxi.net/js/1.js';
script.type = 'text/javascript';
script.async = true;
document.head.appendChild(script);

// Function to load the Font Awesome Set
const faSet = document.createElement('link');
faSet.rel = "stylesheet";
faSet.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
document.head.appendChild(faSet);

// Update the title

document.addEventListener("DOMContentLoaded", () => {
  const excludedPaths = [
    "/index.html",
    "/page/scalmropia.html",
    "/page/copyright.html",
    "/page/podcast.html",
    "/publications/index.html",
    "/debating/index.html",
    "/page/about-me.html",
    "/debating/timer.html",
    "/page/notice.html",
    "/page/archive.html",
    "/404.html",
    "/stuff/index.html",
    "/stuff/for-you.html"
  ];

  const customPathsTitle = [
    "On My Wavelength",
    "The Scalmropia Archive",
    "On My Wavelength: Copyright Notice",
    "Wanna Be Cancelled?",
    "Reading My Wavelength",
    "Debating On My Wavelength",
    "Wave Properties",
    "On My Wavelength: Debating Timer",
    "On My Wavelength: Notice to Visitors",
    "On My Wavelength: Archive",
    "On the Wrong Wavelength",
    "Sharing On My Wavelength",
    "Constructive Interference"
  ];

  const currentPath = window.location.pathname;

  if (!excludedPaths.includes(currentPath)) {
    const firstH2 = document.querySelector("h2");
    if (firstH2) {
      document.title = firstH2.textContent.trim();
    } else {
      document.title = "On My Wavelength"
    }
  } else {
    if (excludedPaths.includes(currentPath)) {
      document.title = customPathsTitle[excludedPaths.indexOf(currentPath)];
    } else {
      document.title = "On My Wavelength"
    }
  }
});

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

// Toggle between blur
function blurPoem() {
  const button = document.getElementById("blur-button");
  const div = document.getElementById("blurred-poem");

  button.addEventListener("click", () => {
    if (div.style.filter === "blur(5px)" || div.style.mozFilter === "blur(5px)" || div.style.oFilter === "blur(5px)" || div.style.msFilter === "blur(5px)") {
      // Remove the blur effect for all types
      div.style.filter = "";
      div.style.mozFilter = "";
      div.style.oFilter = "";
      div.style.msFilter = "";
      button.textContent = "Nope, Cover it";
    } else {
      // Apply the blur effect for all types
      div.style.filter = "blur(5px)";
      div.style.mozFilter = "blur(5px)";
      div.style.oFilter = "blur(5px)";
      div.style.msFilter = "blur(5px)";
      button.textContent = "I'll be Fine";
    }
  });
}

function textWrap(selector, lines = 3) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lines * lineHeight + 1;

    el.style.overflow = 'hidden';
    el.style.maxHeight = `${maxHeight}px`;

    let text = el.textContent;
    let words = text.split(' ');

    while (el.scrollHeight > maxHeight && words.length > 0) {
      words.pop();
      el.textContent = words.join(' ') + '…';
    }
  });
}

function createNavBar(primary, secondary, hover, highlight, title = "On My Wavelength", type = "normal") {
  if (primary === "#1b1b32") primary = "#213555";
  if (secondary === "#363457") secondary = "#3E5879";
  if (hover === "#2d2c52") hover = "#2E4976";

  const navList = [
    ["Blog", "/index.html"],
    ["Publications", "/publications/index.html"],
    ["Debating", "/debating/index.html"],
    ["Sinhala", "/sinhala/index.html"],
    ["Stuff", "/stuff/index.html"],
    ["Podcast", "/podcast/index.html"],
    ["About Me", "/page/about-me.html"]
  ];

  const nav = document.createElement("nav");
  nav.className = "custom-navbar";
  nav.innerHTML = `
    <div class="nav-container">
      <div class="top-row">
        <div class="site-title">
          <a href="/index.html" style="color: white; text-decoration: none;">${title}</a>
        </div>
        <div class="menu-toggle" onclick="toggleMenu()">&#9776;</div>
        <ul class="nav-links-desktop">
          ${navList.map(([label, link]) => `<li><a href="${link}">${label}</a></li>`).join("")}
        </ul>
      </div>
      <ul class="nav-links-mobile">
        ${navList.map(([label, link]) => `<li><a href="${link}">${label}</a></li>`).join("")}
      </ul>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  const css = `
    body, .header, .footer {
      background-color: ${primary};
      margin: 0;
    }

    .web-body {
      overflow: hidden;
    }

    .custom-navbar {
      background-color: ${primary};
      color: white;
      width: 100%;
    }

    .nav-container {
      width: 100%;
    }

    .top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 0 20px;
    }

    .site-title {
      font-size: 1.5em;
      font-weight: bold;
      padding: 20px 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1 1 auto;
      min-width: 0;
    }

    .menu-toggle {
      display: none;
      font-size: 1.5em;
      cursor: pointer;
      padding: 20px;
    }

    .nav-links-desktop {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .nav-links-desktop li a,
    .nav-links-mobile li a {
      text-decoration: none;
      color: white;
      padding: 8px 12px;
      display: block;
    }

    .nav-links-desktop li:hover a,
    .nav-links-mobile li:hover a {
      background-color: ${hover};
      border-radius: 4px;
    }

    .nav-links-mobile {
      display: none;
      flex-direction: column;
      width: 100%;
      background-color: ${secondary};
      padding: 15px 20px;
      list-style-type: none;
      margin: 0px;
      box-sizing: border-box;
    }

    .nav-links-mobile li{
      width: max-content;
    }

    .nav-links-mobile.show {
      display: flex;
    }

    @media (max-width: 890px) {
      .menu-toggle {
        display: block;
      }

      .nav-links-desktop {
        display: none;
      }   
    }

    @media (max-width: 700px) {
      .web-body {
        padding-top: 15px;
      }
    }

    @media (min-width: 890px) {
      .nav-links-mobile {
        display: none !important;
      }
    }
  `;

  const style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  const script = document.createElement("script");
  script.textContent = `
    function toggleMenu() {
      const nav = document.querySelector(".nav-links-mobile");
      nav.classList.toggle("show");

    }
  `;
  document.head.appendChild(script);
}

function filterGlossary(search, items, title, description) {
  const searchInput = document.getElementById(search).value.toLowerCase();
  const glossaryItems = document.querySelectorAll(items);

  glossaryItems.forEach(item => {
    const term = item.querySelector(title).textContent.toLowerCase();
    const definition = item.querySelector(description).textContent.toLowerCase();

    if (term.includes(searchInput) || definition.includes(searchInput)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// The 404 page function

function fillFadingText(div, text) {
  div.innerHTML = '';

  const testSpan = document.createElement('span');
  testSpan.style.visibility = 'hidden';
  testSpan.style.position = 'absolute';
  testSpan.style.whiteSpace = 'nowrap';
  testSpan.textContent = text;
  div.appendChild(testSpan);

  const targetWidth = div.clientWidth;
  let min = 1, max = 500, fontSize;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    testSpan.style.fontSize = mid + 'px';
    if (testSpan.offsetWidth <= targetWidth) {
      fontSize = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  div.removeChild(testSpan);

  const lineHeight = fontSize * 1.2;
  const totalHeight = div.clientHeight;
  const totalLines = Math.floor(totalHeight / lineHeight);

  for (let i = 0; i < totalLines; i++) {
    const opacity = 1 - (0.9 * i / (totalLines - 1));
    const line = document.createElement('div');
    line.className = 'fading-line';
    line.style.fontSize = fontSize + 'px';
    line.style.lineHeight = lineHeight + 'px';
    line.style.opacity = opacity.toFixed(2);
    line.textContent = text;
    div.appendChild(line);
  }
}
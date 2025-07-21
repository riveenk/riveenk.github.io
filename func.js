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
function createFooter() {
  const links = [
    ["/page/notice.html#copyright", "Copyright © All Rights Reserved"],
    ["/page/notice.html", "Notice to Visitors"],
    ["/page/archive.html", "Archive"]
  ];
  
  const footer = `<footer class="footer" style="text-align: center;">
    <div class="footer-items" style="margin-left: auto; margin-right: auto;">
      <div>
        ${links.map(([link, text]) => `<a href="${link}" class="a-no-und">${text}</a>`).join(" | ")}
      </div>
    </div>
  </footer>`;
  
  const bodyMain = document.getElementById("bodyMain");
  if (bodyMain) {
    bodyMain.insertAdjacentHTML('afterend', footer);
  } else {
    alert("Element with ID 'bodyMain' not found.");
  }
}

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
        <div style="display: flex">
          <a href="./index.html" style="color: #efefef; text-decoration: none;" class="site-title">${title}</a>
        </div>
        <div class="menu-toggle" onclick="toggleMenu()"><i class="fa">&#9776;</i></div>
        <ul class="nav-links-desktop">
          ${navList.map(([label, link], index) => `
            <li id="${index === highlight ? 'highlighted' : ''}" id="${label}">
              <a href="${link}">${label}</a>
            </li>
          `).join("")}
        </ul>
      </div>
      <ul class="nav-links-mobile">
        <div class="menu-toggle" onclick="toggleMenu()" style="width: 100%; margin-top: 15px; margin-bottom: 20px;">
          <i class="fa">&#xf00d;</i>
        </div>
        ${navList.map(([label, link], index) => `
          <li id="${index === highlight ? 'highlighted' : ''}">
            <a href="${link}">${label}</a>
          </li>
        `).join("")}
      </ul>
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  const css = `
    body, .header, .footer {
      background-color: ${primary};
    }

    .custom-navbar {
      background-color: ${primary};
    }

    .nav-links-desktop li:hover a {
      background-color: ${hover};
    }

    .nav-links-mobile li:hover a {
      background-color: ${hover};
    }

    .nav-links-mobile {
      background-color: ${secondary};
    }

    #highlighted a {
      text-decoration: underline;
       text-underline-offset: 5px;
    }

    #highlighted a:hover {
      text-decoration-color: ${hover};
    }
  `;

  const style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}


function toggleMenu() {
      const nav = document.querySelector(".nav-links-mobile");
      nav.classList.toggle("show");
      document.querySelector(".blurMain").classList.toggle("blur");
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
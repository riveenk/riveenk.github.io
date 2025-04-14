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

const footerItem2 = createFooterItem('<a href="/page/copyright.html" class="a-no-und">Copyright © All Rights Reserved</a> | <a href="/page/notice.html" class="a-no-und">Notice to Visitors</a> | <a href="/page/archive.html" class="a-no-und">Archive</a>');

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
faSet.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

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

function createNavBar(primary, secondary, hover, highlight) {
  const navBar = document.createElement("ul");
  navBar.className = "navbar";
  navBar.style.backgroundColor = primary;

  const navList = [
    ["Home", "/index.html"],
    ["Writing", "/publications/index.html"],
    ["Debating", "/debating/index.html"],
    ["Podcast", "/page/podcast.html"],
    ["About Me", "/page/about-me"]
  ];

  const css = `
    .header, .footer, body {
      background-color: ${secondary};
    }
    .navbar {
      background-color: ${primary};
    }
    .navbar li:hover {
      background-color: ${hover};
    }
  `;

  const style = document.createElement("style");
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);

  for (let i = 0; i < navList.length; i++) {
    const block = document.createElement("a");
    block.href = navList[i][1];

    const label = document.createElement("li");
    label.textContent = navList[i][0];

    if (i === highlight) {
      block.style.backgroundColor = secondary;
    }

    block.appendChild(label);
    navBar.appendChild(block);
  }

  document.body.appendChild(navBar);
}


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
    ["/page/notice.html", "Notice to Visitors"]
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
faSet.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css";
document.head.appendChild(faSet);

// Update the title
document.addEventListener("DOMContentLoaded", () => {
  const excludedPaths = [
    "/",
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
metaOne.charset = "UTF-16";
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

// Cuts of text beyond the given line length
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

// the collection of links in the navbar
const navList = [
  ["Blog", "/index.html"],
  ["Publications", "/publications/index.html"],
  ["Debating", "/debating/index.html"],
  ["Sinhala", "/sinhala/index.html"],
  ["Stuff", "/stuff/index.html"],
  ["Podcast", "/podcast/index.html"],

  ["About Me", "/page/about-me.html"]
];

// Creates the navbar of the website
function createNavBar(primary, secondary, hover, highlight = 99, title = " On My Wavelength", type = "normal") {
  if (primary === "#1b1b32") primary = "#213555";
  if (secondary === "#363457") secondary = "#3E5879";
  if (hover === "#2d2c52") hover = "#2E4976";

  const nav = document.createElement("nav");
  nav.className = "custom-navbar";
  nav.innerHTML = `
    <div class="nav-container">
      <div class="top-row">
        <div style="display: flex">
          <a href="/index.html" style="color: #efefef; text-decoration: none;" class="site-title">${title}</a>
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

// this is used to toggle between mobile and desktop 
function toggleMenu() {
  const nav = document.querySelector(".nav-links-mobile");
  nav.classList.toggle("show");
  document.querySelector(".blurMain").classList.toggle("blur");
}

// this is for the search function
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

// this is used to filter by groups
function filterSelect(id) {
  const activeList = filterMap[id] || [];
  const showIds = id === "all" ? allList : activeList;
  const hideIds = id === "all" ? [] : allList.filter(item => !activeList.includes(item));

  Object.entries(buttonMap).forEach(([key, button]) => {
    const isActive = (key === id) || (id === "all" && key === "all");
    button.style.backgroundColor = isActive ? '#3e5879' : '#f5efe7';
    button.style.color = isActive ? '#f5efe7' : '#3e5879';
  });

  showIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = '';
  });

  hideIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

// Extract numeric group from an ID like 'bibRef00a' → '00'
function extractRefGroup(id) {
  const match = id.match(/^bibRef(\d+)/);
  return match ? match[1] : null;
}

// Scroll an element into center view and add blink effect
function scrollToAndBlink(element) {
  if (!element) return;

  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const elementY = rect.top + scrollTop;
  const centerY = elementY - (window.innerHeight / 2) + (element.offsetHeight / 2);

  window.scrollTo({
    top: centerY,
    behavior: 'smooth'
  });

  element.classList.add(blinkClass);
  setTimeout(() => element.classList.remove(blinkClass), blinkDuration);
}

// Handle citation click → scroll to bibliography
function handleCitationClick(e) {
  e.preventDefault();

  const citation = e.currentTarget;
  lastCitationId = citation.getAttribute('id');
  lastCitationRefGroup = extractRefGroup(lastCitationId);

  const bibTarget = document.getElementById(`${bibliographyPrefix}${lastCitationRefGroup}`);
  if (bibTarget) {
    scrollToAndBlink(bibTarget);
    history.pushState(null, null, `#${bibTarget.id}`);
  }
}

// Handle bibliography click → scroll to last or first citation in group
function handleBibliographyClick(e) {
  e.preventDefault();

  const bib = e.currentTarget;
  const refGroup = bib.getAttribute('id').replace(bibliographyPrefix, '');
  let target = null;

  // Go to last clicked citation in same group, or default to first
  if (lastCitationId && lastCitationRefGroup === refGroup) {
    target = document.getElementById(lastCitationId);
  } else {
    target = document.getElementById(`${citationPrefix}${refGroup}a`);
  }

  scrollToAndBlink(target);
}

function initCitationNavigation() {
  // Set up citation → bibliography clicks
  document.querySelectorAll(`.${citationClass}`).forEach(cite => {
    cite.addEventListener('click', handleCitationClick);
  });

  // Set up bibliography → citation clicks
  document.querySelectorAll(`.${bibliographyClass}`).forEach(bib => {
    bib.addEventListener('click', handleBibliographyClick);
  });
}

// sets up the scroll for footnotes 
function initFootnoteNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        scrollToAndBlink(target);
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
}

// fetches and returns the json file at give position
async function fetchJSONData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}

// group of functions to handle post loading in home
async function loadPosts() {
  const allPosts = await fetchJSONData("/post/allPost.json");
  const holder = document.getElementById("postsHolder");
  const scrollButtons = document.querySelector(".postsScroll");

  const reversedEntries = Object.entries(allPosts).reverse();
  paginatedPosts = reversedEntries;
  const count = reversedEntries.length;
  pageCount = Math.ceil(count / 6);

  scrollButtons.style.display = pageCount <= 1 ? "none" : "flex";

  filteredPosts = paginatedPosts; // no filter by default
  renderPagination();
  renderPage(0);

}

function renderPagination() {
  const scrollButtons = document.querySelector(".postsScroll");
  scrollButtons.innerHTML = "";

  window.scrollTo({ top: 0, behavior: "smooth" });


  const createButton = (text, page = null, className = "") => {
    const btn = document.createElement("button");
    btn.innerHTML = text;
    if (page !== null) btn.dataset.page = page;
    if (className) btn.classList.add(className);
    return btn;
  };

  // Prev button
  const prevBtn = createButton('<i class="fa-solid fa-angle-left"></i>', null, "nav-btn");
  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage(currentPage);
      renderPagination();
    }
  });
  scrollButtons.appendChild(prevBtn);

  // First page
  scrollButtons.appendChild(pageButton(0));

  if (currentPage > 2) {
    scrollButtons.appendChild(ellipsis());
  }

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 0 && i < pageCount - 1) {
      scrollButtons.appendChild(pageButton(i));
    }
  }

  if (currentPage < pageCount - 3) {
    scrollButtons.appendChild(ellipsis());
  }

  if (pageCount > 1) {
    scrollButtons.appendChild(pageButton(pageCount - 1));
  }

  // Next button
  const nextBtn = createButton('<i class="fa-solid fa-angle-right"></i>', null, "nav-btn");
  nextBtn.addEventListener("click", () => {
    if (currentPage < pageCount - 1) {
      currentPage++;
      renderPage(currentPage);
      renderPagination();
    }
  });
  scrollButtons.appendChild(nextBtn);
}

function pageButton(pageIndex) {
  const btn = document.createElement("button");
  btn.textContent = pageIndex + 1;
  btn.className = "page-btn";
  btn.dataset.page = pageIndex;
  if (pageIndex === currentPage) {
    btn.classList.add("active");
  }
  btn.addEventListener("click", () => {
    currentPage = pageIndex;
    renderPage(currentPage);
    renderPagination();
  });
  return btn;
}

function ellipsis() {
  const span = document.createElement("button");
  span.textContent = "...";
  span.className = "dots";
  return span;
}

function renderPage(pageIndex) {
  const holder = document.getElementById("postsHolder");
  holder.innerHTML = "";

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  const start = pageIndex * 6;
  const end = start + 6;
  const pageItems = filteredPosts.slice(start, end);

  for (const [key, post] of pageItems) {
    const block = document.createElement("div");
    block.className = "post";

    const image = document.createElement("img");
    image.src = post.img;
    block.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = post.title;
    block.appendChild(title);

    const text = document.createElement("p");
    text.textContent = post.description;
    block.appendChild(text);

    const click = document.createElement("button");
    click.innerHTML = post.button;

    const anchor = document.createElement("a");
    anchor.href = post.link;
    anchor.appendChild(click);
    block.appendChild(anchor);

    holder.appendChild(block);
  }

  if (typeof textWrap === "function") {
    textWrap(".post h3", 1);
    textWrap(".post p", 4);
  }

  if (pageItems.length === 0) {
    holder.innerHTML = "<p>No results found.</p>";
    return;
  }

}


function filterPostsBySearchInput(inputId) {
  const searchInput = document.getElementById(inputId).value.toLowerCase();

  filteredPosts = paginatedPosts.filter(([key, post]) => {
    const title = post.title.toLowerCase();
    const description = post.description.toLowerCase();
    return title.includes(searchInput) || description.includes(searchInput);
  });

  pageCount = Math.ceil(filteredPosts.length / 6);
  currentPage = 0;

  renderPagination();
  renderPage(currentPage);
  document.querySelector(".postsScroll").style.display = filteredPosts.length <= 6 ? "none" : "flex";
}

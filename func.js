// Dynamically call Normal Template
  // Create navigation elements
  const navDiv = document.createElement("div");
  navDiv.classList.add("nav");

  const homeAnchor = document.createElement("a");
  homeAnchor.setAttribute("href", "/index.html");
  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-items");
  homeButton.textContent = "Home";
  homeAnchor.appendChild(homeButton);

  const publicationsAnchor = document.createElement("a");
  publicationsAnchor.setAttribute("href", "/index.html");
  const publicationsButton = document.createElement("button");
  publicationsButton.classList.add("nav-items");
  publicationsButton.textContent = "Publications";
  publicationsButton.addEventListener("mouseover", showDropdown);
  publicationsButton.addEventListener("mouseout", hideDropdown);
  publicationsAnchor.appendChild(publicationsButton);

  const aboutMeAnchor = document.createElement("a");
  aboutMeAnchor.setAttribute("href", "/page/about-me.html");
  const aboutMeButton = document.createElement("button");
  aboutMeButton.classList.add("nav-items");
  aboutMeButton.textContent = "About Me";
  aboutMeAnchor.appendChild(aboutMeButton);

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

  // Append elements to the nav div
  navDiv.appendChild(homeAnchor);
  navDiv.appendChild(publicationsAnchor);
  navDiv.appendChild(aboutMeAnchor);
  navDiv.appendChild(dropdownContentDiv);

  // Create footer elements
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");

  // Create the first footer item
  const footerItem1 = document.createElement("div");
  footerItem1.classList.add("footer-items");

  const footerHeading1 = document.createElement("span");
  footerHeading1.classList.add("footer-heading");
  footerHeading1.textContent = "About Me";
  footerHeading1.style.display = "block"; // Make span behave like a block element
  footerHeading1.style.margin = "0"; // Remove default margin

  const footerItem1Content = document.createElement("div");
  footerItem1Content.innerHTML = `
      <hr style="margin: 5;">
      I am a student with a craze for starry nights and poetic words. I share my works and articles here, see around and find what interests we share.
  `;

  footerItem1.appendChild(footerHeading1);
  footerItem1.appendChild(footerItem1Content);

  // Create the second footer item
  const footerItem2 = document.createElement("div");
  footerItem2.classList.add("footer-items");

  const footerHeading2 = document.createElement("span");
  footerHeading2.classList.add("footer-heading");
  footerHeading2.textContent = "Links";
  footerHeading2.style.display = "block"; // Make span behave like a block element
  footerHeading2.style.margin = "0"; // Remove default margin

  const footerItem2Content = document.createElement("div");
  footerItem2Content.innerHTML = `
      <hr style="margin: 5;">
      <a href="/page/notice.html" class="a-no-und"> Notice to Visitors </a> | 
      <a href="/page/credits-disclaimers.html" class="a-no-und">Credits and Disclaimers</a> | 
      <a href="/page/contact-us.html" class="a-no-und">Contact Us</a>
  `;

  footerItem2.appendChild(footerHeading2);
  footerItem2.appendChild(footerItem2Content);

  // Create the third footer item
  const footerItem3 = document.createElement("div");
  footerItem3.classList.add("footer-items");

  const footerHeading3 = document.createElement("span");
  footerHeading3.classList.add("footer-heading");
  footerHeading3.textContent = "Copyright";
  footerHeading3.style.display = "block"; // Make span behave like a block element
  footerHeading3.style.margin = "0"; // Remove default margin

  const footerItem3Content = document.createElement("div");
  footerItem3Content.innerHTML = `
      <hr style="margin: 5;">
      Riveen Kumanayaka © 2024 - Present | Full notice <a href="/page/copyright.html" class="a">here</a>
  `;

  footerItem3.appendChild(footerHeading3);
  footerItem3.appendChild(footerItem3Content);

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

// Function to show dropdon by hover
  var timeout;

  function showDropdown() {
      var dropdownContent = document.querySelector(".dropdown-content");
      dropdownContent.style.display = "block";
      clearTimeout(timeout);
  }

  function hideDropdown() {
      timeout = setTimeout(function() {
          var dropdownContent = document.querySelector(".dropdown-content");
          dropdownContent.style.display = "none";
      }, 1000);
  }

// Function to add Trusted Site JS
  var script = document.createElement('script');
  script.src = 'https://cdn.ywxi.net/js/1.js';
  script.type = 'text/javascript';
  script.async = true;
  document.head.appendChild(script);

// Adding the meta data
  var metaOne = document.createElement('meta');
  metaOne.charset = "UTF-8";
  document.head.appendChild(metaOne);

  var metaTwo = document.createElement('meta');
  metaTwo.name = "description";
  metaTwo.content = "A random blogger with too much free time.";
  document.head.appendChild(metaTwo);

  var metaThree = document.createElement('meta');
  metaThree.name = "keywords";
  metaThree.content = "Riveen, Riveen Kumanayaka, Blogger, Student, Random, Sri Lankan, Sinhala, Debating, Astronomy, Teaching, Poetry, Prose";
  document.head.appendChild(metaThree);

  var metaFour = document.createElement('meta');
  metaFour.name = "author";
  metaFour.content = "Riveen Kumanayaka";
  document.head.append(metaFour);
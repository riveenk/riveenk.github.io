// TO DO LIST
// > Global Data Centralised with JS and Py
// > Pagination of displayPages()
// Get rid of as much innerHTML as possible
// better naming and useful comments
// render modules
// a state obj and config ob

// ==================================
// Global Variables
// ==================================

const webTitle = "On My Wavelength";
const r = document.querySelector(':root');
const mainDataFile = "/data/directory.json";
const navBarItems = [
    ["Home", "/"],
    ["Publications", "/publications.html"],
    ["Debating", "/debating"],
    ["Sinhala", "/sinhala"],
    ["Stuff", "/stuff"],
    ["Podcast", "/wbc"],
    ["About Me", "/page.html?id=about"]
];
const footerItems = [
    ["Copyright © All Rights Reserved", "#"],
    ["Notice to Visitors", "/page.html?id=sitenotice"],
    ["RSS Feed", "/rss.xml"]
]

// Colour Palettes

const primaryPalette = [
    ["--primary", "#213555"],
    ["--secondary", "#D8C4B6"],
    ["--dark", "#3E5879"],
    ["--light", "#F5EFE7"],

    ["--triggerBG", "#fec2c2"],
    ["--triggerMain", "#A91101"],
    
    ["--main-font", "Golos Text"],
    ["--dark-text", "#515050"],
    ["--darker-text", "#222"],
    ["--main-text", "#213555"],
    ["--light-text", "#ddd"],

    ["--highlight", "#6cc0f0"]
]

const primaryDarkPalette = [
    ["--primary", "#101826"],
    ["--secondary", "#1a2335"],
    ["--dark", "#24324A"],
    ["--light", "#2c3c58"],

    ["--triggerBG", "#5c001d"],
    ["--triggerMain", "#fd9ca9"],

    ["--main-font", "Golos Text"],
    ["--dark-text", "#b7c1d1"],
    ["--darker-text", "#f2f5f9"],
    ["--main-text", "#d7dfea"],
    ["--light-text", "#d7dfea"],
    ["--highlight", "#90b2ff"]
]

const wbcPalette = [
    ["--primary", "#363062"],
    ["--secondary", "#f5efe7"],
    ["--dark", "#4d4c7d"],
    ["--light", "#ffffff"],

    ["--triggerBG", "#fec2c2"],
    ["--triggerMain", "#A91101"],
    
    ["--main-font", "Golos Text"],
    ["--dark-text", "#626262"],
    ["--darker-text", "#363062"],
    ["--main-text", "#363062"],
    ["--light-text", "#efefef"],

    ["--highlight", "#0437F2"]
]

const wbcDarkPalette = [
    ["--primary", "#151320"],
    ["--secondary", "#201D31"],
    ["--dark", "#312C4C"],
    ["--light", "#3F3A60"],

    ["--triggerBG", "#5c001d"],
    ["--triggerMain", "#fd9ca9"],

    ["--main-font", "Golos Text"],
    ["--dark-text", "#B9BDD2"],
    ["--darker-text", "#F5F6FB"],
    ["--main-text", "#D7DAEA"],
    ["--light-text", "#D7DAEA"],

    ["--highlight", "#8AA8FF"]
]

const monochromePalette = [
    ["--primary", "#000000"],
["--secondary", "#111111"],
["--dark", "#222222"],
["--light", "#2D2D2D"],

["--triggerBG", "#330000"],
["--triggerMain", "#FF9999"],

["--main-font", "Golos Text"],
["--dark-text", "#E0E0E0"],
["--darker-text", "#efefef"],
["--main-text", "#efefef"],
["--light-text", "#efefef"],

["--highlight", "#66B2FF"]
]

const palettes = {
    "primary" : {
        "light": primaryPalette,
        "dark": primaryDarkPalette,
        "monochrome": monochromePalette
    },
    "wbc" : {
        "light": wbcPalette,
        "dark": wbcDarkPalette,
        "monochrome": monochromePalette
    }
}

// const primaryPalette = [["--primary", "#"], ["--secondary", "#"], ["--dark", "#"], ["--light", "#"]]

// ==================================
// Initial Injections to Header
// ==================================

// CSS StyleSheet(s)
const style = document.createElement("link");
    style.rel = "stylesheet"
    style.type = "text/css"
    style.href = "/assets/styles/style.css"
    document.head.appendChild(style)

// Favicon
const favicon = document.createElement("link");
    favicon.rel = "icon"
    favicon.type = "image/png"
    favicon.href = "/assets/media/favicon.png"
    document.head.appendChild(favicon)

// Font Awesome CDN
const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet"
    fontAwesome.type = "text/css"
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
    document.head.appendChild(fontAwesome)

const pageTitle = document.createElement("title");
    pageTitle.innerText = webTitle
    document.head.appendChild(pageTitle)

// ==================================
// 404 Page Functions and Values
// ==================================

function initialise404ErrorPage(textBoxId = "textBodySpace", svgImage = fofErrorSvg, mainMessage = fofErrorMainMsg, secondaryMessage = fofErrorSecoMsg, homePageButton = homePageBtnTxt, internetButton = internetBtnTxt, internetButtonLink = internetBtnUrl) {
    const errorPageContent = `
        <div class="fofMain">
            <img src="${fofErrorSvg}" class="fofmainIcon">
            <h1>${mainMessage}</h1>
            <p>${secondaryMessage}</p>
            <br>
            <div>
                <a href="/index.html"><button class="fofcomeHomeButton">${homePageButton}</button></a>
                <a href="${internetButtonLink}"><button class="fofleaveTheWoodsBtn">${internetButton}</button></a>
            </div>
        </div>
    `
    document.getElementById(textBoxId).innerHTML = errorPageContent;
    toggleCSSClass("mainBodySpace", "mainBodySpaceLight");
    toggleCSSClass("footerHolder", "footerHide");
    toggleCSSClass("body", "bodyAtFof")
} // initialises the 404 page content

// 404 errors details
const fofErrorSvg = "/assets/media/404.svg";
const fofErrorMainMsg = "404: You're Not Supposed To Be Here"
const fofErrorSecoMsg = "The dark woods of 404 are not safe for you"
const homePageBtnTxt = `<i class="fa-regular fa-house"></i> Come Home`
const internetBtnTxt = `Leave the Woods <i class="fa-solid fa-arrow-up-right-from-square"></i>`
const internetBtnUrl = "https://www.ecosia.org/"

const pageLoadErrorMsg = "<p>Oops, you broke something. It's okay, I forgive you.</p>"
const searchLoadErrorMsg = "You Seek Forbidden Knowledge"

// ===========================================
// Primary Page Initialisation Functions
// ===========================================

function initialisePage(titleVal = webTitle, paletteID = "primary", navBarVal = "navBarItem", footerVal = "footerHolder") {
    populateNavBar(document.getElementById(navBarVal), titleVal); // Populates the navbar
    addThemeSettings() // Add the theme setting button
    localStorage.setItem("theme", paletteID)
    setColourPalette() // Sets the colour palette
    populateFooter(document.getElementById(footerVal)) // Populates the footer
    populateMobileNavBar("mobileNavBar1"); // Populates the mobile nav bar
    document.getElementById("mobileNavBar1Button").onclick = function () {
        toggleCSSClass("mobileNavBar1", "mobileNavBar1Open");
    }; // set the toggle for the button
}

function initialiseCollectionPage({
    sourceKey,
    searchType,
    renderFunction,
    setupMeta = null,
    src = mainDataFile
}) {
    fetchNParseJSON(src).then(data => {

        const section = data[sourceKey];

        if (!section || !section.listItems) {
            console.error(`${sourceKey} missing`);
            return;
        }

        if (setupMeta && section.metaData) {
            setupMeta(section.metaData);
        }

        allItemListData = filterArchivedItems(section.listItems);
        currentItemListData = [...allItemListData];
        currentPage = 1;

        renderFunction();
        setupSearch(searchType);
    });
}

function populateNavBar(theNavBar, title = webTitle) {
    var navCode = ` 
            <a href="/index.html" class="navBarTitle">${title}</a>
            <ol class="desktopNavBar">
    `; // Initial bit of the navbar
    for (const item of navBarItems) {
        navCode = navCode + `<li><a href="${item[1]}">${item[0]}</a></li> \n`
    }; // Loop through the navBarItems
    navCode = navCode + `
        </ol>\n<p class="mobileNavBar1Button" id="mobileNavBar1Button"><i class="fa-solid fa-bars"></i></p>
    `; // Final bit of the navbar
    theNavBar.innerHTML = navCode; // Commit the code into the navbar
} // Populates the navbar with the title and desktop list items

function populateMobileNavBar(theNavBar){
    let navBarHTML = "<ul>"
    for (let i = 0; i < navBarItems.length; i++) {
        navBarHTML += `
            <li>
                <a href="${navBarItems[i][1]}">
                    <button>${navBarItems[i][0]}</button>
                </a>
            </li>
        `
    }
    navBarHTML += "</ul>"
    document.getElementById(theNavBar).innerHTML = navBarHTML
}

function populateFooter(theFooter) {
    var footerItemVals = "<p>"
    for (const item of footerItems) {
        footerItemVals = footerItemVals + `\n <a href="${item[1]}">${item[0]}</a> |`
    }
    footerItemVals = footerItemVals.slice(0, -2);
    footerItemVals = footerItemVals + "\n</p>"
    footerItemVals += "<script type='text/javascript' src='https://cdn.ywxi.net/js/1.js' async></script>"
    theFooter.innerHTML = footerItemVals;
} // Populates the footer with the footer items

// ==================================
// Search Bar Functions
// ==================================

function insertSearchBar(location, type = "blog", placeholder = "Search for a Blog Post...") {
    document.getElementById(location).innerHTML += `
            <div class="${type === "blog" ? "searchBar" : "searchBar searchBarTypeList"}">
            <button><i class="fa fa-search"></i></button>
            <input type="search" id="searchEntry" placeholder="${placeholder}" title="Search Bar">
            </div>`
} // insert the search bar

function runSearch(term, type) {
    if (!term) {
        currentItemListData = [...allItemListData];
    } else {
        currentItemListData = chooseSearchStructure(type, term, [...allItemListData]);
    }
    console.log(currentItemListData)
    currentPage = 1;
    showAllReturnedValues(type);
} // This doesn't seem to work in the list page... :(

function chooseSearchStructure(type, term, data) {
    return searchByKeyWord(term, data);
}

function debounce(fn, delay = 300) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function setupSearch(type) { 
    const input = document.getElementById("searchEntry");
    if (!input) return;

    const debounced = debounce((value) => {
        runSearch(value, type);
    }, 300);

    input.addEventListener("input", (e) => {
        const displayPl = type === "blog" ? "blogPostArea" : "listedItemGroup"
        showSearchingState(displayPl);
        debounced(e.target.value);
    });
}

function showSearchingState(displayPlace = "blogPostArea") {
    document.getElementById(displayPlace).innerHTML = `
        <p class="searching">Searching...</p>
    `;
}

function clearSearch(type) {
    const input = document.getElementById("searchEntry");
    if (input) input.value = "";

    runSearch("", type);
}

function searchByKeyWord(keyword, dataArray) {
    const returnableArray = [];
    const lowerKeyword = keyword.toLowerCase();

    dataArray.forEach(entry => {
        const postData = entry;

        if (!postData) return;
        let pushed = false;

        const searchValue = value => {
            if (pushed) return;

            if (typeof value === "string" && value.toLowerCase().includes(lowerKeyword)) {
                returnableArray.push(entry);
                pushed = true;
            } 
            else if (Array.isArray(value)) {
                value.forEach(v => searchValue(v));
            } 
            else if (typeof value === "object" && value !== null) {
                Object.values(value).forEach(v => searchValue(v));
            }
        };

        searchValue(postData);
    });
    return returnableArray;
} // this does a search to find items with a keyword

function goToPage(page, type) {
    const totalPages = Math.ceil(currentItemListData.length / itemsPerPage);
    currentPage = Math.max(1, Math.min(page, totalPages));
    showAllReturnedValues(type);
    window.scrollTo(0, 0);
}

function showAllReturnedValues(type) {
    if (type === "blog") {
        displayPosts();
        displayBlogDisplayUI();
    }

    if (type === "list") {
        displayPages();
    }
}

// ==================================
// Post Retrieval and Display
// ==================================

let allItemListData = [];
let currentItemListData = [];
let currentPage = 1;
const itemsPerPage = 6;

function initialiseBlogPage() {
    initialiseCollectionPage({
        sourceKey: "blog",
        searchType: "blog",
        renderFunction: () => showAllReturnedValues("blog")
    });
}

function displayBlogDisplayUI(buttonsDisplayLocation = "blogPostsHistoryButtons") {
    const totalPages = Math.ceil(currentItemListData.length / itemsPerPage);
    let buttonsList = "";

    const addBtn = (page, label = page, active = false, disabled = false) => {
        buttonsList += `
        <button 
            class="${active ? "blogPostsHistoryButtonsActiveButton" : ""}" 
            ${disabled ? "disabled" : ""}
            onclick="${!disabled ? `goToPage(${page}, 'blog')` : ""}">
            ${label}
        </button>\n`;
    };

    // Prev
    addBtn(currentPage - 1, "<i class='fa-solid fa-angle-left'></i>", false, currentPage === 1);

    // Pages
    for (let i = 1; i <= totalPages; i++) {
        addBtn(i, i, i === currentPage);
    }

    // Next
    addBtn(currentPage + 1, "<i class='fa-solid fa-angle-right'></i>", false, currentPage === totalPages);

    document.getElementById(buttonsDisplayLocation).innerHTML = buttonsList;
}

function displayPosts(postDisplayLocation = "blogPostArea") {
    if (currentItemListData.length === 0) {
        document.getElementById(postDisplayLocation).innerHTML = `
            <div class="noResults">
                <h2>${searchLoadErrorMsg}</h2>
                <button onclick="clearSearch('blog')">Try again</button>
            </div>
        `;
        document.getElementById("blogPostsHistoryButtons").innerHTML = "";
        return;
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, currentItemListData.length);

    let postsHTMLCode = "";

    for (let i = start; i < end; i++) {
        const post = currentItemListData[i];

        postsHTMLCode += `
        <div class="blogPostBlock">
            <img src="${post.imgSrc}" class="blogPostBlockImage" alt="${post.imgDetails.altText}">
            <h2 class="blogPostBlockTitle">${post.title}</h3>
            <p class="blogPostBlockBlurb">${post.blurb}</p>
            <a href="${post.link}">
                <button>${post.linkText}</button>
            </a>
        </div>\n`;
    }

    document.getElementById(postDisplayLocation).innerHTML = postsHTMLCode;
} // This loads the blog posts on index page

function getPostByID(data, id) {
    const collections = Object.values(data);

    for (const collection of collections) {
        if (!collection.listItems) continue;

        const found = collection.listItems.find(
            item => item.id === id && item.archived !== true
        );
        if (found) return found;
    }
    return null;
} // looks for the unique id in every list

function getPageIdAndInitialise() {
    const itemID = new URLSearchParams(window.location.search).get("id");
    let changeBackgroundColour = `.mainBodySpace {
        background-color: var(--light);
    }`
    let styleSheet = document.createElement("style");
    styleSheet.textContent = changeBackgroundColour;
    document.head.appendChild(styleSheet) 
    initialisePostOrPublicationPage(itemID)
} // this produces the page contents

function initialisePostOrPublicationPage(itemID, src = mainDataFile, postDisplayLocation = "textBodySpace") {
    fetchNParseJSON(src).then(data => {
        const post = getPostByID(data, itemID);
        if (post) {
            let postContent = "";
            if (post.imgSrc != ""){
                postContent += `
                <img src="${post.imgSrc}" alt="${post.imgDetails.altText}" class="mainBannerImage">
                <p id="imageID">By ${post.imgDetails.author} from <a href="${post.imgDetails.sourceLink}">${post.imgDetails.source}</a></p>`
            }

            postContent += `
                <h1>${post.title}</h1>
                <h2>${post.subtitle}</h2>`

            postContent += "<div id='mainTextContent'>\n"

            if (post.smallStory) {
                postContent += `
                    <hr>
                    <div class = "smallStory" id="smallStory">
                        <p>${post.smallStory}</p>
                    </div>
                    <hr>
                `
            } // checks if the post has a small story and displays it

            if (post["twTags"].length) {
                let tagList = post["twTags"].join(", ");

                postContent += `
                <div class="triggerWarning">
                <p><b>Trigger Warning</b>: ${tagList}</p>
                </div>\n`
            } // checks if the post has tws and displays the message

            loadTextFile(`./assets/text/${itemID}.txt`).then(textContent => {
                postContent += textContent;
                postContent += "\n</div>"
                document.getElementById(postDisplayLocation).innerHTML = postContent;
            }) 
            
            document.addEventListener("DOMContentLoaded", () => {
                document.getElementById("clearLocalStorage").onclick = () => {
                    localStorage.clear();
                };
            });

        } else {
            console.log(post)
            console.log(itemID)
            initialise404ErrorPage()
        }

    }).catch(err => {
        console.error(err);
        initialise404ErrorPage(postDisplayLocation);
    });
} // this loads the page content

// ==================================
// Pages List Display and Retrieval
// ==================================

function initialiseItemsPage(name, subtext, linkTexts, links, tagStat) {
    let primaryButtonList = ""
    if (linkTexts.length === links.length) {
        if (linkTexts.length > 0) {
            primaryButtonList += `<ul class="primaryListButtons">\n`
            for (let i = 0; i < linkTexts.length; i++) {
                primaryButtonList += `<li><a href="${links[i]}"><button>${linkTexts[i]}</button></a></li>`
            }
            primaryButtonList += `</ul>`
        }
    } else {
        primaryButtonList = "Welp, this bit is broken :("
    }

    let pageContent = `
        <h1>${name}</h1>
        ${subtext.length > 0 ? `<p>${subtext}</p>` : ""} 
        ${primaryButtonList.length > 0 ? primaryButtonList : ""}
        <div id="searchEntryBox"></div>
        <div class="listedItemGroup" id="listedItemGroup"></div>
    `
    document.getElementById("listBodySpace").innerHTML = pageContent
    insertSearchBar("searchEntryBox", "list", "Search with title, description, or type...");

    hideTagsCSS = `.tagsGroup {
            display: none;
        }`

    if (tagStat) {
        let styleSheet = document.createElement("style");
        styleSheet.textContent = hideTagsCSS;
        document.head.appendChild(styleSheet)
    }
}

function initialiseItemsList(listName) {
    initialiseCollectionPage({
        sourceKey: listName,
        searchType: "list",

        setupMeta: (meta) => {
            initialiseItemsPage(
                meta.name,
                meta.summary,
                meta.buttonLinksText,
                meta.buttonsLinksDest,
                meta.hideTag
            );
        },

        renderFunction: () => showAllReturnedValues("list")
    });
}

function displayPages(pageDisplayLocation = "listedItemGroup") {
    if (currentItemListData.length === 0) {
        document.getElementById(pageDisplayLocation).innerHTML = `
            <p class="searching">${searchLoadErrorMsg}. Try Again.</p>`;
        return;
    } else {
        let pagesHTMLCode = "";
        for (let i = 0; i < currentItemListData.length; i++) {
            const page = currentItemListData[i];

            let tagsList = ""
            let twList = ""

            if (page.generalTags) {
                tagsList = `<ul class="listTags">\n`;
                page.generalTags.forEach(tag => { tagsList += `<li>${tag}</li>\n` });
                tagsList +=`</ul>\n`
            }

            if (page.twTags) {
                twList = `<ul class="twTags">\n`;
                page.twTags.forEach(tag => { twList += `<li>${tag}</li>\n` });
                twList +=`</ul>\n`
            }

            pagesHTMLCode += `
            <a href="${page.link}">
                <div class="listedItem">
                    <h2>${page.title}</h2>
                    <p>${page.blurb}</p>
                    <div class="tagsGroup">
                        ${tagsList}
                        ${twList}
                    </div> 
                </div>
            </a>`;
        }
        document.getElementById(pageDisplayLocation).innerHTML = pagesHTMLCode;
    }
}

// ==================================
// Change Colour Palettes
// ==================================

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("selectTheme").onclick = () => {
        document.getElementById("themeSelecterPopUpCover").classList.toggle("show");
        document.getElementById("themeSelecterPopUp").classList.toggle("show");
    };

    document.getElementById("closeThemeSelector").onclick = () => {
        document.getElementById("themeSelecterPopUpCover").classList.toggle("show");
        document.getElementById("themeSelecterPopUp").classList.toggle("show");
    };

    document.getElementById("darkMode").onclick = () => {
        initiateThemeChange("dark", true)
    };

    document.getElementById("lightMode").onclick = () => {
        initiateThemeChange("light", true)
    };

    document.getElementById("monochromeMode").onclick = () => {
        initiateThemeChange("monochrome", true)
    };
});

function initiateThemeChange(mode, transition) {
    localStorage.setItem("mode", mode)
    setColourPalette(transition)
}

// ==================================
// Auxilliary Functions
// ==================================

async function fetchNParseJSON(src) {
    const response = await fetch(src);

    if (!response.ok) {
        throw new Error("Failed to fetch JSON");
    }

    return await response.json();
} // Fetches any JSON file and parses it into a JS Obj

function toggleCSSClass(elementID, newClass) {
    const item = document.getElementById(elementID);
    item.classList.toggle(newClass)
} // used to toggle CSS class

function changeCSSVar(varName, newValue) {
    r.style.setProperty(varName, newValue);
} // Simple function to change the value of a CSS variable

function setColourPalette(transition = false) {
    const root = document.documentElement;
    const paletteName = localStorage.getItem("theme") || "primary";
    const mode = localStorage.getItem("mode") || "light"

    const run = () => {
        applyColourPalette(paletteName, mode);
        if (transition) {
            setTimeout(() => {
                root.classList.remove("theme-transition");
            }, 500);
        }
    }; // set up the animation run

    if (!transition) {
        applyColourPalette(paletteName, mode);
        return;
    } // run without transition if requested and break

    root.classList.add("theme-transition");
    requestAnimationFrame(() => {
        requestAnimationFrame(run);
    }); // run with transition if not broken
}// Changes the colour palette to our liking

function applyColourPalette(paletteName, mode) {
    const root = document.documentElement;
    const palette = palettes[paletteName][mode];

    palette.forEach(([variable, value]) => {
        root.style.setProperty(variable, value);
    });
}

function loadTextFile(src) {
    return fetch(src).then(response => {
        if (!response.ok) {
            return pageLoadErrorMsg;
        }
        return response.text();
    }).catch(err => {
        console.error(err);
        return pageLoadErrorMsg;
    });
} // this takes the content of a txt file and returns it

function filterArchivedItems(items = []) {
    return items.filter(item => item.archived !== true);
}

function addThemeSettings() {
    const themeHTMLCode = `
        <div class="themeSelecterPopUpCover" id="themeSelecterPopUpCover"></div>
        <button class="selectTheme" id="selectTheme"><i class="fa-solid fa-circle-half-stroke"></i> Select Theme</button> 
        <div class="themeSelecterPopUp" id="themeSelecterPopUp">
    <p class="icon"><button id="closeThemeSelector"><i class="fa-solid fa-xmark"></i></button></p>
    <div class="theme-preview">
        <h3>Select Website Theme</h3>
    </div>
    <button id="lightMode" class="themeButtons">Light Mode</button>
    <button id="darkMode" class="themeButtons">Dark Mode</button>
    <button id="monochromeMode" class="themeButtons">Monochrome</button>
</div>`
    document.body.insertAdjacentHTML('afterbegin', themeHTMLCode);
}

// https://medium.com/@atlasaidev/add-text-to-speech-to-any-website-with-3-lines-of-javascript-c3df1e524031
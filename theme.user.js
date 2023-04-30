// ==UserScript==
// @name         Dark Theme for 6.101
// @version      1
// @description  Applies a dark theme to 6.101 Website
// @match        https://py.mit.edu/*
// @grant        none
// @author       Neil Chowdhury
// ==/UserScript==

(function () {
  "use strict";

  function GM_addStyle(css) {
    const style =
      document.getElementById("GM_addStyleBy8626") ||
      (function () {
        const style = document.createElement("style");
        style.type = "text/css";
        style.id = "GM_addStyleBy8626";
        document.head.appendChild(style);
        return style;
      })();
    const sheet = style.sheet;
    sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
  }

  // const toggleButton = document.createElement("button");
  // toggleButton.textContent = "Toggle Dark Theme";
  // toggleButton.style =
  //   "position: fixed; top: 10px; right: 10px; z-index: 1000;";
  // document.body.appendChild(toggleButton);

  let darkThemeEnabled = false;
  // "https://raw.githubusercontent.com/dracula/highlightjs/master/dracula.css";

  const toggleButton = document.createElement("a");
  toggleButton.className = "cs_top_menu_item";
  toggleButton.href = "#";
  toggleButton.textContent = "Dark";

  document.querySelector(".nav-container").appendChild(toggleButton);

  function toggleDarkTheme(evt) {
    if (evt) evt.preventDefault();
    if (!darkThemeEnabled) {
      document.documentElement.style.setProperty(
        "--cs-base-bg-color",
        "#33ccff"
      );
      GM_addStyle(`
          body {
              background-color: #111 !important;
              color: #eee !important;
          }
      `);
      GM_addStyle(`
        code {
            background-color: #333 !important;
        }
      `);
      // pre has background #333
      GM_addStyle(`
        pre {
            background-color: #333 !important;
            }
      `);
    } else {
      document.documentElement.style.setProperty(
        "--cs-base-bg-color",
        "#000080"
      );
      GM_addStyle(`
          body {
              background-color: #fff !important;
              color: #000 !important;
          }
      `);
      GM_addStyle(`
          code {
              background-color: #f0f0f0 !important;
          }
      `);
      GM_addStyle(`
        pre {
            background-color: #f0f0f0 !important;
            }
      `);
    }
    darkThemeEnabled = !darkThemeEnabled;
  }

  toggleButton.addEventListener("click", toggleDarkTheme);
  toggleDarkTheme();
})();

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
      // header (old: dark blue 000080)
      GM_addStyle(`
        #cs_header {
          background-color: #383a59;  
        }
      `);
      GM_addStyle(`
        body {
          background-color: #0d1117;
          color: #E6EDF3;
        }
      `);

      // old color: #161b22, dracula color: #282a36
      GM_addStyle(`
        code {
          background-color: #282a36;
        }
      `);
      // pre has background #333
      GM_addStyle(`
        pre {
          background-color: #282a36;
          }
      `);
      GM_addStyle(`
        .question {
          background-color: #282a36;
        }
      `);
      GM_addStyle(`
        input[type="text"] {
          background-color: #282a36;
          color: #fff;
          border: 2px solid #212a34;
        }
      `);
      GM_addStyle(`
        .cs_footer {
          background-color: #25292e;
        }
      `);
      // select
      GM_addStyle(`
        select {
          background-color: #282a36;
          color: #fff;
          border: 2px solid #212a34;
        }
      `);

      // highlight.js theme
      GM_addStyle(`
        .hljs-built_in,
        .hljs-selector-tag,
        .hljs-section,
        .hljs-link {
          color: #8be9fd;
        }
      `);
      GM_addStyle(`
        .hljs-keyword {
          color: #ff79c6;
        }
      `);
      GM_addStyle(`
        .hljs,
        .hljs-subst {
          color: #f8f8f2;
        }
      `);
      GM_addStyle(`
        .hljs-title,
        .hljs-attr,
        .hljs-meta-keyword {
          font-style: italic;
          color: #50fa7b !important;
        }
      `);
      GM_addStyle(`
        .hljs-string,
        .hljs-meta,
        .hljs-name,
        .hljs-type,
        .hljs-symbol,
        .hljs-bullet,
        .hljs-addition,
        .hljs-variable,
        .hljs-template-tag,
        .hljs-template-variable {
          color: #f1fa8c;
        }
      `);
      GM_addStyle(`
        .hljs-comment,
        .hljs-quote,
        .hljs-deletion {
          color: #6272a4;
        }
      `);
      GM_addStyle(`
        .hljs-literal,
        .hljs-number {
          color: #bd93f9;
        }
      `);
      // GM_addStyle(`
      //   .hljs-built_in,
      //   .hljs-builtin-name {
      //     color: #900090;
      //   }
      // `);
      // GM_addStyle(`
      //   .hljs-class .hljs-title {
      //     color: #0000ff;
      //   }
      // `);
      // GM_addStyle(`
      //   .hljs-formula {
      //     background-color: #eee;
      //     font-style: italic;
      //   }
      // `);
      // GM_addStyle(`
      //   .hljs-addition {
      //     background-color: #baeeba;
      //   }
      // `);
      // GM_addStyle(`
      //   .hljs-deletion {
      //     background-color: #ffc8bd;
      //   }
      // `);
      // GM_addStyle(`
      //   .hljs-selector-id,
      //   .hljs-selector-class {
      //     color: #9b703f;
      //   }
      // `);
      // GM_addStyle(`
      //   td.hljs-ln-numbers {
      //     border-right: 2px solid #aaa;
      //     text-align: right;
      //     padding-left: 5px !important;
      //     padding-right: 5px !important;
      //     background-color: #e0e0e0;
      //     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, sans-serif;
      //   }
      // `);
    } else {
      document.documentElement.style.setProperty(
        "--cs-base-bg-color",
        "#000080"
      );
      GM_addStyle(`
        body {
          background-color: #fff;
          color: #000;
        }
      `);
      GM_addStyle(`
        code {
          background-color: #f0f0f0;
        }
      `);
      GM_addStyle(`
        pre {
          background-color: #f0f0f0;
        }
      `);
      GM_addStyle(`
        .question {
          background-color: #ffffff;
        }
      `);
      GM_addStyle(`
        input[type="text"] {
          background-color: #fff;
          color: #000;
          border: default;
        }
      `);
      GM_addStyle(`
        .cs_footer {
          background-color: #eee;
        }
      `);
      GM_addStyle(`
        select {
          background-color: #fff;
          color: #000;
          border: default;
        }
      `);

      // highlight.js theme
      GM_addStyle(`
        .hljs-comment,
        .hljs-quote {
          color: #dd0000;
        }
      `);
      GM_addStyle(`
        .hljs-keyword,
        .hljs-selector-tag,
        .hljs-literal {
          color: #ff7700;
        }
      `);
      GM_addStyle(`
        .hljs-name {
          color: #008;
        }
      `);
      GM_addStyle(`
        .hljs-variable,
        .hljs-template-variable {
          color: #660;
        }
      `);
      GM_addStyle(`
        .hljs-string {
          color: #00aa00;
        }
      `);
      GM_addStyle(`
        .hljs-regexp,
        .hljs-link {
          color: #080;
        }
      `);
      GM_addStyle(`
        .hljs-title,
        .hljs-tag,
        .hljs-symbol,
        .hljs-bullet,
        .hljs-meta {
          color: #1c00cf;
        }
      `);
      GM_addStyle(`
        .hljs-built_in,
        .hljs-builtin-name {
          color: #900090;
        }
      `);
      GM_addStyle(`
        .hljs-class .hljs-title {
          color: #0000ff;
        }
      `);
      GM_addStyle(`
        .hljs-formula {
          background-color: #eee;
          font-style: italic;
        }
      `);
      GM_addStyle(`
        .hljs-addition {
          background-color: #baeeba;
        }
      `);
      GM_addStyle(`
        .hljs-deletion {
          background-color: #ffc8bd;
        }
      `);
      GM_addStyle(`
        .hljs-selector-id,
        .hljs-selector-class {
          color: #9b703f;
        }
      `);
      GM_addStyle(`
        td.hljs-ln-numbers {
          border-right: 2px solid #aaa;
          text-align: right;
          padding-left: 5px !important;
          padding-right: 5px !important;
          background-color: #e0e0e0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, sans-serif;
        }
      `);
    }
    darkThemeEnabled = !darkThemeEnabled;
  }

  toggleButton.addEventListener("click", toggleDarkTheme);
  toggleDarkTheme();
})();

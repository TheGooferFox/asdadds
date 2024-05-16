// ==UserScript==
// @name         Edpuzzle Cheat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://edpuzzle.com/assignments/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edpuzzle.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//Copyright (C) 2023 ading2210
//see README.md for more information

//this script mainly just serves to load the rest of the program

var mirrors = [
  "https://raw.githubusercontent.com/TheGooferFox/asdadds/main/"
];

async function try_mirror(mirror) {
  let r = await fetch(mirror + "main.js");
  let script = await r.text();
  window.base_url = mirror;
  eval(script);
}

async function init() {
  if (window.location.hostname == "edpuzzle.hs.vc") {
    alert("To use this, drag this button into your bookmarks bar. Then, run it when you're on an Edpuzzle assignment.");
    return;
  }
  if (document.dev_env) {
    return try_mirror(document.dev_env)
  }

  for (let mirror of mirrors) {
    try {
      await try_mirror(mirror);
      return;
    }
    catch {}
  }

  alert("Error: Could not connect to any of the mirrors. Check that they're not blocked.")
}

init();
})();

// ==UserScript==
// @name         Eat Shit National Geographic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  eat shit national geographic
// @author       Reno
// @match        http*://*.nationalgeographic.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function () {
    'use strict';
    var $ = window.jQuery;

    // https://stackoverflow.com/a/20683311
    var observer = new MutationObserver(function (mutations) {
        console.log("Eat Shit National Geographic");
        document.body.style = "";
        $('.Modal').remove();

        observer.disconnect();
    });

    var target = document.body;
    observer.observe(target, {
        attributes: true,
        attributeFilter: ['style']
    });
})();
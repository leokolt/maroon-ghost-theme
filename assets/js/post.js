window.addEventListener('DOMContentLoaded', () => {

    /*********************************************************
    ! lightense-images v1.0.17 | © Tunghsiao Liu | MIT
    **********************************************************/
    !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Lightense=t():e.Lightense=t()}(this,(function(){return e={352:e=>{function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){"use strict";var e,t={time:300,padding:40,offset:40,keyboard:!0,cubicBezier:"cubic-bezier(.2, 0, .1, 1)",background:"var(--bg-color-80, rgba(255, 255, 255, .98))",zIndex:1e6,beforeShow:void 0,afterShow:void 0,beforeHide:void 0,afterHide:void 0},r={};function o(e){var t=r[e];if(t){if("function"!=typeof t)throw"config.".concat(e," must be a function!");Reflect.apply(t,r,[r])}}function a(e){switch(i(e)){case"undefined":throw"You need to pass an element!";case"string":return document.querySelectorAll(e);case"object":return e}}function c(e){var t=e.length;if(t)for(var n=0;n<t;n++)s(e[n]);else s(e)}function s(e){e.src&&!e.classList.contains("lightense-target")&&(e.classList.add("lightense-target"),e.addEventListener("click",(function(i){if(r.keyboard&&(i.metaKey||i.ctrlKey))return window.open(e.src,"_blank");!function(e){if(r.target=e,r.target.classList.contains("lightense-open"))return g();o("beforeShow"),r.scrollY=window.scrollY,function(e,t,n){e.addEventListener(t,(function r(i){Reflect.apply(n,this,i),e.removeEventListener(t,r)}))}(r.target,"transitionend",(function(){o("afterShow")}));var i=new Image;i.onload=function(){!function(e){var n=e.width,i=e.height,o=window.pageYOffset||document.documentElement.scrollTop||0,a=window.pageXOffset||document.documentElement.scrollLeft||0,c=r.target.getBoundingClientRect(),s=n/c.width,d=window.innerWidth||document.documentElement.clientWidth||0,l=window.innerHeight||document.documentElement.clientHeight||0,u=r.target.getAttribute("data-lightense-padding")||r.target.getAttribute("data-padding")||r.padding,g=d>u?d-u:d-t.padding,p=l>u?l-u:l-t.padding,f=n/i,b=g/p;r.scaleFactor=n<g&&i<p?s:f<b?p/i*s:g/n*s;var h=d/2,m=o+l/2,v=c.left+a+c.width/2,y=c.top+o+c.height/2;r.translateX=Math.round(h-v),r.translateY=Math.round(m-y)}(this),function(){r.target.classList.add("lightense-open"),r.wrap=document.createElement("div"),r.wrap.className="lightense-wrap",setTimeout((function(){r.target.style.transform="scale("+r.scaleFactor+")"}),20),r.target.parentNode.insertBefore(r.wrap,r.target),r.wrap.appendChild(r.target),setTimeout((function(){r.wrap.style.transform="translate3d("+r.translateX+"px, "+r.translateY+"px, 0)"}),20);var e={cubicBezier:r.target.getAttribute("data-lightense-cubic-bezier")||r.cubicBezier,background:r.target.getAttribute("data-lightense-background")||r.target.getAttribute("data-background")||r.background,zIndex:r.target.getAttribute("data-lightense-z-index")||r.zIndex},t=n(n({},r),e);d("lightense-images-css-computed","\n    :root {\n      --lightense-z-index: ".concat(t.zIndex-1,";\n      --lightense-backdrop: ").concat(t.background,";\n      --lightense-duration: ").concat(t.time,"ms;\n      --lightense-timing-func: ").concat(t.cubicBezier,";\n    }")),r.container.style.visibility="visible",setTimeout((function(){r.container.style.opacity="1"}),20)}(),window.addEventListener("keyup",f,!1),window.addEventListener("scroll",p,!1),r.container.addEventListener("click",g,!1)},i.src=r.target.src}(this)}),!1))}function d(e,t){var n=document.head||document.getElementsByTagName("head")[0];document.getElementById(e)&&document.getElementById(e).remove();var r=document.createElement("style");r.id=e,r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t)),n.appendChild(r)}function l(){d("lightense-images-css","\n:root {\n  --lightense-z-index: ".concat(r.zIndex-1,";\n  --lightense-backdrop: ").concat(r.background,";\n  --lightense-duration: ").concat(r.time,"ms;\n  --lightense-timing-func: ").concat(r.cubicBezier,";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}"))}function u(){null===document.querySelector(".lightense-backdrop")?(r.container=document.createElement("div"),r.container.className="lightense-backdrop",document.body.appendChild(r.container)):r.container=document.querySelector(".lightense-backdrop")}function g(){o("beforeHide"),window.removeEventListener("keyup",f,!1),window.removeEventListener("scroll",p,!1),r.container.removeEventListener("click",g,!1),r.target.classList.remove("lightense-open"),r.wrap.style.transform="",r.target.style.transform="",r.target.classList.add("lightense-transitioning"),r.container.style.opacity="",setTimeout((function(){o("afterHide"),r.container.style.visibility="",r.container.style.backgroundColor="",r.wrap.parentNode.replaceChild(r.target,r.wrap),r.target.classList.remove("lightense-transitioning")}),r.time)}function p(){Math.abs(r.scrollY-window.scrollY)>=r.offset&&g()}function f(e){e.preventDefault(),27===e.keyCode&&g()}return function(i){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=a(i),r=n(n({},t),o),l(),u(),c(e)}}();e.exports=o}},t={},function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(352);var e,t}));

    try {
        /*Responsive Gallery*/
        const galleryImg = document.querySelectorAll('.kg-gallery-image img');
        galleryImg.forEach((e) => {
            const gallery = e.closest('.kg-gallery-image'),
            flexGrow = e.attributes.width.value / e.attributes.height.value;
            gallery.style.flex = flexGrow + " 1 0%";
        });
    } catch{}

        //button scroll to top
        function scrollToTop() {

            const scrollTopBtn = document.querySelector('.progress'),
            midScreen = window.innerHeight / 2;

            document.addEventListener('scroll', () => {
                if (window.pageYOffset >= midScreen) {
                    scrollTopBtn.style.opacity = '1';
                    scrollTopBtn.style.visibility = 'visible';
                } else if (window.pageYOffset <= midScreen) {
                    scrollTopBtn.style.opacity = '0';
                    scrollTopBtn.style.visibility = 'hidden';
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }

        const mediaQuery = window.matchMedia('(min-width: 991px)');

        if (mediaQuery.matches) {
                scrollToTop();
        }

        //progress-bar in posts
        let scrollPercentage = () => {
            let scrollProgress = document.querySelector('.progress'),
                content = document.querySelector('.entry__content'),
                contentBox = content.getBoundingClientRect(),
                midPoint = window.innerHeight / 2;

            if (contentBox.top > midPoint) {
                scrollValue = 0;
            }

            if (contentBox.top < midPoint) {
                scrollValue = 100;
            }

            if (contentBox.top <= midPoint && contentBox.bottom >= midPoint) {
                scrollValue = Math.round((100 * Math.abs(contentBox.top - midPoint)) / contentBox.height);
            }

            scrollProgress.style.background = `conic-gradient(#1d609d ${scrollValue}%, #ffffff00 ${scrollValue}%)`;
        }
        window.addEventListener('scroll', scrollPercentage);
        window.addEventListener('load', scrollPercentage);

        /* Copy link in share buttons block */

        const copyLinkBtn = document.querySelector('.entry-footer__copy-link'),
            inputValue = document.querySelector('.input-link');

        copyLinkBtn.addEventListener('click', () => {
            window.navigator.clipboard.writeText(inputValue.value);
            copyLinkBtn.classList.add('copied');
            setTimeout(() => {
                copyLinkBtn.classList.remove('copied');
            }, 5000);
        });

        /* ! Custom settings on lightense-images*/
        window.addEventListener('load', () => {
            Lightense('.entry__content img:not(.kg-bookmark-thumbnail > img)');
        }, false);


});

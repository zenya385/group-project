parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function e(){document.querySelector(".mobile-menu").classList.remove("is-open")}document.querySelectorAll(".mobile-menu-link").forEach(o=>{o.onclick=e}),$(".wrapper-slayder").slick({dots:!0,speed:1e3,easing:"ease",autoplayspeed:3500,adaptiveHeight:!0,arrows:!1}),jQuery(function(e){e(window).scroll(function(){e(this).scrollTop()>140?e(".header").addClass("header-scroll"):$(this).scrollTop()<140&&e(".header").removeClass("header-scroll")})}),$(document).ready(function(){$(".navigation, .mobile-menu__navigation, .button-scroll").on("click","a",function(e){e.preventDefault();var o=$(this).attr("href"),l=$(o).offset().top+-50;$("body,html").animate({scrollTop:l},1250)})});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/group-project/main.737d6ed7.js.map
!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var o=r("bpxeT"),c=r("2TvXO"),i="https://api.themoviedb.org/3",s="df3d71dc2c14b1899746da6d2afcfb5b";!function(){var t=document.getElementById("movieModal"),a=document.getElementById("closeModalBtn"),n=document.getElementById("modalContent"),r=document.getElementById("loaderContainer");function d(e){return l.apply(this,arguments)}function l(){return(l=e(o)(e(c).mark((function t(a){var n,r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"/movie/").concat(a,"?api_key=").concat(s),e.prev=1,e.next=4,fetch(n);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch movie data for ID ".concat(a));case 7:return e.next=9,r.json();case 9:return o=e.sent,e.abrupt("return",o);case 13:throw e.prev=13,e.t0=e.catch(1),new Error("Error fetching movie data: ".concat(e.t0.message));case 16:case"end":return e.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}function u(){r.style.display="flex"}function p(){r.style.display="none"}function f(e){p(),n.innerHTML="",n.appendChild(e),t.style.display="block"}function v(){t.style.display="none"}function g(){return(g=e(o)(e(c).mark((function t(a){var n,r,o,i,s,l,v;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),"IMG"!==a.target.nodeName){e.next=36;break}if(u(),n=a.target.id,console.log(n),!n){e.next=36;break}if(!(r=n)){e.next=35;break}return e.prev=8,e.next=11,d(r);case 11:if(o=e.sent,(i=document.createElement("div")).innerHTML='<div class="modal-popup">\n            <div class="movie-poster">\n            <img src="'.concat(o.poster_path?"https://image.tmdb.org/t/p/w500".concat(o.poster_path):"https://static.wikia.nocookie.net/ideas/images/6/66/FoxAndroidTM2%27s_No_Poster.jpg",'" alt="').concat(o.title,'" class="modal-poster" />\n            </div>\n            <div class="movie-details">\n              <h2 class="title main-title"><a href="').concat(o.homepage,'" target="_target" class="link page">').concat(o.title,'</a></h2>\n              <p><span class="categ">Vote / Votes </span><span class="val">').concat("".concat(o.vote_average).padStart(0,"0"),'</span></p>\n              <p><span class="categ">Popularity</span><span class="val">').concat(o.popularity,'</span></p>\n              <p class="title"><span class="categ">Original Title</span><span class="val">').concat(o.title,'</span></p>\n              <p><span class="categ">Genre:</span><span class="genre-list">').concat(o.genres.map((function(e){var t=e.name;return" ".concat(t)})).join(",").trim(),'</span></p>\n              \n              <div class="abt">\n              <p>ABOUT</p>\n              <p>').concat(o.overview,'</p>\n              </div>\n              <div class="button-div">\n                <button class="modal-button btn-page" data-watch="').concat(o.id,'">ADD TO WATCHED</button>\n                <button class="modal-button btn-page" data-queue="').concat(o.id,'">ADD TO QUEUE</button>\n              </div>\n              </div>\n              </div>\n            '),f(i),s=document.querySelector("button[data-watch]"),l=document.querySelector("button[data-queue]"),localStorage.getItem("SAVED_CURRENT")){e.next=20;break}return localStorage.setItem("SAVED_CURRENT",JSON.stringify({dataQueued:[],dataWatched:[]})),e.abrupt("return");case 20:(v=JSON.parse(localStorage.getItem("SAVED_CURRENT"))).dataQueued.map((function(e){console.log("element:",e),e===r&&(l.textContent="added to Queued",l.classList.add("active"))})),v.dataWatched.map((function(e){console.log("element:",e),e===r&&(s.textContent="added to watched",s.classList.add("active"))})),s.addEventListener("click",(function(e){var t=e.currentTarget.dataset.watch,a=!0,n=!1,r=void 0;try{for(var o,c=v.dataWatched[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var i=o.value;if(i===t)return v.dataWatched.splice(v.dataWatched.indexOf(i),1),e.currentTarget.textContent="add to Watched",e.currentTarget.classList.remove("active"),void localStorage.setItem("SAVED_CURRENT",JSON.stringify(v))}}catch(e){n=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}v.dataWatched.push(t),e.currentTarget.textContent="added to Watched",e.currentTarget.classList.add("active"),localStorage.setItem("SAVED_CURRENT",JSON.stringify(v)),"home"!==v.dataPage?console.log("LIBRARY PAGE"):console.log("HOME PAGE")})),l.addEventListener("click",(function(e){var t=e.currentTarget.dataset.queue,a=!0,n=!1,r=void 0;try{for(var o,c=v.dataQueued[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var i=o.value;if(i===t)return v.dataQueued.splice(v.dataQueued.indexOf(i),1),e.currentTarget.textContent="add to Queued",e.currentTarget.classList.remove("active"),void localStorage.setItem("SAVED_CURRENT",JSON.stringify(v))}}catch(e){n=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}v.dataQueued.push(t),e.currentTarget.textContent="added to Queued",e.currentTarget.classList.add("active"),localStorage.setItem("SAVED_CURRENT",JSON.stringify(v)),"home"!==v.dataPage?console.log("LIBRARY PAGE"):console.log("HOME PAGE")})),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(8),console.error("Error fetching movie information:",e.t0);case 30:return e.prev=30,p(),e.finish(30);case 33:e.next=36;break;case 35:console.error("Movie ID is undefined."),p();case 36:case"end":return e.stop()}}),t,null,[[8,27,30,33]])})))).apply(this,arguments)}document.getElementById("content").addEventListener("click",(function(e){return g.apply(this,arguments)})),a.addEventListener("click",v),window.addEventListener("click",(function(e){e.target===t&&v()})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&v()}))}()}();
//# sourceMappingURL=index.4c3a1f91.js.map

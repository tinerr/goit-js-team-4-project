!function(){const t=document.getElementById("movieModal"),e=document.getElementById("closeModalBtn"),a=document.getElementById("modalContent"),n=document.getElementById("loaderContainer");function o(){n.style.display="flex"}function s(){n.style.display="none"}function d(e){s(),a.innerHTML="",a.appendChild(e),t.style.display="block"}function c(){t.style.display="none"}document.getElementById("content").addEventListener("click",(async function(t){if(t.preventDefault(),"IMG"===t.target.nodeName){o();const e=t.target.id;if(console.log(e),e){const t=e;if(t)try{const e=await async function(t){const e=`https://api.themoviedb.org/3/movie/${t}?api_key=df3d71dc2c14b1899746da6d2afcfb5b`;try{const a=await fetch(e);if(!a.ok)throw new Error(`Failed to fetch movie data for ID ${t}`);return await a.json()}catch(t){throw new Error(`Error fetching movie data: ${t.message}`)}}(t),a=document.createElement("div");a.innerHTML=`<div class="modal-popup">\n            <div class="movie-poster">\n            <img src="${e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"https://static.wikia.nocookie.net/ideas/images/6/66/FoxAndroidTM2%27s_No_Poster.jpg"}" alt="${e.title}" class="modal-poster" />\n            </div>\n            <div class="movie-details">\n              <h2 class="title main-title"><a href="${e.homepage}" target="_target" class="link page">${e.title}</a></h2>\n              <p><span class="categ">Vote / Votes </span><span class="val">${`${e.vote_average}`.padStart(0,"0")}</span></p>\n              <p><span class="categ">Popularity</span><span class="val">${e.popularity}</span></p>\n              <p class="title"><span class="categ">Original Title</span><span class="val">${e.title}</span></p>\n              <p><span class="categ">Genre:</span><span class="genre-list">${e.genres.map((({name:t})=>` ${t}`)).join(",").trim()}</span></p>\n              \n              <div class="abt">\n              <p>ABOUT</p>\n              <p>${e.overview}</p>\n              </div>\n              <div class="button-div">\n                <button class="modal-button btn-page" data-watch="${e.id}">ADD TO WATCHED</button>\n                <button class="modal-button btn-page" data-queue="${e.id}">ADD TO QUEUE</button>\n              </div>\n              </div>\n              </div>\n            `,d(a);const n=document.querySelector("button[data-watch]"),o=document.querySelector("button[data-queue]");if(!localStorage.getItem("SAVED_CURRENT"))return void localStorage.setItem("SAVED_CURRENT",JSON.stringify({dataQueued:[],dataWatched:[]}));const c=JSON.parse(localStorage.getItem("SAVED_CURRENT"));c.dataQueued.map((e=>{console.log("element:",e),e===t&&(o.textContent="added to Queued",o.classList.add("active"))})),c.dataWatched.map((e=>{console.log("element:",e),e===t&&(n.textContent="added to watched",n.classList.add("active"))})),n.addEventListener("click",(t=>{const e=t.currentTarget.dataset.watch;for(const a of c.dataWatched)if(a===e)return c.dataWatched.splice(c.dataWatched.indexOf(a),1),t.currentTarget.textContent="add to Watched",t.currentTarget.classList.remove("active"),void localStorage.setItem("SAVED_CURRENT",JSON.stringify(c));c.dataWatched.push(e),t.currentTarget.textContent="added to Watched",t.currentTarget.classList.add("active"),localStorage.setItem("SAVED_CURRENT",JSON.stringify(c)),"home"!==c.dataPage?console.log("LIBRARY PAGE"):console.log("HOME PAGE")})),o.addEventListener("click",(t=>{const e=t.currentTarget.dataset.queue;for(const a of c.dataQueued)if(a===e)return c.dataQueued.splice(c.dataQueued.indexOf(a),1),t.currentTarget.textContent="add to Queued",t.currentTarget.classList.remove("active"),void localStorage.setItem("SAVED_CURRENT",JSON.stringify(c));c.dataQueued.push(e),t.currentTarget.textContent="added to Queued",t.currentTarget.classList.add("active"),localStorage.setItem("SAVED_CURRENT",JSON.stringify(c)),"home"!==c.dataPage?console.log("LIBRARY PAGE"):console.log("HOME PAGE")}))}catch(t){console.error("Error fetching movie information:",t)}finally{s()}else console.error("Movie ID is undefined."),s()}}})),e.addEventListener("click",c),window.addEventListener("click",(function(e){e.target===t&&c()})),window.addEventListener("keydown",(function(t){"Escape"===t.key&&c()}))}();
//# sourceMappingURL=index.6752b685.js.map

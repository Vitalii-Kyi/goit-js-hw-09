const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;let d=0;function a(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,o.style.backgroundColor=a(),console.log("started!"),d=setInterval((()=>{o.style.backgroundColor=a()}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,clearInterval(d),console.log("stopped!")})),window.addEventListener("load",onload);
//# sourceMappingURL=01-color-switcher.92f39edd.js.map

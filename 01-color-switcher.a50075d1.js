const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.body;let a=null;function d(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}t.addEventListener("click",(function(t){a=setInterval(d,1e3),t.target.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(e){clearInterval(a),e.target.disabled=!0,t.disabled=!1})),e.disabled=!0,t.style.backgroundColor="#e9c501",e.style.backgroundColor="#477ab5";
//# sourceMappingURL=01-color-switcher.a50075d1.js.map
!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},n=0;function e(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,n=setInterval(e,1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(n)})),t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.300568c3.js.map
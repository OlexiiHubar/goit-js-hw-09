!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};function n(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.startBtn.addEventListener("click",(function(){return t.startBtn.disabled=!0,t.stopBtn.disabled=!1,intervalId=setInterval(n,1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(intervalId)})),t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.881d6d77.js.map
const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body"),s={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log(this.intervalId)}),1e3),console.log("start"))},stop(){clearInterval(this.intervalId),this.isActive=!1,console.log("stop")}};t.addEventListener("click",(()=>{s.start()})),e.addEventListener("click",(()=>{s.stop()}));
//# sourceMappingURL=01-color-switcher.ed20fce9.js.map
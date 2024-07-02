!function(){var e=document.currentScript.getAttribute("data-url")||window.location.href,t=new XMLHttpRequest;t.open("GET",`https://api.paritydeals.com/api/v1/deals/discount/?url=${e}`,!0);let a="Oops! something went wrong. Please email admin@paritydeals.com";t.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);if(!e.bar)return;var t=e.bar.unStyled?`.parity-banner {background-color: ${e.bar.backgroundColor};color: ${e.bar.fontColor};border-radius: ${e.bar.borderRadius};font-size: ${e.bar.fontSize};padding: 20px 10px;text-align: center;position: relative; } 
                @media (max-width: 768px) {
                     .parity-banner {display: flex;
                    flex-direction: column-reverse;}
                 }
                `:"",r=e.bar.addCloseIcon?".parity-banner-close-btn {width:0.8rem;height:0.8rem;border:0;opacity:.5;background-color:transparent;color:currentColor;position:absolute;top:1.3rem;right:1rem;padding:0}.parity-banner-close-btn:hover{opacity:1;} .parity-banner-has-close-btn{padding-right:35px;} ":"",n=`.parity-banner.parity-banner-has-logo {padding-left: 120px;} @media (max-width: 768px) {.parity-banner.parity-banner-has-logo {padding-left: 10px;}}   
                 `,o=`
                 .parity-banner a {
                     
                     color: inherit;
                     position: absolute !important;
                        transform: translate3d(0, 0, 0);

                 }
                 @media (max-width: 768px) {
                     .parity-banner a {
                         position: relative !important;
                         margin-top:10px;
                         left:0 !important;
                         transform: none !important;
                     }
                 }
             `;e.bar.addCloseIcon;var i=document.createElement("style");i.innerText=t+r+n+o,document.head.appendChild(i),document.body.classList.add("pd-has-parity-banner");var d=e.message,s=document.getElementsByClassName("parity-banner");if(!s.length){let t=e.bar.container||"body",a=document.querySelector(t);"top"===e.bar.placement?a.insertAdjacentHTML("afterbegin",d):a.insertAdjacentHTML("beforeend",d)}e.bar.addCloseIcon&&s[0].classList.add("parity-banner-has-close-btn");let a=document.querySelector(".parity-banner-close-btn");a&&a.addEventListener("click",function(){let e=document.querySelector(".parity-banner");e.parentNode.removeChild(e)})}else console.log(a)},t.onerror=function(){console.log(a)},t.send()}();

// ==UserScript==
// @name         Edgesploit v1.6.1
// @version      1.6.1
// @description  Edgenuity does not care about your user experience. We do. Spread this script to your classmates in protest of Edgenuity purposely staying as an outdated, unfulfilling platform! :)
// @namespace    https://discord.gg/HQmSYGK8tV
// @author       Databones
// @match        *://*.core.learn.edgenuity.com/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @icon         https://cdn.discordapp.com/attachments/1125852090477051975/1125853004168446022/Edgesploit.png
// ==/UserScript==

// --- ::CHANGELOG:: ---
// Added an Edgesploit UI so you can edit your settings on the site.
// Show Columns is more functional.
// Remade Themes to show more background.
// Bug-fixed Answer Guesser and Themes.
// Renamed "Apply changes?" to "Reload".
// Minified the script size to 12 kilobytes.
// --- ::CHANGELOG:: ---

!function(){"use strict";const e=GM_getValue("themes",!1);if(window.addEventListener("load",(()=>{e&&(document.body.style.backgroundColor="transparent")})),window.top!==window.self)return;const t=document.createElement("button");t.id="edgesploitMenuButton",t.style.position="fixed",t.style.bottom="20px",t.style.right="20px",t.style.zIndex="9999",t.style.padding="10px",t.style.background="#222",t.style.color="#FFF",t.style.border="none",t.style.borderRadius="5px",t.style.cursor="pointer",t.textContent="Open Menu";const n=GM_getValue("menuButtonYPosition","20px");t.style.bottom=n,document.body.appendChild(t);let o=!1,a=0;t.addEventListener("mousedown",(e=>{o=!0,a=e.clientY})),document.addEventListener("mousemove",(e=>{if(o){const n=a-e.clientY,o=parseInt(t.style.bottom)+n,c=20,s=window.innerHeight-t.clientHeight-20,r=Math.min(s,Math.max(c,o));t.style.bottom=`${r}px`,a=e.clientY,GM_setValue("menuButtonYPosition",`${r}px`)}})),document.addEventListener("mouseup",(()=>{o=!1}));const c=document.createElement("div");c.id="edgesploitBackgroundOverlay",c.style.display="none",c.style.position="fixed",c.style.top="0",c.style.left="0",c.style.width="100%",c.style.height="100%",c.style.backgroundColor="rgba(0, 0, 0, 0.5)",c.style.zIndex="9998",document.body.appendChild(c),c.addEventListener("click",(()=>{d()}));const s=document.createElement("div");s.id="edgesploitMenuContainer",s.style.display="none",s.style.position="fixed",s.style.top="50%",s.style.left="50%",s.style.transform="translate(-50%, -50%)",s.style.zIndex="9999",s.style.width="400px",s.style.padding="20px",s.style.background="#333",s.style.color="#FFF",s.style.borderRadius="10px",s.style.boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)",document.body.appendChild(s);const r=document.createElement("h2");r.style.textAlign="center",r.style.marginBottom="10px",r.style.fontSize="24px",r.textContent="Edgesploit v1.6.1",s.appendChild(r);const l=document.createElement("button");l.textContent="Reload",l.style.marginTop="10px",l.style.padding="5px 10px",l.style.backgroundColor="#222",l.style.color="#FFF",l.style.border="none",l.style.borderRadius="5px",l.style.cursor="pointer",l.addEventListener("click",(()=>{location.reload()})),s.appendChild(l);const i=document.createElement("button");i.textContent="Set background",i.style.marginTop="10px",i.style.marginLeft="10px",i.style.padding="5px 10px",i.style.backgroundColor="#222",i.style.color="#FFF",i.style.border="none",i.style.borderRadius="5px",i.style.cursor="pointer",i.addEventListener("click",(()=>{const e=prompt("Please enter the URL for the custom background:");null!==e&&""!==e.trim()&&(m.bgImageUrl=e,GM_setValue("bgImageUrl",e),I())})),s.appendChild(i);const d=()=>{const e="none"===s.style.display?"block":"none";s.style.display=e,c.style.display=e,t.textContent="none"===e?"Open Menu":"Close Menu"};t.addEventListener("click",d);const u={activityAdvance:!0,frameAdvance:!0,answerGuesser:!0,skipIntros:!0,frameBypass:!0,duplicateTabs:!0,showColumns:!0,autoVocab:!0,antiLogout:!0,labAdvance:!0,themes:!0,bgImageUrl:"https://cdn.discordapp.com/attachments/1125852090477051975/1129372911589916712/hi.webp"};for(const e in u)GM_getValue(e)||GM_setValue(e,u[e]);const m={activityAdvance:GM_getValue("activityAdvance",!0),frameAdvance:GM_getValue("frameAdvance",!0),answerGuesser:GM_getValue("answerGuesser",!0),skipIntros:GM_getValue("skipIntros",!0),frameBypass:GM_getValue("frameBypass",!0),duplicateTabs:GM_getValue("duplicateTabs",!0),showColumns:GM_getValue("showColumns",!0),autoVocab:GM_getValue("autoVocab",!0),antiLogout:GM_getValue("antiLogout",!0),labAdvance:GM_getValue("labAdvance",!0),themes:GM_getValue("themes",!0),bgImageUrl:GM_getValue("bgImageUrl","https://cdn.discordapp.com/attachments/1125852090477051975/1129372911589916712/hi.webp")},p=document.createElement("ul");p.style.listStyleType="none",p.style.padding="0";const y={activityAdvance:"Activity Advance",frameAdvance:"Frame Advance",answerGuesser:"Answer Guesser",skipIntros:"Skip Intros",frameBypass:"Frame Bypass",duplicateTabs:"Duplicate Tabs",showColumns:"Show Columns",autoVocab:"Auto Vocab",antiLogout:"Anti Logout",labAdvance:"Lab Advance",themes:"Themes"},g={activityAdvance:"Advances to the next activity when the current one is complete.",frameAdvance:"Automatically clicks to the next frame.",answerGuesser:"Selects random answers for non-graded activities.",skipIntros:"Removes introduction screens that block your inputs.",frameBypass:"Removes frame restrictions to freely navigate through activities.",duplicateTabs:"Allows opening multiple tabs.",showColumns:"Shows every hidden question in assignments.",autoVocab:"Fills in vocabulary answers in Vocabulary activities.",antiLogout:"Prevents automatic logouts from inactivity.",labAdvance:"Automatically advances in Virtual Lab activities.",themes:"Replaces Edgenuity's depressing background with any background you want."};for(const e in m)if(m.hasOwnProperty(e)){const t=document.createElement("button");t.className="setting-button",t.textContent=y[e],t.title=g[e],t.style.marginTop="10px",t.style.padding="5px 15px 5px 40px",t.style.backgroundColor=m[e]?"#888":"#000",t.style.color="#FFF",t.style.border="none",t.style.borderRadius="5px",t.style.cursor="pointer",t.style.display="block",t.style.width="100%",t.style.textAlign="left";const n={activityAdvance:"https://cdn.discordapp.com/attachments/1125852090477051975/1125853004420087818/Activity_Advance.png",frameAdvance:"https://cdn.discordapp.com/attachments/1125852090477051975/1125853004688543814/Frame_Advance.png",frameBypass:"https://cdn.discordapp.com/attachments/1125852090477051975/1126177109245702175/Frame_Unlocker.png",antiLogout:"https://cdn.discordapp.com/attachments/1125852090477051975/1140812294188703804/Anti_Logout.png",showColumns:"https://cdn.discordapp.com/attachments/1125852090477051975/1140812295145017415/Show_Columns.png",answerGuesser:"https://cdn.discordapp.com/attachments/1125852090477051975/1140812295379890296/Answer_Guesser.png",labAdvance:"https://cdn.discordapp.com/attachments/1125852090477051975/1140812294461345812/Auto_Lab.png",duplicateTabs:"https://cdn.discordapp.com/attachments/1125852090477051975/1140812294931095594/Duplicate_Tabs.png",autoVocab:"https://cdn.discordapp.com/attachments/1125852090477051975/1140812294700413118/Auto_Vocab.png",skipIntros:"https://cdn.discordapp.com/attachments/1125852090477051975/1126177545088413716/Skip_Intros.png",themes:"https://cdn.discordapp.com/attachments/1125852090477051975/1140854697729740912/Themes.png"};t.style.backgroundImage=`url('${n[e]}')`,t.style.backgroundSize="20px 20px",t.style.backgroundRepeat="no-repeat",t.style.backgroundPosition="10px center",t.addEventListener("click",(()=>{m[e]=!m[e],GM_setValue(e,m[e]),t.style.backgroundColor=m[e]?"#888":"#000"}));const o=document.createElement("li");o.appendChild(t),p.appendChild(o)}var v,b,h;function f(){var e=v.contentDocument.querySelector(".FrameRight");e&&e.click()}function w(){const e=document.getElementById("activity-title").innerText,t=document.querySelector("iframe#stageFrame");if(["Instruction","Warm-Up","Summary","Lecture","Virtual Lab","Drafting","Prewriting"].includes(e)&&t){const e=t.contentDocument.querySelector("form"),n=e?e.querySelectorAll(".answer-choice-button"):[];if(n.length>0){n[Math.floor(Math.random()*n.length)].click()}else{const e=t.contentDocument.querySelector("iframe"),n=e?e.contentDocument.querySelectorAll(".answer-choice-button"):[];if(n.length>0){n[Math.floor(Math.random()*n.length)].click()}}const o=t.contentDocument.querySelector("#btnCheck"),a=t.contentDocument.querySelector('[title="done"]');a&&a.click(),o&&o.click()}}function x(){var e=document.getElementById("activity-title");e&&"Vocabulary"===e.innerText&&function(){var e=document.getElementById("activity-title");if("Vocabulary"===e.textContent){var t=document.querySelector("#stageFrame").contentDocument,n=t.querySelector(".word-background"),o=t.querySelector(".word-textbox"),a=t.querySelector(".uibtn.uibtn-blue.uibtn-arrow-next");if(a&&n&&o){var c=n.value;o.value=c;var s=new Event("keyup");o.dispatchEvent(s),a.click();var r=t.querySelectorAll(".playbutton.vocab-play");r.length>0&&(r[0].click(),r[1].click()),setTimeout((function(){a.click()}),1500)}}}(),setTimeout(x,1e3)}function k(){for(var e=document.querySelectorAll("iframe"),t=0;t<e.length;t++)for(var n=e[t].contentDocument.querySelectorAll("iframe"),o=0;o<n.length;o++){var a=n[o].contentDocument.querySelector(".right-column"),c=n[o].contentDocument.querySelector(".left-column");a&&a.children[0].removeAttribute("style"),c&&c.children[0].removeAttribute("style");for(var s=n[o].contentDocument.querySelectorAll('div[fstack][style="display:none;"]'),r=0;r<s.length;r++)s[r].removeAttribute("style")}}function A(){!function(){var e=document.getElementById("activity-status"),t=document.querySelector(".footnav.goRight");m.activityAdvance&&e&&"Complete"===e.innerText.trim()&&t&&t.click()}(),setTimeout(A,1500)}function I(){if(m.themes){const t=document.querySelector(".mainhead");t&&(t.style.backgroundColor="transparent");var e=`\n            body {\n                background-image: url(${m.bgImageUrl});\n                background-size: cover;\n                background-repeat: no-repeat;\n            }\n        `;GM_addStyle(e)}}s.appendChild(p),window.addEventListener("load",(function(){m.themes&&I(),m.answerGuesser&&setInterval(w,250),m.frameAdvance&&(v=document.getElementById("stageFrame"),b=document.getElementById("activity-status"),h=b?b.innerText.trim():"",v&&b&&"Complete"!==h&&setInterval(f,1500)),m.activityAdvance&&A(),m.skipIntros&&function(){var e=document.getElementById("stageFrame");e.addEventListener("load",(function(){var t=e.contentDocument.querySelector("#invis-o-div");t&&t.remove()}))}(),m.frameBypass&&function(){var e=document.getElementById("stageFrame");e&&e.addEventListener("load",(function(){e.contentWindow.API&&e.contentWindow.API.E2020&&(e.contentWindow.API.E2020.freeMovement=!0)}))}(),m.showColumns&&setInterval(k,750),m.autoVocab&&x(),m.labAdvance&&function(){var e=document.getElementById("activity-title").innerText,t=document.getElementById("stageFrame").contentWindow.document;"Virtual Lab"===e&&setInterval((function(){t.dispatchEvent(new KeyboardEvent("keydown",{keyCode:32})),t.dispatchEvent(new KeyboardEvent("keyup",{keyCode:32}))}),300)}(),m.antiLogout&&setInterval((function(){var e=document.getElementById("timerStay");e&&e.click()}),1500),m.duplicateTabs&&function(){"undefined"==typeof console&&(window.console={log:function(){}}),localStorage.removeItem("RecentPageID"),localStorage.removeItem("WrongPageID");var e=localStorage.setItem;localStorage.setItem=function(t,n){"RecentPageID"!==t&&"WrongPageID"!==t&&e.apply(this,arguments)};var t=localStorage.getItem;localStorage.getItem=function(e){return"RecentPageID"===e||"WrongPageID"===e?null:t.apply(this,arguments)},Object.defineProperty(document,"domain",{value:"core.learn.edgenuity.com",writable:!1,configurable:!1});var n=window.addEventListener;window.addEventListener=function(e,t,o){"storage"!==e&&n.apply(this,arguments)},Object.defineProperty(window,"thisPageID",{value:1e7*Math.random(),writable:!1,configurable:!1})}(),m.activityAdvance&&A()}))}();

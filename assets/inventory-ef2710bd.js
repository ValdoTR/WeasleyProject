import"./main-ce14173a.js";import{t as i}from"./translate-0f2400b3.js";import{g as y,a as u,b as p,c as v}from"./notifications-b643d824.js";import"./config-63dd91cb.js";document.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{const a=document.getElementById("title"),r=document.getElementById("inventoryContent"),o=document.getElementById("closeButton");if(a&&(a.innerText=i("modules.inventory.inventory")),r){const s=y(),l=v();for(let n=0;n<l;n++){const t=document.createElement("div");if(t.classList.add("inventory-item"),t.classList.add("bg-dark"),n!==l-1&&t.classList.add("mr-2"),s[n]){t.setAttribute("data-description",i(s[n].description));const e=document.createElement("div");e.classList.add("inventory-item-name"),e.classList.add("bg-white"),e.innerText=i(s[n].name);const m=document.createElement("div"),d=document.createElement("object");d.setAttribute("type","image/png"),d.setAttribute("data",`../../images/inventory/${s[n].image?s[n].image:"undefined.png"}`);const c=document.createElement("img");c.setAttribute("src",`../../images/inventory/${u()}`),c.setAttribute("alt",i("modules.inventory.inventoryItem",{itemNo:n+1})),d.appendChild(c),m.classList.add("inventory-item-image"),m.appendChild(d),t.appendChild(m),t.appendChild(e)}else{const e=document.createElement("div");e.classList.add("position-absolute"),e.classList.add("w-100"),e.classList.add("h-100"),e.classList.add("d-flex"),e.classList.add("align-items-center"),e.classList.add("justify-content-center"),e.innerText=i("modules.inventory.empty"),t.appendChild(e),t.classList.add("empty"),t.classList.add("text-white")}r.appendChild(t)}}o&&(o.innerText=i("modules.inventory.close"),o.addEventListener("click",()=>{p()}))}).catch(a=>console.error(a))});

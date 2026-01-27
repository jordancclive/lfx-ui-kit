const i=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,l=({label:s,open:n=!1,disabled:r=!1,onClick:o})=>{const t=document.createElement("button"),e=["lfx-filter-dropdown-trigger"];return n&&!r&&e.push("lfx-filter-dropdown-trigger--open"),r&&e.push("lfx-filter-dropdown-trigger--disabled"),t.className=e.join(" "),t.disabled=r,t.type="button",t.setAttribute("aria-haspopup","listbox"),t.setAttribute("aria-expanded",String(n&&!r)),t.innerHTML=`
    <span class="lfx-filter-dropdown-trigger__label">${s}</span>
    <span class="lfx-filter-dropdown-trigger__chevron">${i}</span>
  `,o&&!r&&t.addEventListener("click",o),t};export{l as c};

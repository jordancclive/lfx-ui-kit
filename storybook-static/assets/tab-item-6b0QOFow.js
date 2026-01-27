const m=({label:c,selected:a=!1,disabled:e=!1,size:i="default",icon:n,onClick:l})=>{const t=document.createElement("button"),s=["lfx-tab-item"];i==="small"&&s.push("lfx-tab-item--small"),a&&!e&&s.push("lfx-tab-item--selected"),e&&s.push("lfx-tab-item--disabled"),t.className=s.join(" "),t.disabled=e,t.type="button",t.setAttribute("role","tab"),t.setAttribute("aria-selected",String(a&&!e));const f=n&&!e?`<span class="lfx-tab-item__icon">${n}</span>`:"";return t.innerHTML=`
    <span class="lfx-tab-item__content">
      ${f}
      <span class="lfx-tab-item__text">${c}</span>
    </span>
  `,l&&!e&&t.addEventListener("click",l),t};export{m as c};

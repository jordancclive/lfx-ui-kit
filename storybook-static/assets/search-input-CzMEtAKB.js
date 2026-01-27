const l=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 14L10.5 10.5M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,i=({placeholder:n="Search...",value:r="",disabled:t=!1,showIcon:o=!0,variant:a="form"}={})=>{const e=document.createElement("div"),s=["lfx-search-input"];a==="toolbar"&&s.push("lfx-search-input--toolbar"),t&&s.push("lfx-search-input--disabled"),e.className=s.join(" ");const c=o?`<span class="lfx-search-input__icon">${l}</span>`:"";return e.innerHTML=`
    ${c}
    <input 
      type="text" 
      class="lfx-search-input__input" 
      placeholder="${n}"
      value="${r}"
      ${t?"disabled":""}
    />
  `,e};export{i as c};

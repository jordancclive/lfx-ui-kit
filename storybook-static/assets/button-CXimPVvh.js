const i=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-opacity="0.25" stroke-width="2"/>
  <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,x=({label:c,variant:r="primary",size:u="default",disabled:e=!1,loading:n=!1,iconLeft:o,iconRight:l,onClick:a})=>{const t=document.createElement("button"),s=["lfx-button",`lfx-button--${r}`];if(u==="large"&&s.push("lfx-button--large"),n?s.push("lfx-button--loading"):e&&s.push("lfx-button--disabled"),t.className=s.join(" "),t.disabled=e&&!n,t.type="button",n)t.innerHTML=`
      <span class="lfx-button__content">
        <span class="lfx-button__spinner">${i}</span>
      </span>
    `;else{const p=o?`<span class="lfx-button__icon lfx-button__icon--left">${o}</span>`:"",f=l?`<span class="lfx-button__icon lfx-button__icon--right">${l}</span>`:"";t.innerHTML=`
      <span class="lfx-button__content">
        ${p}
        <span class="lfx-button__text">${c}</span>
        ${f}
      </span>
    `}return a&&!e&&!n&&t.addEventListener("click",a),t};export{x as c};

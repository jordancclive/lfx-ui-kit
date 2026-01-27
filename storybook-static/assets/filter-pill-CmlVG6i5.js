const a=({label:i,selected:c=!1,disabled:t=!1,icon:s,onClick:n})=>{const l=document.createElement("button"),e=["lfx-filter-pill"];c&&!t&&e.push("lfx-filter-pill--selected"),t&&e.push("lfx-filter-pill--disabled"),l.className=e.join(" "),l.disabled=t,l.type="button";const f=s&&!t?`<span class="lfx-filter-pill__icon">${s}</span>`:"";return l.innerHTML=`
    <span class="lfx-filter-pill__content">
      ${f}
      <span class="lfx-filter-pill__text">${i}</span>
    </span>
  `,n&&!t&&l.addEventListener("click",n),l};export{a as c};

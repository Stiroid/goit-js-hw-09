function e(e,t){const o=Math.random()>.3;return new Promise(((r,n)=>{setTimeout((()=>{o?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let o=Number(t.currentTarget.delay.value);const r=Number(t.currentTarget.step.value),n=Number(t.currentTarget.amount.value);for(let t=0;t<=n;t++)e(t,o).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),o+=r;t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.76fe99f5.js.map

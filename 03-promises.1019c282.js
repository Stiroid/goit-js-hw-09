!function(){function e(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(n.currentTarget.delay.value),o=Number(n.currentTarget.step.value),r=Number(n.currentTarget.amount.value),a=0;a<=r;a++)e(a+1,t).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),t+=o}))}();
//# sourceMappingURL=03-promises.1019c282.js.map
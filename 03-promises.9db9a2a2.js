!function(){var e={form:document.querySelector(".form"),firstDelay:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};e.form.addEventListener("submit",(function(t){var n=function(e){var t,n;(t=e,n=a,new Promise((function(e,o){var a=Math.random()>.3;setTimeout((function(){a?e({position:t,delay:n}):o({position:t,delay:n})}),n)}))).then((function(t){t.position;var n=t.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(t){t.position;var n=t.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))})),a+=u};t.preventDefault();for(var o={delay:Number(e.firstDelay.value),step:Number(e.delayStep.value),amount:Number(e.amount.value)},a=o.delay,u=o.step,r=o.amount,i=1;i<r;i++)n(i)}))}();
//# sourceMappingURL=03-promises.9db9a2a2.js.map

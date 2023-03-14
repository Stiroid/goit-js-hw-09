function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}
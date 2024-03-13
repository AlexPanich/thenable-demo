'use strict';

const thenable = {
  then(onFulfilled) {
    console.log('in then')
    onFulfilled('thenable');
  }
};



(async () => {
    console.log('start');

    setTimeout(() => {
        console.log('timeout');
    },0);

    Promise.resolve().then(() => console.log('first promise 1')).then(() => console.log('first promise 2'));

    Promise.resolve()
        .then(() => console.log('second promise 1'))
        .then(() => console.log('second promise 2'));

    console.log('before thenable');

    const m1 = await thenable;
    console.log(m1);

    console.log('after thenable');

    Promise.resolve().then(() => console.log('third promise 1')).then(() => console.log('third promise 2'));

    console.log('1 -> 2');

    await 1;

    console.log('finish');
})();
'use strict';

const thenable = {
  then(onFulfilled) {
    console.log('thenable')
    onFulfilled();
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

    await thenable;

    console.log('1 -> 2');

    await thenable;

    console.log('finish');
})();
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  rl.question(`Is ${el1} greater than ${el2}? `, function(res) {
    callback((res === 'yes') ? true : false);
  });
}

// askIfGreaterThan(2,3,(res) => console.log(res));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
        if (isGreaterThan) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else { outerBubbleSortLoop(madeAnySwaps); }
}

// innerBubbleSortLoop([3,2,1], 0, false, () => console.log(`i'm in the outerloop`));


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) { innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop); }
    else { sortCompletionCallback(arr); }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});

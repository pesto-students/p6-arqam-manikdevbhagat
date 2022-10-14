// Function with undesired output
function createIncrement() {
  let count = 0;
  function increment() {
    count++; //note that although increment() increases the value of count, it has not effect on 'message'.
  }
  let message = `Count is ${count}`; // whenever createIncrement() is called, Count = 0 is registered in 'message'
  function log() {
    console.log(message);
  }
  return [increment, log];
}

var [increment, log] = createIncrement();
// Currently 'message' is 'Count is 0'.
increment();// count = 1 but 'message' is unchanged.
increment();// count = 2 but 'message' is unchanged. 
increment();// count = 3 but 'message' is unchanged.
log();//logs 'message' i.e. 'Count is 0'.



// Function with desired output
function createIncrement2() {
  let count = 0;
  let message = `Count is ${count}`;
  function increment() {
    count++;
    message = `Count is ${count}`; //As increment() increases the value of count, 'message' is also updated with the latest value of count.
  }
  function log() {
    console.log(message);
  }
  return [increment, log];
}

var [increment, log] = createIncrement2();
// Currently 'message' is 'Count is 0'.
increment();// count = 1 and 'message' is updated.
increment();// count = 2 and 'message' is updated. 
increment();// count = 3 and 'message' is updated.
log();//logs 'message' i.e. 'Count is 3'.

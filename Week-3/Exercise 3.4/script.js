//items array is accessible outside of createStack_1() function scope
function createStack_1() {
  return {
    items: [], //items array is returned as the function is called
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
}
const stack_1 = createStack_1();
stack_1.push(10);
stack_1.push(5);
console.log(stack_1.pop());
console.log(stack_1.items); //items array is accessible

//items array is not accessible outside of createStack_2() function scope
function createStack_2() {
  var items = [];
  var obj = {
    push: function(item){
      items.push(item);
    },
    pop: function(item){
      return items.pop();
    }
  }
  return obj;
}
////whenever the function is called, the object containing the method will be returned,
//and thus the push and pop method will be accessible to the outer world while protecting the data we do not want to share.
const stack_2 = createStack_2();
stack_2.push(10);
stack_2.push(5);
console.log(stack_2.pop());
console.log(stack_2.items);
// bind() method creates a new function that, when called, has its 'this' keyword set to the provided value.
// bind() is used when we need a function to be later called with a certain context.
// It let’s us explicitly define the value of 'this' when calling a function.

// Let's see an example for bind():

var pokemon = {
  firstname: "Pika",
  lastname: "Chu",
  getPokeName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var definePokemon = function (master, power) {
  console.log(master + " chooses " + this.getPokeName());
  console.log(this.getPokeName() + " is " + power + " type");
};

var logPokemon = definePokemon.bind(pokemon); // A new instance of 'choosePokemon' is created and the object 'pokemon' is bound to it.
logPokemon("Ash", "Electric"); // We can now call the functon and it will recognize the properties of object 'pokemon'.

// The call() method calls a function with a given this value and arguments provided individually.
// The apply() method serves the same purpose as call().
// The only difference between how they work is that call() expects all parameters to be passed in individually,
// whereas apply() expects an array of all of our parameters.

// Let's apply call() and apply() to the same example:

// The first argument is the object that 'this' should reference to and the function arguments follow.
definePokemon.call(pokemon, "Ash", "Electric"); // expects all parameters to be passed in individually
definePokemon.apply(pokemon, ["Ash", "Electric"]); // expects an array of all parameters

//The main differences between bind() and call()/apply() is that the call()/apply() method:

// - Accepts additional parameters as well
// - Executes the function it was called upon right away.
// - Does not make a copy of the function it is being called on.

---
date: 2014-09-28
linktitle: ES6
next: /tutorials/github-pages-blog
prev: /tutorials/automated-deployments
title: ES6
weight: 10
---


## How these ideas get into the language
Javascript is run by a committee.
The committee allows for new features to be voted into the language
After multiple rounds of revisions, the feature gets added to the language.
ES6 was a huge round where many new features got added, that was solely needed.

## Speculation: Why ES6 was so necessary
I think one of the reasons is that Javascript went from a language to display things on websites to being a tool that developers wanted to use to build full applications.

Whereas most programs in javascript were one-liners back in the early 2000s, the needs of building full applications are very different.

The bigger the program, the more structures we need in a language to build reliable software.

As we'll see later, having classes and all these other features means that Javascript doesn't break down as much when the programs get to hundreds of thousands of lines of code--things you'll often see in a typical software project.

As a bonus, it also makes some of the standard things you do in the language easier.

The hardest part about programming languages is they're usually designed for intermediates and experts. You wield powerful tools that are complicated that you don't know how to use. 

As a beginner, you want a language that points out what you're doing wrong, so that you know the difference between good and bad.

Once you know what's right, you can then widen your scope to do things that are weird or odd.

As an expert, you want a language that gives you the tools that fit you the best. That might mean ultimate flexibility, or many complicated and specific features. Having the knowledge means you can wield the language with power and precision.

A running theme in ES6 is that the new features being added to the language didn’t come out of nowhere. Most have been tried and proven useful in other languages.
The for–of loop, for example, resembles similar loop statements in C++, Java, C#, and Python. Like them, it works with several different data structures provided by the language and its standard library. But it’s also an extension point in the language.



## Before ES6: Declaring variables
In pre-ES6 Javascript, the usual way of declaring a variable is using ```var```.
And the rule of ```var``` was pretty simple: "The scope of a var declared in a JS function is the whole body of that function.

But think about that for a second, and you'll see a problem: variables in pre ES6 Javascript bleed everywhere like blood spilling out of an artery.

As Jason Orendorff says:
"The scope of a var in JavaScript is like the bucket-of-paint tool in Photoshop. It extends in both directions from the declaration, forwards and backwards, and it just keeps going until it reaches a function boundary."

In code it looks like this:

```javascript
function varDoesntCare() {
  var data = ["apple", "peach", "pear"];
  var newArray = [];
  // var i might be defined in this loop...
  // but it certainly doesn't stay in it.
  for (var i=0; i<data.length; i++) {
    newArray.push(data[i]);
  }

  //Outside of the for loop, you can still access i.
  console.log(i); //logs "3"
  
  //If you declare a different i and want it to remain
  //inside a block (e.g. an if statement or another for loop)...
  if (true) {
    var i = 2;
  }

  //Your previous value will get overriden.
  console.log(i); //logs "2"
}

varDoesntCare();


```

This is a problem if you use loops.
See 1:

```javascript
for (var i=0; i<3; i++) {
    console.log(i); //logs "0"; "1"; "2";
  }

  //Your variable i still exists!
  console.log(i); //logs "3"
```

It gets worse if you're using a variable in a loop and the action isn't applied instantly.
```javascript
for (var i=0; i<3 i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000); //logs 3, three times.
}
```
after 1 second, the loop has already gone through everything, so i is already at 3.

A good way to fix it is just to use let.

```javascript
for (let i=0; i<3 i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000); //logs 1, 2, 3
}
```

Remember how we said variables are like a bucket of paint or blood spilling everywhere?
Well let's get to that. If we try to log a variable before it's defined, you'll get an undefined value.

```javascript
console.log(hamburger); //logs undefined;
var hamburger = "beef";

```

Undefined means the variable hamburger *exists but has no value*. It is given a value when you make it equal "beef".

Compare this to let or const:

```javascript
console.log(hamburger); //Uncaught ReferenceError: hamburger is not defined.
let hamburger = "beef";

```

The variable doesn't exist before you log it. It isn't just empty. It literally hasn't been created yet.


**Declaring Variables using const and let**

In current ES6+, you also have the option of using ```const``` and ```let```.

Why 

The difference with ```const``` and ```let``` is how they work elsewhere.

When you use ```var``` to declare a variable, there can only be two ways they're declared: globally, and inside a function.

When you use const, you declare a variable which cannot be reassigned.
When you use let, you declare a variable that can.

We'll see more about the details later.

**Where did const and let come from**

a ```let``` came from mathematics
let x = 5

so did ```const```.

Because they were mathematical constructs, they trickled down into functional programming languages--languages based mostly on the algebra you were taught in school.

And they were borrowed by ECMAScript's committee because they were useful in some way.


```New thing```




# Notes on Var/let/const

let/const replaces IIFE (Immediately-Invoked Function Expression)

It runs itself immediately and doesn't allow for leaking into the parent scope--the window.
Sometimes it breaks someone else's variables.

let and const don't need IIFE's to avoid leaking.

```javascript
{
  const name = "ethan";
}
```


##When do I use var, const and let?
const is not about immutability. You can change 

One opinion by Mathias:
use const by default
use let if rebinding if needed
var shouldn't be used at all

Kyle Simpson:
use var for top-level variables that are shared across many scopes
use let for local variables in smaller scopes
refactor let to const when you're reasonably sure there won't be variable reassignment

##So what do I do if I want my variable to never change?
If you're using const, you'll want to also freeze the object you're using.

You can do this using ```Object.freeze```.

```javascript
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
    Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

```



#Functions





**Where did the arrow function come from**
In mathematics, you usually write a function with the f symbol.

f(x) = x^2

But mathematicians sometimes shorten this to an arrow, which helps especially when there's functions inside of functions.

x -> x^2


**Why did Javascript go with =>**

https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

From Jason Orendorff as part of hacks Mozilla:
Arrows have been part of JavaScript from the very beginning. The first JavaScript tutorials advised wrapping inline scripts in HTML comments. This would prevent browsers that didn’t support JS from erroneously displaying your JS code as text. You would write something like this:

```html

<script language="javascript">
<!--
  document.bgColor = "brown";  // red
// -->
</script>

```

The arrow sequence --> also denotes a one-line comment.

But here is where things get tricky, because in Javascript and HTML, the behaviour is a bit different.

In other contexts, --> is an operator in JS, the “goes to” operator!

```javascript
function countdown(n) {
  while (n --> 0)  // "n goes to zero"
    alert(n);
  blastoff();
}
```

Javascript is a unique language precisely because of these strange odds and ends built up from the early years of the web.

One of the unique ideas the committee behind Javascript came up with was the ability to place functions inside of functions. Before Javascript, functions only worked when you declared them outside of other blocks of code.

In Javascript
```javascript
$("#confetti-btn").click(function (event) {
  playTrumpet();
  fireConfettiCannon();
});
```
Before you could place functions like this, you had to resort to other methods:


In C



##Why Arrow Functions
They make code more concise, and once you learn how arrow functions work--I think they make your code more readable.




A function in Javascript is meant to be a big heavy thing that shouts out: "I'm a FUNCTION!" An arrow is a smaller beast that wants to be used only when the thing you're writing is not important.

This difference I think is trying to tease out whether you're using a function because you *need* a function, or whether you're using a function because you have to.

In the big picture, normal functions are used best when you want to reuse the function again somewhere else.

```javascript
const names = ["wes", "kait", "lux"];

//Here, I think you use a function because you have to.
const fullNames = names.map(function(name){
  return `${name} bos`;
}); 

console.log(fullNames); //returns ["wes bos", "kait boss", "lux bos"]

```

You're not using the function because you want to reuse the code in another part of your application. The purpose is just to do something *temporary*, that allows you to move on to other things.

Arrow functions are designed for this purpose. They're meant to be temporary functions, that don't change the functionality of your code.

Here's the same thing in an arrow function:

```javascript

//Version 1:
const fullNames = names.map((name) => {
  return `${name} bos`;
});

//Version 2:
const fullNames = names.map(name => `${name} bos`);

```
You can see that especially in version 2, it lifts the idea of a function out of the way so you see what's really happening: you're transforming name into something else.

The fact that you're using a function to do so is irrelevant to the code.
You're not using the function again. You're not trying to reuse it.

Arrow functions clear your headspace to focus you on what's actually happening.

##The details:
Some things to note about arrow functions:

1. You can only omit brackets if you have one argument. Two or zero requires brackets.

```javascript
//Zero:
(() => {
  //insert code here
})

//One:
(name => {

})

//Two:
((name, date) => {
  //insert code here
});

```
It might seem strange, but there are lots of times where you'll want to use a single argument in your day to day code usage, so you'll find this to be obvious later on.


2. In the one-line version, you don't have to write return, because the return is hidden.

```javascript

//The return is hidden after the =>
const fullNames = names.map(name => `${name} bos`);

```

If you put brackets in your function however, you still need a return.

```javascript

const fullNames = names.map(name => {
  return `${name} bos`;
})

```
The basic gist is that arrow functions are made to make one-liners easy. Everywhere else, they just work like functions would.

3. Arrows don't redefine the value of ```this```.
Remember when I said arrow functions love being used when they're not important?

Whenever you define a function, you change the value of ```this```.
But whenever you define an arrow function, the value of ```this``` doesn't change.




##Arrow functions in the real world

Once you know about arrow functions, you can start to use them everywhere.
You can use variables to declare a function, which you'll see often if you learn React.js:

***WHY????
```javascript

class Alert extends React.Component {
  const sayMyName = (name) => {alert("Hello!")};
}
```
One benefit of this approach: Creating a function like this keeps the function private.
Arrows also prevent bugs because they don't redefine the value of ```this```.






#IIFE (not part of ES6)
An Immediately Invoked Function Expression is a function that dies immediately after it came to life.

```javascript
(function() {
    alert("Hello from IIFE!");
})();
// Shows the alert "Hello from IIFE!"

//OR

void function() {
    alert("Hello from IIFE!");
}();

```
Once it's called, it doesn't exist anymore. You can't call it.

"Whenever JavaScript sees function keyword as the first word in a valid statement, it expects that a function definition is going to take place. So to stop this from happening, we are prefixing “!” in-front of the function keyword on line 1. This basically enforces JavaScript to treat whatever that’s coming after “!” as an expression."

Another purpose of IIFE's: It acts as a Javascript hack for private variables. 

Any variables declared inside the IIFE are not visible to the outside world.

Example:
```javascript

(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives;
    var weapons;
    
    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5;
        weapons = 10;
    }
}());

```
we have an init function that no one has access to outside the IIFE. But the init function can access those private variables.

##Return two things from a function (not ES6)
You can usually only return one thing from a function.

But what you can do is use an object to return two values.

```javascript
function twoValues() {
    return {
        value1: value1, 
        value2 : value2
    }
} 
```



#Modules

From Mozilla Hacks:
"When I started on Mozilla’s JavaScript team back in 2007, the joke was that the length of a typical JavaScript program was one line.
This was two years after Google Maps launched. Not long before that, the predominant use of JavaScript had been form validation, and sure enough, your average error handler would be… one line of code.
Things have changed. JavaScript projects have grown to jaw-dropping sizes, and the community has developed tools for working at scale. One of the most basic things you need is a module system, a way to spread your work across multiple files and directories—but still make sure all your bits of code can access one another as needed—but also be able to load all that code efficiently."

This import and export feature brings it more in line with languages designed to build big programs like C++ and Java.

Let’s talk about export first. Everything declared inside a module is local to the module, by default. If you want something declared in a module to be public, so that other modules can use it, you must export that feature. There are a few ways to do this. The simplest way is to add the export keyword.



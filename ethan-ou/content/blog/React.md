If you're jumping into React for the first time, the toughest part about understanding React isn't the framework itself and what it does. It's the paradigm shift you need to learn in order to understand what's happening. 

React hints you into programming a different way. You don't have a direct connection to the DOM you're programming into. And the way you program means you can't rely on the satisfaction of seeing results instantly on your screen.
React requires you to think a lot more programmatically, rather than visually. About whole systems rather than the part you're making right now.

And it does so by using a radically different type of programming than you might be used to.



##An intro to React-style Programming
React programming makes you focus on
data streams -> the flow of data from one place to another
functional programming -> applying functions to manipulate a stream of data (e.g. filter out results from data, combine two streams of data together)
asynchronous -> allows you to do things at the same time, rather than one after the other

Because of functional programming, React forces you to become an architect rather than an experimenter. It forces you to design your application beforehand, and build after.
This is what makes React difficult to read in the beginning, but really, really easy to build for in the long run.
It allows you to think with pen and paper.


From Andrew Ray:
https://blog.andrewray.me/reactjs-for-stupid-people/
After working with React for a while, I've seen some important benefits surface.

1. Easily reason about how views render

Your user logs in and you have to update the header. You might do this:
```html
<header>  
    <div class="name">
        Not Logged In
    </div>
</header>  
```
```javascript
$.post('/login', credentials, function( user ) {
    // Modify the DOM
    $('header .name').text( user.name );
});
```
This is "imperative" programming. You're telling the browser how to update in a series of steps. In a complex application, I can tell you from experience, this code doesn't scale. How do you debug the output? How do you know who updated the header? Who else has access to the header HTML? Who holds the source of truth for the name being visible? This DOM manipulation is just as bad as a GOTO statement for reasoning about your program.

Here's how you might do it in React:
```javascript
render: function() {  
    const name = this.state.name;
    return <header>
        { name ? name : <span>Not Logged In</span> }
    </header>;
}
```
Yes, JSX looks weird at first, but humor me. We can tell instantly how this component will render. If you know the state, you know the rendered output. You don't have to trace program flow.

This is "declarative" programming. You declare that you want a header with a name or a message. You don't tell the computer how to do it, like in the jQuery example. In jQuery, you mutate the DOM over multiple steps and can't reason about how it got that way.

Should I Use React?
Short answer: yes.

Long answer: probably, yes, for most things.

Here's why you should use React:

Works great for teams, strongly enforcing UI and workflow patterns
UI code is readable and maintainable
Componentized UI is the future of web development, and you need to start doing it now.
Here's why you should think twice before you switch:

React will slow you down at the start. Understanding how props, state, and component communication works is not straightforward, and the docs are a maze of information. This is countered by a speed up when your whole team is on board.
React does not support any browser below IE8.
If your application / website doesn't have very much dynamic page updating, you may be implementing a lot of code for a small benefit.
There's no one way to implement complex UI components (lightboxes, date pickers, etc). Finding the best libraries and patterns for your codebase will take some time.


##Declarative Programming

From: React Design Patterns and Best Practices
Reading the React documentation or blog posts about React, you have surely come across the term declarative. In fact, one of the reasons why React is so powerful is because it enforces a declarative programming paradigm. Consequently, to master React, it is important to understand what declarative programming means and what the main differences between imperative and declarative programming are. The easiest way to approach the problem is to think about imperative programming as a way of describing how things work, and declarative programming as a way of describing what you want to achieve.

Let's move into a JavaScript example, writing a simple function that, given an array of uppercase strings, returns an array with the same strings in lowercase:
```javascript
toLowerCase(['FOO', 'BAR']) // ['foo', 'bar']  
```
An imperative function to solve the problem would be implemented as follows:
```javascript
const toLowerCase = input => {    
    const output = []    
    for (let i = 0; i < input.length; i++) {      
        output.push(input[i].toLowerCase())    
    }    
    return output  
}  
```
A declarative solution would be as follows:

```javascript
const toLowerCase = input => input.map(
    value => value.toLowerCase() 
) 
```
There are some important differences to note: the former example is less elegant and it requires more effort to be understood. The latter is terser and easier to read, which makes a huge difference in big code bases, where maintainability is crucial.Another aspect worth mentioning is that in the declarative example, there is no need to use variables nor to keep their values updated during the execution. Declarative programming, in fact, tends to avoid creating and mutating a state.

As a final example, let's see what it means for React to be declarative. The problem we will try to solve is a common task in web development: showing a map with a marker.

The JavaScript implementation (using the Google Maps SDK) is as follows:
```javascript
const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng,  })
    const marker = new google.maps.Marker({
        position: myLatLng,
        title: 'Hello World!',
    })

marker.setMap(map)
```

It is clearly imperative, because all the instructions needed to create the map, and create the marker and attach it to the map are described inside the code, one after the other.A React component to show a map on a page would look like this instead:

```javascript
<Gmaps zoom={4} center={myLatLng}>
    <Marker position={myLatLng} Hello world! />
</Gmaps>
```

In declarative programming, developers only describe what they want to achieve and there's no need to list all the steps to make it work. The fact that React offers a declarative approach makes it easy to use, and consequently, the resulting code is simple, which often leads to fewer bugs and more maintainability.

Unlearning everything
Using React for the first time usually requires an open mind because it brings a new way of designing web and mobile applications. In fact, React tries to innovate the way we build user interfaces following a path that breaks most of the well-known best practices.In the last two decades, we learned that the separation of concerns is important, and we used to think about it in terms of separating the logic from the templates. Our goal has always been to write the JavaScript and the HTML in different files.Various templating solutions have been created to help developers achieve this. The problem is that most of the time, that kind of separation is just an illusion and the truth is that the JavaScript and the HTML are tightly coupled, no matter where they live.

The basics of functional programming
Apart from following the best practices when we write JSX and use a linter to enforce consistency and find errors earlier, there is one more thing we can do to clean up our code: follow a Functional Programming (FP) style.As discussed in Chapter 1, Everything You Should Know About React, React has a declarative programming approach that makes our code more readable.Functional Programming  is a declarative paradigm, where side-effects are avoided and data is considered immutable to make the code easier to maintain and to reason about. Don't consider the following section an exhaustive guide to functional programming; it is only an introduction to get started with some concepts that are commonly used in React and of which you should be aware.


#Notes from Wes Bos's course

Everything in React is a component.
A component is a reusable piece of code.
React basically allows you to build your own piece of a user interface, then use it anywhere in your application.

For instance, say you have a list of food on a restaurant menu.
Every item of that menu can be defined by a single component.
When you finally create the menu, you just reuse the component as many times as you want.

One of the huge benefits of React is it's great for teams. Every component is separated, which means one person can edit one component at a time.

Props: Properties.
Things that don't change about your component.

State: Things that do change.
For instance, every food component will have a different state:

Food 1:
Title: Lobster
Description: A delicious lobster

Food 2:
Title: Cucumber
Description: A juicy cucumber

You can pass data like a dinner menu to your component, and render every piece of that data using state, to make your finished menu.

The other bonus: Anytime the data changes, React also automatically changes the page. If your dinner menu happens to be live updating, you can change how your website looks just by changing the data that your website reads.

In a real application, you probably won't be setting state with a timer. You might set state when you have new data from the server, or from user input.

State can also be used for keeping track of your application's status.

A simple example: if you 


As with many things in programming, React gives us a set of general-purpose tools but not a lot of context about how to use them. Finding that context is half the battle in learning.




#Personal Note:
One of the things I find really useful is building free-form first, then splitting into components later.
I find the structure of an application doesn't come out until later in the building process.


#Creating our first components

First thing you'll need to do is import our dependencies:

```javascript
import React from 'react';

```

Every single component we use is going to be its own class. The way we create classes is using the class keyword.

```javascript
import React from 'react';

//Notice how it extends React.Component
class StorePicker extends React.Component {

}

```
Every single class that you'll create in React needs to have a render method in it. Render determines what HTML or DOM elements need to be rendered to the page.

```javascript
import React from 'react';

//Notice how it extends React.Component
class StorePicker extends React.Component {
    render() {
        return <p>Hello!</p>
    }
}

```

We're never going to be actually touching the DOM, but the one part where we do is when we mount the component to the page.

In our project directories, we have this file called index.html. This is where React mounts our code to the page.

```html
<div id = "main">
    <!-- This is where our React app will go -->
</diV>
```

However, in order to actually render the components to the page, we need to import something new: this new file called ReactDOM.

The reason why we need the second package is because React can be used for a number of things. It can be used to build Android and iOS apps, and even a canvas.

In our case however, we're building an application for the web, so we'll be rendering out to the DOM. 

```javascript
import React from 'react';

//This is our new import.
import { render } from 'react-dom';

class StorePicker extends React.Component {
    render() {
        return <p>Hello!</p>
    }
}

//render(element to be rendered, mounting point)
render(<StorePicker />, document.querySelector('#main'))
```

##The big picture of organisation


*****THIS IS WRONG!!!********


React is a strange mix between new and old. On the one hand, it uses the most modern Javascript practices you can get. On the other, it takes inspiration from ideas on building software that have been around for decades.

One of those old pieces is organisation.

In older class-based languages like Java, each file is only allowed to have one class. That class has to match the file name.

If you create a class called User, you have to make your file called User.java

The idea is by naming your file like the class, you keep your application clean and straightforward to navigate.

The same idea is present in React. The only difference is that React doesn't force this rule upon you. You could technically have three or four classes in your files and not feel the problems associated with it.

However, software projects are complicated. Having one class per file might make things more tedious, but saves you lots of mental headroom.

So a good way to think about React projects is a series of files with a single class (or component) in them.

(add a file structure)

src
    -> components
        -> StorePicker.js

One of the benefits of this approach is you can clearly visualise what an app does very quickly. Even large apps are simple from a bird's eye view.

The only downside is the crazy amount of imports you might have to do to link things together.

#Linking Components together
Now that we learnt about organisation, it's time to split out all our components into different files.

(file structure)
StorePicker.js
```javascript
import React from 'react';
//no need for ReactDOM since we're not rendering anything to the DOM in this file.

class StorePicker extends React.Component {
    render() {
        return <p>Hello!</p>
    }
}

//Notice the export here. We'll export so that every other file can use the class we've created here.
export default StorePicker;
```

Wes likes to think of this as making sausages. You import your ingredients, you make your sausage, and in order to surface it you need to export it as a default from your file.

Now, let's head back up to our index file and render out our StorePicker component.

(file structure)
index.js
```javascript
import React from 'react';
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';

render(<StorePicker />, document.querySelector('#main'))
```
React Egghead.io
Tutorial 1:
React at its core, is just a library that lets you manipulate your webpage easier with Javascript.
It starts from a core assumption: you can do basically everything that HTML does in Javascript.

Here's how you add Hello World using just Javascript.

```html
<!-- Create div with an id of "root" -->
<div id="root"></div>
<script type="text/javascript">
    // 1. Create new div
    const element = document.createElementById('div');
    // 2. Set div text to "Hello World"
    element.textContent = "Hello World";
    // 3. Add new div to the root div.
    document.getElementById('root').appendChild(element);
</script>
```

The React version:

```html
<div id="root"></div>
<!-- Import React. Find these links at: https://reactjs.org/docs/cdn-links.html -->
<script crossorigin src="https://unpkg.com/react/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
<script type="text/javascript">
    //Instead of using document.createElementById, you use React.createElement(newElement, props, children)
    const element = React.createElement('div', {}, 'Hello World');
    //Render it out using ReactDOM.render(renderElement, targerElement)
    ReactDOM.render(element, document.getElementById('root'))
</script>

```
You're basically replacing words here! Instead of document~ you say React~



React itself is unopinionated. However, the community has some strong opinions about how React should be written.




Everytime you put curly braces, you're using javascript.


The hard part about learning "props" is that if you were writing without React, you'd call it something different. You'd call it message, or id or imageURL. "props" is at the end of the day, just a word we use to point to properties.
So instead of using the word "props" in your head, use something different at the start. Use "properties". Then put all your properties in there: your image URL etc.

Think of it this way:

All properties:
----------------
|message property|
----------------

```javascript


const Message = props => <div>{props.msg}</div>
const element = (
    <div>
        <Message msg="Hello World" />
        <Message msg="Goodbye World" />
    </div>
)
```
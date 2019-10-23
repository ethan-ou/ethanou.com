---
title: "CSS In Depth: A Summary"
date: 2019-10-23
linktitle: ES6
---

CASCADE:
 When declarations conflict, the cascade considers three
things to resolve the difference:
1 Stylesheet origin—Where the styles come from. Your styles are applied in conjunction with the browser’s default styles.
Inline > Stylesheet

2 Selector specificity—Which selectors take precedence over which.
ID > Class

3 Source order—Order in which styles are declared in the stylesheet.



RELATIVE UNITS:
Ems are defined by font size in that element
Rems are defined by the root font size

My default is to use rems for font sizes, pixels for borders, and ems for most other measures, especially paddings, margins, and border radius (though I favor the use of percentages for container widths when necessary).

rems for font sizes: gets scaled to the root element, reliably stays the same no matter what other elements do.
ems for paddings, margins: gets scaled to text size, so that bigger text equals more margins/padding (which is what you want)
pixels for borders: you don't want borders that scale.


Using calc() for font size:
:root {
 font-size: calc(0.5em + 1vw);
}

css variables
:root {
 --main-font: Helvetica, Arial, sans-serif;
}
p {
 font-family: var(--main-font);
}

note: you can easily change css variables using js

Be aware that any declaration using var() will be ignored by old browsers that
don’t understand it. Provide a fallback behavior for those browsers when possible:
color: black;
color: var(--main-color);


Don't use units for line height:
When you use a unitless number, that declared value is inherited, meaning its computed value is recalculated for each inheriting child element. This will almost always
be the result you want. Using a unitless number lets you set the line height on the
body and then forget about it for the rest of the page, unless there are particular
places where you want to make an exception.


LAYOUT



Margin vs Padding
Margin is on the outside of block elements while padding is on the inside.

Use margin to separate the block from things outside it
Use padding to move the contents away from the edges of the block.

To me, the biggest difference between padding and margin is that vertical margins auto-collapse, and padding doesn't.
Consider two elements one above the other each with padding of 1em. This padding is considered to be part of the element and is always preserved.

Now replace that padding with 1em margin. Margins are considered to be outside of the element, and margins of adjacent items will overlap.


box-sizing: use border-box
Imagine if you want to size two pieces of content 70% and 30% of the page respectively. If you use content-box (the default), the percentages will be too big, because it doesn't count padding and borders. If you use border-box, it counts all of this, meaning 70/30% works! border-box leads to more consistent styling.

Put this code at the top of your stylesheet:
:root {
 box-sizing: border-box;
}

*,
::before,
::after {
 box-sizing: inherit;
}


Ways to position elements:
For percentage of screen: use viewport units vh, vw
For multi-column layouts: css grid or flexbox




Ways to size an element:
Two properties that can be immensely helpful are min-height and max-height.
Instead of explicitly defining a height, you can use these properties to specify a minimum or maximum value, allowing the element to size naturally within those bounds.


Vertical centering:
Can you use a natural height container? Apply an equal top and bottom padding to the container to center its contents.
 Do you need a specific height container, or do you need to avoid using padding? Use display: table-cell and vertical-align: middle on your
container.
 Can you use flexbox? If you don’t need to support IE9, you can center your
content with flexbox. See chapter 5.
 Is the inner content only one line of text? Set a tall line height equal to the
desired container height. This will force the container to grow to contain the
line height. If the contents aren’t inline, you may have to set them to inline
-block.
 Do you know the height of both the container and the inner content? Center
the contents with absolute positioning. See chapter 7. (I only recommend this
when all approaches mentioned here fail.)
 What if you don't know the height of the inner element? Use absolute positioning in conjunction with a transform. See chapter 15 for an example. (Again, I
only recommend this if you've ruled out all other options.)


Display:
none: removes element from page
block: starts a new line (like <p> or <div>)
inline: continues on same line (like <a>), cannot accept width or height, top-bottom margin
inline-block: starts from new line + can accept width and height

Always use a universal border-box fix for predictable element sizing.
 Avoid explicitly setting the height of an element to avoid overflow issues.
 Use modern layout techniques like display: table or a flexbox to produce columns of equal height or to vertically center content.
 If your margins behave oddly, take steps to prevent margins from collapsing.
 Consider using the lobotomized owl selector on your page to globally apply
margins between stacked elements.



LAYOUTS


Floats:
 A float pulls an element (often an image) to one side of its container, allowing the
document flow to wrap around it (figure 4.1). This layout is common in newspapers
and magazines, so floats were added to CSS to achieve this effect.


Classic layout:
This layout is common for centering content on a page. You can achieve it by placing
your content inside two nested containers and then set margins on the inner container to position it within the outer one (figure 4.5).



Do you still need to know how to use floats?
Flexbox is rapidly supplanting the use of floats for page layout. Its behavior is straightforward and often more predictable for new developers. You might find yourself asking whether you need to know about floats at all. Has CSS moved past this?
With modern browsers, you can certainly go a lot further without floats than you could
in the past. You can probably get by without floats altogether. But if you need to support Internet Explorer, you may not want to let go of them just yet. Flexbox is only supported in IE 10 and 11, and even then it has a few bugs. If you don’t want to worry
about browser bugs or you need to support older browsers, floats could be a better
option.
If you’re supporting an older codebase, it likely uses floats; you’ll need to know how
they work in order to maintain it. Additionally, float-based layouts often require less
markup, where newer methods require the addition of container elements. If you have
limited control over the markup you’re styling, floats might be more capable of doing
what you need.
And floats are still the only way to move an image to the side of the page and allow
text to wrap around it.


Grid Systems:
Image you build a full page layout, with each element having a percentage on the screen. One element is at 50% width. Another is 50%. If you want to add extra elements, you'd need to copy and paste another 50% width. If you want three columns, you'd have to change all the widths to 33%.

Here is where grid systems come in. It's a popular way of making code reuse easy for layouts. 
A grid
system is usually defined to hold a certain number of columns in each row; this is usually 12, but that can vary. 

Twelve is a good number of columns because it is divisible by two, three, four, and six,
which provides a lot of flexibility. This makes it easy to do a three-column layout
(three, 4-column elements) or a four-column layout (four, 3-column elements). You
can also build asymmetrical layouts, such as a 9-column main element and a 3-column
sidebar.

The markup for this example is straightforward. Each row has a row container div
and inside that you’ll place a div for each column element with a column-n class
(where n is the number of columns across the grid):

```html
<div class="row">
 <div class="column-4">4 column</div>
 <div class="column-8">8 column</div>
</div>
```

In a 12 column layout, you can make all your 50% page width containers turn into the class "column-6" (6/12 = 50%).

```css
.column-1 { width: 8.3333%; }
.column-2 { width: 16.6667%; }
.column-3 { width: 25%; }
.column-4 { width: 33.3333%; }
.column-5 { width: 41.6667%; }
.column-6 { width: 50%; }
.column-7 { width: 58.3333%; }
.column-8 { width: 66.6667%; }
.column-9 { width: 75%; }
.column-10 { width: 83.3333%; }
.column-11 { width: 91.6667% }
.column-12 { width: 100%; }
```
One thing your grid system still lacks is a gutter between each column. Let’s add those
next, along with a couple other details. After you finish, your page should look like figure 4.19.
 You can create gutters by adding left and right padding to each grid column. By
adding this to the grid system instead of individual components, like the media object,
you’ll be able to re-use the grid over and over on other pages without worrying about
gutters again.

```css
[class*="column-"] {
 float: left;
 padding: 0 0.75em;
 margin-top: 0;
}

```

FLEXBOX:

Flexbox principles
Applying ```display: flex``` to an element turns it into a flex container. Its direct children turn into flex items. 
Default: flex items align side by side, left to right, all in one row. Container fills the available width like a block element. Flex items all the same height.

A flex container asserts control over the layout of all the elements within.


You can also use display: inline-flex. This creates a flex container
that behaves more like an inline-block element rather than a block. It flows
inline with other inline elements, but it won’t automatically grow to 100%
width. Flex items within it generally behave the same as with display: flex.
Practically speaking, you won’t need to use this very often.

margin: auto
When you use auto margins in flexbox, it doesn't just center something horizontally. It also centres vertically. Put the flex property on the outside, and an element on the inside. Use margin: auto for vertical height. 


Building a flexbox nav bar:
You'll need: 1x flex container, multiple links.

```html
<!-- Flex Container (Add display: flex here) -->
<ul class="site-nav">
<!-- Links -->
 <li><a href="/">Home</a></li>
 <li><a href="/features">Features</a></li>
 <li><a href="/pricing">Pricing</a></li>
 <li><a href="/support">Support</a></li>
 <li class="nav-right"><a href="/about">About</a></li>
</ul>
```

In the examples, you’ll
apply the menu item padding to the internal <a> elements, not the <li> elements.
You’ll need the entire area that looks like a menu link to behave like a link when the
user clicks it. Because the link behavior comes from clicking the <a> element, you
don’t want to turn the <li> into a big nice-looking button, but only have a small clickable target area (the <a>) inside it.

Add padding.

Flex property:
Allows you to divide the page easily.
flex 2 + flex 1 = 66.6% + 33.3%

```css
.column-main {
 flex: 2;
}
.column-sidebar {
 flex: 1;
}
```

 The flex property is shorthand for three different sizing properties: flex-grow,
flex-shrink, and flex-basis. In this listing, you’ve only supplied flex-grow, leaving
the other two properties to their default values (1 and 0% respectively). 

flex: 2 is equivalent to flex: 2 1 0%.

flex-grow: 2;
flex-shrink: 1;
flex-basis: 0%;


Flex-basis:
a sort of starting point for the size of an element—an initial
“main size.” 

Once this initial main size is established for each flex item, they may need to grow or
shrink in order to fit (or fill) the flex container along the main axis. That’s where
flex-grow and flex-shrink come in.

flex-grow:
Once flex-basis is computed for each flex item, they (plus any margins between
them) will add up to some width. This width may not necessarily fill the width of the
flex container, leaving a remainder (figure 5.8).
 The remaining space (or remainder) will be consumed by the flex items based on
their flex-grow values, which is always specified as a non-negative integer. If an item
has a flex-grow of 0, it won’t grow past its flex basis. If any items have a non-zero
growth factor, those items will grow until all of the remaining space is used up. This
means the flex items will fill the width of the container (figure 5.9).

Declaring a higher flex-grow value gives that element more “weight”; it’ll take a larger
portion of the remainder. An item with flex-grow: 2 will grow twice as much as an
item with flex-grow: 1

Favor the use of the shorthand flex property instead of individually
declaring flex-grow, flex-shrink, or flex-basis. Unlike most shorthand
properties, these aren’t set to their initial values when omitted. Instead, the
shorthand assigns useful default values for any of the three that you omit:
flex-grow of 1, flex-shrink of 1, and a flex-basis of 0%. These are most
commonly what you’ll need.

flex-shrink
The flex-shrink property follows similar principles as flex-grow. After determining
the initial main size of the flex items, they could exceed the size available in the flex
container. Without flex-shrink, this would result in an overflow (figure 5.12).

The flex-shrink value for each item indicates whether it should shrink to prevent
overflow. If an item has a value of flex-shrink: 0, it will not shrink. Items with a
value greater than 0 will shrink until there is no overflow. An item with a higher value
will shrink more than an item with a lower value, proportional to the flex-shrink
values.

flex: none
items grow to their natural width

flex: 0 0 300; flex: 1
300px left element, rest of the scren right element

flex-direction
Another important option in flexbox is the ability to shift the direction of the axes.
The flex-direction property, applied to the flex container, controls this. Its initial
value (row) causes the items to flow left-to-right, as you’ve done. Specifying flexdirection: column causes the flex items to stack vertically (top to bottom) instead.
Flexbox also supports row-reverse to flow items right to left, and column-reverse to
flow items bottom to top (figure 5.14).

flex-wrap
This specifies whether flex items
will wrap on to a new row inside
the flex container (or on to a new
column if flex-direction is
column or column-reverse).

justify-content
Controls how items are positioned along the main axis.

align-items
Controls how items are positioned along the cross axis.

align-content
If flex-wrap is enabled, this controls the spacing of the flex rows
along the cross axis. If items
don’t wrap, this property is
ignored.

align-self
Controls how the item is
aligned on the cross axis. This
will override the container’s
align-items value for specific item(s). Ignored if the
item has an auto margin set
on the cross axis.


A couple of things to be aware of
Flexbox is a huge step forward for CSS. Once you’re familiar with it, you might be
tempted to start using it for everything on the page. I caution you to trust the normal
document flow and only add flexbox where you know you’ll need it. There’s no reason to avoid it; but don’t go crazy treating everything as a nail to its hammer.


Flexbugs
The implementation of flexbox isn’t perfect in all browsers, especially IE10 and IE11.
Flexbox works fine in most cases, but there are some bugs you might encounter if you
have the wrong circumstances on your page. Always be sure to test your flexbox implementations in any older browsers that you want to support.
 Rather than spend a lot of time discussing bugs you may or may not ever need
to deal with, I’ll instead refer you to a great resource called Flexbugs. Visit it at
https://github.com/philipwalton/flexbugs. This is an up-to-date list of all known flexbox browser bugs (14 total at the time of writing). It explains exactly what circumstances cause them and, in most cases, offers a workaround to deal with the bug. If you
ever find your flexbox layout behaving strangely in a particular browser, visit this page
and see if you’ve encountered one of these browser bugs



Full-page layout
One of the interesting things about flexbox is how the flex sizes are calculated based
on the number of flex items and the amount (and size) of content within them. This
can lead to an odd behavior if your page is large or is loaded over a slow connection.
 As the browser loads content, it progressively renders it to the screen, even as it
continues to download the remainder of the page. Assume you have a three-column
layout, built using a flexbox (flex-direction: row). If the content for two of these
columns loads, the browser might render them before it loads the content for the
third column. Then, when the rest of the content loads, the browser recalculates the
sizes of each flex item and renders the page again. The user will see a two-column
layout momentarily, then the columns will resize (perhaps drastically), and the third
column will appear.
 Jake Archibald, a developer advocate for Google Chrome, has written about this at
https://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/. You can see examples of this happening in that article. One suggestion he gives is to favor grid layout
for the full page layout (which I cover in the next chapter).




When to use flexbox vs css Grid
Jen Simmons: Flexbox is useful for lining lots of things up in one direction. Think of it as a bunch of boxes in an infinitely long line, that wraps. The browser only thinks about one dimension at a time, and doesn't calculate in two directions. It has no regard for other rows.
Grid wants to line things up in two directions. It looks at rows and columns at the same time. Grid can also overlap items--something that flexbox can't do.




What to do about older browsers?
Jen Simmons: I think we get stuck with the idea that we can't use new features in old browsers, or where 92% of people can use it. I think we should have 100% coverage, but we don't want to wait forever to use something new.

How to write things for every use case, every browser and every device:
The most popular tool: caniuse.com
Sometimes people think that they can't use css properties if they're not 100% supported. But that's rare! Only 15-20 year old css properties are supported that way. 

Remember, your project isn't always for everyone in the world. Maybe 99% of your users have support for a feature, that's only globally supported for 70%. 
In caniuse, you can see what the usage is in different parts of the world. 

This data is also not perfect. 

sometimes it's a small feature that's not fully supported.

What happens if something isn't supported?
It's the same as if it's crossed out.

In some browsers, it will appear different. And that's okay. It's okay if some browsers don't display the same thing. In fact they never ever do!

CSS keeps rendering things even if you have errors or things it can't read. It skips over problems. 

So even if a browser doesn't support something, try it! Often, the user doesn't even know there's a problem. Usually, it's completely functional and usable. People can read it regardless and it might still be a great experience.

To test for old browsers, comment out the lines with the new features and test it out. If it's not quite the experience you're after, set fallback properties the browser can use. Make sure to put the fallback properties BEFORE the new properties. 

There's no reason to keep all the new browsers hostage for so many users, just because ie8 and 9 doesn't support it. The important thing is that people can use it. 

One way to help this is by using feature queries:
@supports

This is really useful for css grid:

```css
/* Simplified layout for older browsers */

@supports (display: grid) {
    /* Code for newer browsers */
}

```

Checking if the website works with pure html:
It's great for if someone uses a screenreader, or if someone uses an extension that supports better reading like pocket or readability or likes to save webpages.
You want to make sure your markup or HTML is really solid so that people can read it even if they don't have javascript.
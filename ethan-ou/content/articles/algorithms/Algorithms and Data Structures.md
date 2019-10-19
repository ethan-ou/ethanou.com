---
author: "Ethan Ou"
date: 2014-09-28
linktitle: A Beginner's Guide to Algorithms
next: /tutorials/github-pages-blog
prev: /tutorials/automated-deployments
title: A Beginner's Guide to Algorithms
weight: 10
---

An algorithm is a fancy term to describe the actions a computer needs to take to achieve a specific goal. Generally, any small and vital task a computer needs to do has been sped up by looking at the task through algorithms.

Take your file system for instance. When you go into the files on your computer, you'll have the option of sorting the files in alphabetical order, in order of the date created and so on. There are hundreds of ways to sort these files.

This isn't a big deal if your computer has ten files on it. But what if your computer has a hundred files? A thousand? What if the person using the computer doesn't know how to use folders, and dumps ten thousand files on their C:/ drive?

Even though it might sound crazy, problems like this happen in computing all the time. The World Wide Web for instance, has an estimated 1.7 billion websites. If you kept all these websites in the same folder, your computer would take the rest of your life to sort through all these files.



As we'll see later on, there are plenty of tricks that 


In general however, you're not going to see this amount of scale unless you work at a large company dealing with hundreds of thousands of customers a day. So when else would algorithms be useful?



Humans learn best when they are faced with real situations they need to 




Human beings have the option of fumbling to their destination. 

What's the point in learning algorithms?

The vast majority of your time as a creator of software and websites will be spent on design. You'll be designing the way your application runs, the way data flows through the system, the technology you use and the 

Very rarely will you need to ever *use* algorithms in your work.





Think about your everyday life.
You wake up, make breakfast and start your day knowing you want to be *productive*. You want to get a lot of work done.
Or maybe you're more of a wander and like taking your time to get everywhere.

We want computers to be fast and efficient so that they can be great tools for us to use. 
And just like us, for computers to be productive they need two things:
1. A way of completing a task
2. A way of organising the information that goes through them.

These go hand in hand. The more organised a computer's inner world (or storage) is, the more productive they can be.

First, some terminology:

## Productivity hacks for computers are called algorithms.
The thing that determines how productive a computer is at doing *work*--including sorting your files, finding things from your hard drive or displaying the internet, are your computer's productivity hacks.

In your day to day life, you know you've only got a set amount of time to do everything. So the *way* you do something matters.

If you search through a library, you want to know how to find the book you're looking for.

If you want to make a pasta dish, you want to know how to cook the pasta.

In short, computers use algorithms to answer the question: how do I accomplish this task?



## Organisational systems for computers are called Data Structures
Data structures on the other hand are the computer's organisation systems.
Think about your to-do list, or your diary. This is how you store the notes you need for tomorrow. You might throw all these notes on a desk, or keep it in a notebook. 

Computers have the same idea. The way we store information in a computer determines how fast we can access it. If you 

In short, computers use data structures to answer the human question: how do I store these ideas and thoughts so that I can use them later?


These are just labels for these complicated but interesting ideas. Don't take the names too seriously.

## Some notes before we start
The hardest thing about learning how computers organise and use information (i.e. algorithms and data-structures), is it's easy to miss the forest for the trees. These ideas are so general, it's easy to miss how they relate to everyday situations. 

What I want to stress however is these ideas are everywhere. 
Whenever you write something down on a piece of paper, your action can be thought about using the *lens* of computing--as a problem that can be replicated within a computing machine.

They're rarely found in the natural world of course. The human world and the world of nature is complicated and messy. But if we take apart natural phenomena and look at models of the world, we'll see many of these structures spring to life.



# Part 1: Finding a problem worth solving
Computers are really good once you've figured out what to do. You can tell a computer what you want them to do, and they'll do it for you perfectly every time.

The hard part about computing is finding a problem worth solving--and worth solving well.

When it comes to your own life, you'll probably know that working on the 

Most of the time when you're writing code or doing something with a computer, you might not need 


But if you want to do something *difficult*: build a way of giving people the fastest route from one location to another, find something from a list of 50,000 items, compress video footage in real time, or build a fast operating system that having a background in these concepts really starts to show.

Scale is also a big factor in whether this knowledge is useful to you. Data structures and algorithms are great once you've narrowed down the problem you're trying to solve, and you want to do it at scale. It's at these larger projects where speed becomes critical. A slightly faster method of searching something might save millions of dollars if you're a big software company.

They're not so useful when you're still asking the business/humanitarian question: what's a problem worth solving? Or the lighter personal question: what's a project you'd be excited to take on?

So to start off, here's a big-picture overview of what problems Algorithms and Data Structures solve.

Context -> Human Problem -> Computing Problem -> Specific Computing Problem

## The real-world context of Algorithms and Data Structures



# Part 2: Algorithms

## Searching

From Grokking Algorithms
"Imagine you're searching for a person in a phone book. How would you do it?
Their name starts with K."

One of the ways you could do it is by searching through every name in the phone book. You start at A and you go all the way to the K's.

But the problem: you have 100 people between A and K. If you took half a second to get through a name, you'd take almost a minute.

How about 1000 people? You'd take 8 minutes.

Imagine what happens when this phone book gets large. Your whole city's phone numbers are in this book, and between A and K there are 300,000 phone numbers.

If you stayed at the same speed, it would take you 104 days.

And even if you sped up to 0.1 seconds per number, it would still take you almost 21 days.

Clearly, it's not how fast you do something but *what* you do that matters.

Round 2:
Okay, it's a book. You know mentally that K in a phone book is usually somewhere in the middle.

So you can do something better than just going through each name. You flip to the middle. If 





An even faster method of searching however is to add tabs for every letter of the alphabet *beforehand*.

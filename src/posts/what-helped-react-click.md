---
title: 'The information that helped React "click" for me'
description: "As I'm learning React, with a background in using Vue, there was one piece of information that really gave me that 'eureka' moment"
date: '2020-08-24'
draft: false
image: '/images/posts/sparkler_in_water.jpg'
---

I know, the title is a bit click-baity. It was intentional though. For this post, I really feel it's important to read the post because I want to explain the why, as well as the what.

I'll get right to it though. The piece of information that really made React click for me as I've been learning it was:

> React is just Javascript.

Sounds obvious right? But it wasn't! I'm coming from a background of using Vue (which I've really enjoyed using over the last 2+ years and still do, I'm not here for a which one is best argument). And while Vue is a Javascript framework, a lot of what you learn is sort of Vue specific. Component structure is specific to Vue with data, computeds, methods etc, and in your template you have all the different bindings. With React, while there are specifics of React you need to understand, at it's core it really functions as an extension of Javascript in a lot of ways.

Let's use a component that outputs a list of items as an example.

## In Vue...

```javascript
<template>
    <div v-for="person in people">
        <div :key="person.name">
            <p>
                Name: {{person.name}}
            </p>
            <p>
                Age: {{person.age}}
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";

    export default Vue.extend({
        data: {
            people: [
                {name: "Sarah", age: "35"},
                {name: "Katy", age: "35"}
            ]
        }
    });
</script>
```

## In React...

```javascript
import React from 'react';

export default function People() {
  const people = [
    { name: 'Sarah', age: '35' },
    { name: 'Katy', age: '35' },
  ];

  return (
      <>
      {
        people.map(person => {
            return (
                <div key={person.name}>
                    <p>Name: {person.name}</p>
                    <p>Age: {person.age}</p>
                </div>
            )
        });
      }
      </>
  );
}
```

## Which is easiest?

What's "easy" is subjective. I think though in this case, if you already know some Javascript, the React example is instantly understandable. With the Vue example, you need to know about the data property and how to structure it and what the binding is to do a for loop in the template. In the React example, if you're starting with some Javascript knowledge the only additional bit there is the JSX syntax.

This is obviously a simplified example. While React doesn't have the different bindings, there are key things about JSX that you need to understand for more complicated components. But that's a post for another day!

## What has been useful so far?

I read [this great series of posts on dev.to for getting started in React](https://dev.to/codeartistryio/want-to-learn-react-in-2020-here-s-the-blueprint-to-follow-2jdd) that I would definitely recommend working your way through that helped a lot of things click for me.

[This Frontend Masters course](https://frontendmasters.com/courses/complete-react-v5/) was also a great intro to lots of React concepts.

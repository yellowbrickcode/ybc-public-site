---
title: 'Using the State Pattern to Improve Branching'
description: 'A neat pattern to avoid a tangle of if/else logic'
date: '2016-12-16'
draft: false
image: '/images/posts/complicated-switches.jpg'
---

When dealing with an object that has state, it's easy to get yourself into a tangle of `if/else` branches of logic. When I refer to "improving" in the title, what I suppose I'm really referring to is making your code more object oriented, and therefore ending up with easier to understand code. This isn't just about writing better code though, it's about having a better understanding of the functionality you are trying to achieve by writing the code.

I'm going to give a really simplified example using boiling a kettle as the example action, with cold, boiling and boiled as the 3 states our kettle could be in.

First of all, let's look at the example that would require complicated branching logic. Remember this example is **very** simplified so it may not seem so complicated here but in a less simplified context, it would be. These code samples are in C# but the principles here apply to any OO language.

Let's look at our "Branchy" kettle.

```csharp
public class BranchyKettle
{
    public string Brand { get; set; }
    public KettleState State { get; set; }

    public BranchyKettle()
    {
        State = KettleState.Cold;
    }

    public void Boil()
    {
        if (State != KettleState.Boiling && State != KettleState.Boiled)
        {
            // Code here would start boiling of Kettle
            State = KettleState.Boiling;
        }
    }

    public void CheckForBoiled()
    {
        if (State == KettleState.Boiling)
        {
            // Kettle is boiling, is it finished?
            // Let's fake the kettle boiling...
            var random = new Random();
            if (random.Next(100) % 3 == 0)
            {
                State = KettleState.Boiled;
            }
        }
    }
}

public enum KettleState
{
    Cold,
    Boiling,
    Boiled
}
```

As you can see, in the method to `Boil` and `CheckForBoiled`, there are `if` statements to check the current state of the Kettle to determine if the action can be carried out.

Now let's look at the example that doesn't require this complicated branching logic.

Instead of using an enum to specify the state, we are going to make each state an object that implements an interface. Obviously what I'm about to do is overkill for this simplified example, I'm just trying to get the theory across.

So first let's see our new `Kettle` object.

```csharp
public class Kettle
{
    public string Brand { get; set; }
    public IKettleState State { get; set; }

    public Kettle()
    {
        State = new Cold();
    }

    public void Boil()
    {
        State = State.Boil();
    }

    public void CheckForBoiled()
    {
        State = State.CheckForBoiled();
    }
}
```

As you can see, there's much less code in this one! Now when we call `Boil` and `CheckForBoiled`, we pass the responsibility of deciding what the `Kettle` can do onto the state object. First, let's have a quick look at the `IKettleState` interface.

```csharp
public interface IKettleState
{
    IKettleState Boil();
    IKettleState CheckForBoiled();
}
```

`IKettleState` is a simple interface that just specifies that each state must handle the actions of `Boil` and `CheckForBoiled`. So let's have a look at the more interesting bit. How do each of the states implement this interface.

First up, the `Cold` state.

```csharp
public class Cold : IKettleState
{
    public IKettleState Boil()
    {
        // Code here would start boiling of Kettle
        return new Boiling();
    }

    public IKettleState CheckForBoiled() => this; // Kettle isn't boiling, so can't be boiled
}
```

As you can see, this code is very easy to read! When you call `Boil` on a `Kettle` in the `Cold` state, it will start boiling and return `Boiling` as the new state. If you call `CheckForBoiled` it's just going to keep returning `Cold`, because it's never going to go straight from `Cold -> Boiled` without first `Boiling`.

Here is the `Boiling` state.

```csharp
public class Boiling : IKettleState
{
    public IKettleState Boil() => this; // Kettle is already boiling, can't be boiled again

    public IKettleState CheckForBoiled()
    {
        // Let's fake the kettle boiling...
        var random = new Random();
        if (random.Next(100) % 3 == 0)
        {
            return new Boiled();
        }
        return this;
    }
}
```

As you can see in this one, we're faking the `Kettle` being boiled but when it is boiled, it will return the `Boiled` state. Let's look at `Boiled`.

```csharp
public class Boiled : IKettleState
{
    public IKettleState Boil() => this; // Kettle is already boiled
    public IKettleState CheckForBoiled() => this; // Kettle is boiled
}
```

The `Boiled` state is the simplest implementation of the three because it's the end of the road really (if you forget about the fact the `Kettle` will gradually return to `Cold` anyway).

I know this example is very simplified, but my reason for writing this post is because I used this pattern when writing code to model a domain that had an appointment at its core. As I mapped out the planned flows for the appointment, it turned out that the appointment had 9 possible states. There were also rules about what path an appointment has to follow. For example, an appointment that has been accepted by Person A can not then be rejected by Person A, it must be cancelled. An appointment also can't be rejected if it's already been cancelled. These are just a couple of the rules required to ensure the flow of an appointment was correct. There are so many possible states and rules around the appointment, that the appointment object is covered by 73 unit tests to make sure all the outcomes are covered and handled correctly.

If I'd written the logic in this case like the first example above, there would have been a few downsides:

- My code wouldn't have been as readable and easy to understand for other people
- My code would have been difficult to maintain
- My code would have been difficult to cover well with unit tests
- If a new requirement came up, it would have required existing code to change
- I would not have gained such a clear and thorough understanding of the logic surrounding appointments

It's important not to underestimate the last bullet point. It wasn't until I started writing my code in the structure of the second example that I really started to understand the flow of the appointment. As a result I now not only have clean, readable and easy to understand code, I was also able to create a very simple flow diagram to help the non-coders understand the process.

What do you think? Do you ever structure your code like this to avoid complicated branching logic? Would you?

---
title: "Why Fusion Drives and Windows Dont Mix"
description: "Figuring out why Bootcamp on a fusion drive was so slow"
date: 2018-11-11T11:56:53Z
publishdate: 2017-07-22T11:56:53Z
draft: false
image: "coffee-1283672_1280.jpg"
meta_title: "Why Fusion Drives and Windows Dont Mix"
meta_description: "Figuring out why Bootcamp on a fusion drive was so slow"
---
My machine at work is a late 2015 model iMac, bought in August 2016. It's got a decent spec. The main bits, 3.3GHz i7 processor, 16GB RAM and 1TB Fusion Drive. That should definitely cover my requirements for development work, shouldn't it?

I spend 99.9% of my time in Windows. Due to my machine having 16GB RAM (which is what I want Windows to have to help out with memory hungry apps like Chrome, Slack and Visual Studio), it's an easy decision to install Windows in a Bootcamp partition rather than on a VM where I would have to share resources with OSX. 

Fairly quickly after getting my iMac set up, I noticed that it was a bit slow. For quite a while I just put this down to me being spoiled by the SSD in my Macbook Pro that I use at home. As the months have gone on and the requirements for my work have gotten more intense, it's started to get to the point where I often find it unusable. I tend not to shut my machine down, instead just putting it to sleep. After a week of this, it takes around 25 minutes to close everything, reboot and open everything back up again. Even if it's only been on for one day, it can still take around 15 to 20 minutes.

I booted into OSX the other day for the first time in around 10 months and noticed it was running much quicker, close to the performance of OSX on my own Macbook Pro. I decided it was time to research and finally I found the reason why I regularly want to throw my machine out of the window I sit next to. 

**When you install Windows on a Bootcamp partition on a Fusion Drive, Boot Camp Assitant creates the Windows partition on the disk drive instead of the SSD.**

And here it is straight from Apple - https://support.apple.com/en-gb/HT201456 - see the 8th FAQ down (at the time of writing).

In a way, I'm happy because I at least know that it's not just me being impatitent! I'm also a bit annoyed though. Firstly with myself for not doing any research into this before we went into the Apple Store to buy the machines. Secondly with the Apple Store who spent around an hour discussing the businesses requirements with us, who it seems weren't informed enough to know or understand, and warn me of the downsides of installing Windows in a Bootcamp parition on a Fusion Drive (which I had mentioned was my plan during the discussions). 

So hopefully someone finds this because they're doing what I should have done, **research**!

My personal opinion, if you're thinking of installing Windows in a Bootcamp partition on a Fusion Drive for full time dev work (or anything moderately intensive), don't do it. Go for the SSD. It runs like an absolute dream on my Macbook Pro. 
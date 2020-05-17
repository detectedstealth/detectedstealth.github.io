---
title: Swift Queues
author: Bruce Wade
date: 2020-05-02 08:44:00-0700
categories: [Algorithms & Data Structures, Swift]
tags: [swift]
---

Now that we have looked at [Linked Lists](/posts/swift-linked-lists/) which are efficent at adding and removing elements from the head/tail they make a good data structure for queues.

Queues are used a lot when developing efficent software. If you ever used GCD or Operations to handle concurency you are leveraging queues.

Queues are essentially a FIFO (first in first out), for example when going to renew a drivers license you normally take a number go sit down until your number is called. Where all numbers are called in order. It is important to consider the fact just because queues are dequeued in order in some situations like concurency it doesn't mean the jobs removed will be completed in the order they have been removed. 

We are going to reuse the Linked List that was created in that post to make our queue.

> Coming soon...
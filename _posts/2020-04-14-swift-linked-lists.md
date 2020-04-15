---
title: Swift Linked Lists
author: Bruce Wade
date: 2020-04-15 14:22:00-0700
categories: [Swift, Algorithms & Data Structures]
tags: [swift]
---

Now that we have looked at [stacks](/posts/swift-stacks/) which are efficent at adding and removing elements from the end/top of the stack, lets now look at Linked Lists which are efficent at add/removing elements from the beginning/front.

For stacks we used the standard library `Aarry` for storage. For Linked Lists there we need to build our own storage class. Linked Lists work with nodes, where a `Node` can point to another `Node` next to it and if there is no `Node` next we know we are at the end of the Linked List.

Let's first look at creating our `Node` structure which is pretty simple it contains a generic `Value` and a reference to the next `Node` on the right of it. The initializer sets the required value and optionally sets the next `Node`.

```swift
class Node<Value> {
    var value: Value
    var next: Node?
    
    init(value: Value, next: Node? = nil) {
        self.value = value
        self.next = next
    }
}
```

Now we can use this `Node` structure to create a linked together list of `Node`s. Its important to remember the `Value` can be of any built in or custom type. We will just use `String`'s as the `Value` type in this example.

```swift
var headNode = Node(value: "Node 1")
var node2 = Node(value: "Node 2")
headNode.next = node2

// Changing up the order to show how to set
// next on initalization
var node4 = Node(value: "Node 4")
var node3 = Node(value: "Node 3", next: node4)

node2.next = node3
```

Now how would we go about printing all the nodes in the list? We know if next is nil that we are at the end of the list. So we can first create an optional `Node` to the headNode. Next we can use a while loop with the condition of current node not being nil. Before we print we need to unwrap our current node so we can print out the value directly. After printing we need to update the currentNode to the next node in our list. Because we will be printing a few times in this example lets create a `func`tion to handle this.

```swift
// Generic function used to print all the Node's that are linked together.
func printNodeList<Value>(_ headNode: Node<Value>?) {
    var currentNode: Node? = headNode
    while currentNode != nil {
        if let current = currentNode {
            print(String(describing: current.value), terminator: current.next != nil ? " -> " : " -> nil ")
            currentNode = current.next
        }
    }
    print("\n")
}

printNodeList(headNode)
```

The while loop will print out the following:

```
Node 1 -> Node 2 -> Node 3 -> Node 4 -> nil 
```

We have seen how to link Nodes together now let's add a `Node` to the font of the list. It is actually simple we just set the new `Node`'s next to the first `Node` which in our example is called headNode. Than moving forward we would use the new `Node` instead of the head `Node` when looping through the list.

```swift
var node5 = Node(value: "Node 5", next: headNode)
printNodeList(node5)
```

This would print:
```
Node 5 -> Node 1 -> Node 2 -> Node 3 -> Node 4 -> nil 
```

Greate we have seen how we can add `Node`'s to the front of the list. What if we wanted to append them to the end of the list? This would require us looping through the list until we find a next that is nil, this will indicate we have found the end and we can update the next to the new `Node` we want to add.

```swift
var node6 = Node(value: "Node 6")
var currentNode: Node? = node5
var targetNode = node5
while currentNode != nil {
    if let current = currentNode {
        if current.next == nil {
            targetNode = current
        }
        currentNode = current.next
    }
}
targetNode.next = node6
printNodeList(node5)
```

This would print:
```
Node 5 -> Node 1 -> Node 2 -> Node 3 -> Node 4 -> Node 6 -> nil 
```

There are more feature we would like to have such as inserting after a node, removing the first/last or after a given `Node`. I'm sure you have noticed the current way we have been doing this while possible it requires a lot of work and manual managment. This can become tedious and lead to errors.

This is where Linked Lists come in, which are basically a management structure that keeps track of the first and last `Node`'s in a list, as well as provide all the functions for adding and removing `Node`'s.

First we will setup the basic structure than go over each of the features in order. The basic class needs a head `Node` which points to the front of the list, and a tail `Node` that points to the end of the list. Our Linked List will also be generic so it supports any value. In the definition of the structure there will be placeholder comments were the functions for each feature should be added. however to save space I will only show the function alone.

```swift
struct LinkedList<Value> {
    var head: Node<Value>?
    var tail: Node<Value>?
    
    init() {}

    // TODO: Check for empty list
    // TODO: Push Node to beginning of the list
    // TODO: Append Node to end of list
    // TODO: Insert Node after another Node in list

}
```

It would be nice to 

```swift
var isEmpty: Bool {
    head == nil
}
```

```swift
mutating func push(_ value: Value) {
    copyNodes()
    head = Node(value: value, next: head)
    if tail == nil {
        tail = head
    }
}
```

```swift
mutating func append(_ value: Value) {
    copyNodes()
    guard !isEmpty else {
        push(value)
        return
    }
    
    tail?.next = Node(value: value)
    tail = tail!.next
}
```

```swift
func node(at index: Int) -> Node<Value>? {
    var currentNode = head
    var currentIndex = 0
    
    while currentNode != nil && currentIndex < index {
        currentNode = currentNode!.next
        currentIndex += 1
    }
    
    return currentNode
}
```

```swift
@discardableResult
mutating func insert(_ value: Value, after node: Node<Value>) -> Node<Value> {
    copyNodes()
    guard tail !== node else {
        append(value)
        return tail!
    }
    
    node.next = Node(value: value, next: node.next)
    return node.next!
}
```

```swift
// MARK: - Removing from the LinkedList
@discardableResult
mutating func pop() -> Value? {
    copyNodes()
    defer {
        head = head?.next
        if isEmpty {
            tail = nil
        }
    }
    return head?.value
}
```

```swift
@discardableResult
mutating func removeLast() -> Value? {
    copyNodes()
    guard let head = head else { return nil }
    
    guard head.next != nil else {
        return pop()
    }
    
    var prev = head
    var current = head
    
    while let next = current.next {
        prev = current
        current = next
    }
    
    prev.next = nil
    tail = prev
    return current.value
}
```

```swift
@discardableResult
mutating func remove(after node: Node<Value>) -> Value? {
    guard let node = copyNodes(returningCopyOf: node) else { return nil }
    defer {
        if node.next === tail {
            tail = node
        }
        node.next = node.next?.next
    }
    return node.next?.value
}
```

```swift
// MARK: - COW Support
private mutating func copyNodes() {
    guard !isKnownUniquelyReferenced(&head) else {
        return
    }
    
    guard var oldNode = head else {
        return
    }
    
    head = Node(value: oldNode.value)
    var newNode = head
    
    while let nextOldNode = oldNode.next {
        newNode!.next = Node(value: nextOldNode.value)
        newNode = newNode!.next
        
        oldNode = nextOldNode
    }
    
    tail = newNode
}
```

```swift
private mutating func copyNodes(returningCopyOf node: Node<Value>?) -> Node<Value>? {
    guard !isKnownUniquelyReferenced(&head) else { return nil }
    guard var oldNode = head else { return nil }
    
    head = Node(value: oldNode.value)
    var newNode = head
    var nodeCopy: Node<Value>?
    
    while let nextOldNode = oldNode.next {
        if oldNode === node {
            nodeCopy = newNode
        }
        newNode!.next = Node(value: nextOldNode.value)
        newNode = newNode!.next
        oldNode = nextOldNode
    }
    return nodeCopy
}
```

```swift
extension LinkedList: Collection {
    struct Index: Comparable {
        var node: Node<Value>?
        
        static func ==(lhs: Index, rhs: Index) -> Bool {
            switch (lhs.node, rhs.node) {
            case let (left?, right?):
                return left.next === right.next
            case (nil, nil):
                return true
            default:
                return false
            }
        }
        
        static func <(lhs: Index, rhs: Index) -> Bool {
            guard lhs != rhs else {
                return false
            }
            let nodes = sequence(first: lhs.node) { $0?.next }
            return nodes.contains { $0 === rhs.node }
        }
    }
    
    var startIndex: Index {
        Index(node: head)
    }
    
    var endIndex: Index {
        Index(node: tail?.next)
    }
    
    func index(after i: Index) -> Index {
        Index(node: i.node?.next)
    }
    
    subscript(position: Index) -> Value {
        position.node!.value
    }
}

```
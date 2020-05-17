---
title: Swift Linked Lists
author: Bruce Wade
date: 2020-04-15 14:22:00-0700
categories: [Algorithms and Data Structures, Swift]
tags: [swift]
---

Now that we have looked at [stacks](/posts/swift-stacks/) which are efficent at adding and removing elements from the end/top of the stack, lets now look at Linked Lists which are efficent at add/removing elements from the beginning/front.

For stacks we used the standard library `Array` for storage. We will build our own storage type for the Linked Lists. Linked Lists work with nodes, where a `Node` can point to another `Node` next to it and if there is no `Node` next we know we are at the end of the Linked List. Nodes can also point to the previous node in a `Doubly Linked List`, and the last node's next could point to the first node with the first nodes previous pointing to the last node in a `Cicular Linked List`

### Singly Linked list
This type of linked list has a next reference a head and tail. Where we know we are at the tall if the nodes next is nil.

> Node(head) -> Node -> Node(tail)

### Doubly Linked List
This type of linked list is the same as the singly version with the addition of a previous reference.

> Node(head) <-> Node <-> Node(tail)

### Circular Linked List
This type can apply to both singly and doubly link lists. The difference with a singly the tail has a reference to the head. With a doubly the head also has a reference to the tail which allows iterations in both directions.

### Implementation
Let's first look at creating our `Node` class which is pretty simple it contains a generic `T` and a reference to the next `Node` on the right of it. The initializer sets the required value and optionally sets the next `Node`. We will also add a weak previous `Node` which points to nil if we are at the beginning, or to the tail if we are using a Cicular linked list. It is set as weak to avoid retain cycles.

```swift
class Node<T> {
    var value: T
    var next: Node?
    weak var previous: Node?
    
    init(value: T, next: Node? = nil, previous: Node? = nil) {
        self.value = value
        self.next = next
        self.previous = previous
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
func printNodeList<T>(_ headNode: Node<T>?) {
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

Greate we have seen how we can add `Node`'s to the front of the list. What if we wanted to append them to the end of the list? This would require us looping through the list until we find a next that is nil (we cannot rely on this for a Cicular Linked List), this will indicate we have found the end and we can update the next to the new `Node` we want to add.

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

First we will setup the basic class than go over each of the features in order. The basic class needs a head `Node` which points to the front of the list, and a tail `Node` that points to the end of the list. Our Linked List will also be generic so it supports any value. In the definition of the structure there will be placeholder comments were the functions for each feature should be added. however to save space I will only show the function alone.

```swift
class LinkedList<T> {
    var head: Node<T>?
    var tail: Node<T>?
    
    init() {}

    // TODO: Check for empty list
    // TODO: Push Node to beginning of the list
    // TODO: Append Node to end of list
    // TODO: Insert Node after another Node in list

}
```

It is pretty easy to check if our Linked List is empty by checking if the head is nil, if it is we can assume there is no `Node`'s and our list is empty.

```swift
var isEmpty: Bool {
    head == nil
}
```

We already covered how to add a `Node` to the front of the list above, the only difference here is we have the tail `Node` to think about if the tail is nil we update it to the new `Node` we have just added otherwise we leave the tail `Node` how it was.

```swift
mutating func push(_ value: T) {
    copyNodes()
    head = Node(value: value, next: head)
    if tail == nil {
        tail = head
    }
}
```

We also covered adding a node to the end of the list however now that we are keeping track of the tail `Node` we no longer need to loop through all the `Node`'s in the list. If the list is empty we will just reuse the push logic to handle updating the tail. Otherwise we need to update the tail of the Linked List.

```swift
mutating func append(_ value: T) {
    copyNodes()
    guard !isEmpty else {
        push(value)
        return
    }
    
    tail?.next = Node(value: value)
    tail = tail!.next
}
```

To make adding and removing `Node`'s after a specific `Node` we need to create a helper method that given a index will loop through our linked list until we reach the target index returning the found `Node` or nil if not found.
```swift
func node(at index: Int) -> Node<T>? {
    var currentNode = head
    var currentIndex = 0
    
    while currentNode != nil && currentIndex < index {
        currentNode = currentNode!.next
        currentIndex += 1
    }
    
    return currentNode
}
```

Inserting a `Node` after another node requires the value we are going to assign as well as the `Node` we want to insert after which we can find using the `node(at:)` method. First we check if the node provided is the tail node in which case we just append the new value and return the tail. Otherwise we update the nodes next value to the new node and the new nodes next will point to the previous nodes next node.
```swift
@discardableResult
mutating func insert(_ value: T, after node: Node<T>) -> Node<T> {
    copyNodes()
    guard tail !== node else {
        append(value)
        return tail!
    }
    
    node.next = Node(value: value, next: node.next)
    return node.next!
}
```

When poping off the first node so we need to `defer` the removal of the node so we can have access to the value. By updating the head of the Linked List to point to the currents heads next node we allow swifts reference counting to remove the removed nodes from memory. Also if we happened to have poped off the last node in the list we need to set the tail node to nil to ensure memory is cleaned up correctly. 
```swift
// MARK: - Removing from the LinkedList
@discardableResult
mutating func pop() -> T? {
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

When removing the last node in a linked list we first make sure there is an actual node in the list by checking the head is not nil. Next if there is only a single node in the list we simply pop it. If the list contains more than two nodes we have to loop through the list and correctly set the last node to nil as well as updating the tail to the node before the last.
```swift
@discardableResult
mutating func removeLast() -> T? {
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

When removing a node after a provided node we simple return the provided nodes next nodes value and defer the updating of the refercenes. If the node after the provided one is the last in the list we update the tail to point to the provided node. Otherwise we set the provided nodes next value to the node after the next one.
```swift
@discardableResult
mutating func remove(after node: Node<T>) -> T? {
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

The copyNodes method that was used in a few of the methods above leverages the standard libraries isKnownUniquelyReferenced which will tell is if there is only one copy of the object in this case the head node. If there is we don't need to make a copy of any of the nodes. Otherwise we want to make a copy of the linked list so we don't change references in the original this is known as COW (copy on write).
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

In specially situations such as deleting a node we want to return a copy of the node that is going to be deleted. This is because we are handling the removal of the node inside a defered block. Otherwise we the result will not be what is expected.
```swift
private mutating func copyNodes(returningCopyOf node: Node<T>?) -> Node<T>? {
    guard !isKnownUniquelyReferenced(&head) else { return nil }
    guard var oldNode = head else { return nil }
    
    head = Node(value: oldNode.value)
    var newNode = head
    var nodeCopy: Node<T>?
    
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

For us to be able to use index lookup on our LinkedList we need to comform to the Collection protocol which requires a Comparable Index, startIndex, endIndex, a method for finding the index after the current Index and the subscript which will give us the node value.
```swift
extension LinkedList: Collection {
    struct Index: Comparable {
        var node: Node<T>?
        
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
> **TODO**: Clean up the wording used to explain the linked lists. 
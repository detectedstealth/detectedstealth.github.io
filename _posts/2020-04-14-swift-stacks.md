---
title: Swift Stacks
author: Bruce Wade
date: 2020-04-14 9:54:00-0700
categories: [Swift, Algorithms & Data Structures]
tags: [swift]
---
In our day to day lives we see stacks everywhere. 
- Going into a clothing store we will see multiple stacks of clothing. 
- Looking at our dishes they are stacked on top of each other.
- When ordering takeout they stack the containers on top of each other in the bag.
- Even when making your bed a stack is being used, the sheet, than blanket/pillows on top etc.

The concept of a stack is very simple to understand you place objects on top of each other and you remove the last one you added on top first (LIFO). This makes using an array as your storage an easy choice, as it is efficent to add an element to the end of an array and also efficent to remove an element from the end of an array. Stacks have two opperations to push an element on top of the stack and to pop and element from the top of the stack.

```swift
/// Generic structure for creating stacks of objects.
struct Stack<Element> {
    private var storage: [Element] = []
    public init() {}

    public mutating func push(_ element: Element) {
        storage.append(element)
    }

    @discardableResult
    public mutating func pop() -> Element? {
        storage.popLast()
    }
}
```

Here is an example of using our stack for books to read. First lets create a structure of our book.

```swift
struct Book {
    var title: String
}
```

We need to add our books as if we were stacking them on a table. When we do this we order them with the one we want to read first on top of the stack (so added last).

```swift
var booksToRead: Stack<Book> = []
booksToRead.push(Book(title: "Catalyst by Tutorials"))
booksToRead.push(Book(title: "SwiftUI by Tutorials"))
booksToRead.push(Book(title: "Data Structures & Algorithms in Swift"))
```

This will give us the following stack:
- Data Structures & Algorithms in Swift
- SwiftUI by Tutorials
- Catalyst by Tutorials

```swift
// Now lets pretend we have finished reading "Data Structures & Algorithms in Swift"
// and we want to move on to reading "SwiftUI by Tutorials".
// We would remove the top book so we can have access to the next "SwiftUI by Tutorials".
booksToRead.pop()
```

Now we would have the following stack:
- SwiftUI by Tutorials
- Catalyst by Tutorials

As our Stack structure stands we have no easy way to print what elements are currently in our stack. To change this we can use the `CustomStringConvertible` protocol and extend our class. `CustomStringConvertible` has a required computed property called description which is a `String`.

Becase we are using generics we must `map` over the elements in our storage class converting them to a `String`. Next we need to reverse the order of our storage class so we have the correct stack order to display and we can ensure they are printed on a new line with using `joined` on the collection and ensure every element is seperated by a new line.

```swift
extension Stack: CustomStringConvertible {
    public var description: String {
        """
        \(storage.map { "\($0)" }.reversed().joined(separator: "\n"))
        """
    }
}
```

The above code will work but it prints out our data like the following:

```swift
Book(title: "SwiftUI by Tutorials")
Book(title: "Catalyst by Tutorials")
```

What if we want to only show the book titles on each line out put? We don't want to change our generic Stack so we can also make our Book struct conform to the `CustomStringConvertible` protocol.

```swift
extension Book: CustomStringConvertible {
    public var description: String {
        title
    }
}
```

Now if we print our stack collection we will have the following:

```
SwiftUI by Tutorials
Catalyst by Tutorials
```
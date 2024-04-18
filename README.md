## Usage

#### `LinkedList`
Constructor or static method
```ts
import { LinkedList } from "ts-doubly-linked-list";

// Untyped list:
const untypedList = new LinkedList();

// Typed list:
const typedList = new LinkedList<number>();

// List from untyped array:
const listFromUntypedArrray = LinkedList.fromArray([1, `two`, () => 3]);

// List from typed array:
const listFromTypedArrray = LinkedList.fromArray<number>([1, 2, 3]);
```
---
#### `insertFirst(element: T): void`
#### `insertLast(element: T): void`
Insert element at head or tail of list:
```ts
import { LinkedList } from "ts-doubly-linked-list";

interface User {
  username: string
  age: number
}

const user1: Person = { username: `User 1`, age: 20 };
const user2: Person = { username: `User 1`, age: 40 };
const user3: Person = { username: `User 1`, age: 60 };

const userList = new LinkedList<User>();

userList.insertFirst(user1); // userList: user1
userList.insertFirst(user2); // userList: user2 <--> user1

userList.insertLast(user3); // userList: user2 <--> user1 <--> user3
```
---

#### `LinkedList#removeFirst(): T | null`
#### `LinkedList#removeLast(): T | null`
Remove from head or tail of list. Returns `null` if list is empty
```ts
import { LinkedList } from "ts-doubly-linked-list";

const numberList = LinkedList.fromArray<number>([1, 2, 3]);

numberList.size(); // 3

const headElement = numberList.removeFirst(); // 1
const tailElement = numberList.removeLast(); // 3
const remainingElement = numberList.removeFirst(); // 2

numberList.size(); // 0

const nullElement = numberList.removeFirst(); // null
```

---

#### `LinkedList#clear(): void`
Empty list
```ts
import { LinkedList } from "ts-doubly-linked-list";

const numberList = LinkedList.fromArray<number>([1, 2, 3]);

numberList.size(); // 3

numberList.clear();

numberList.size(); // 0

const nullElement = numberList.removeFirst(); // null
```

---

#### `LinkedList#Symbol.iterator`
LinkedList is iterable
```ts
import { LinkedList } from "ts-doubly-linked-list";

const numberArray = [1, 2, 3];

const numberList = LinkedList.fromArray<number>(numberArray);

numberList.size(); // 3

const resultArray1 = [...numberList];
const resultArray2 = [];

for (const number of numberList) {
  resultArray2.push(number);
}

expect(resultArray1).toEqual(numberArray);
expect(resultArray2).toEqual(numberArray);

numberList.size(); // 3
```

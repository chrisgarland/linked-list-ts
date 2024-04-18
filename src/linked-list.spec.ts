import { LinkedList } from "./linked-list";

interface User {
  username: string
  age: number
}

describe(`linked-list`, () => {

  const users: () => User[] = () => {
    const user1: User = { username: `User 1`, age: 50 };
    const user2: User = { username: `User 2`, age: 100 };
    return [user1, user2];
  };


  test(`null head and tail upon instantiation`, () => {
    const list = new LinkedList();

    expect(list.getFirst()).toBe(null);
    expect(list.getLast()).toBe(null);
  });

  test(`when fromArray > return LinkedList`, () => {
    const list = LinkedList.fromArray([1, `two`, () => 3]);

    expect(list.size()).toEqual(3);
  });

  test(`given single value > when insertFirst > head and tail should reference that value`, () => {
    const [user1] = users();
    const list = new LinkedList<User>();

    list.insertFirst(user1);

    expect(list.size()).toEqual(1);
    expect(list.getFirst()).toEqual(user1);
    expect(list.getLast()).toEqual(user1);
    expect(list.size()).toEqual(1);
  });

  test(`given single value > when insertLast > head and tail should reference that value`, () => {
    const [user1] = users();
    const list = new LinkedList<User>();

    list.insertLast(user1);

    expect(list.size()).toEqual(1);
    expect(list.getFirst()).toEqual(user1);
    expect(list.getLast()).toEqual(user1);
    expect(list.size()).toEqual(1);
  });

  test(`given multiple values > when insertFirst > head should reference most recent inserted value, tail should reference first inserted value`, () => {
    const [firstUser, lastUser] = users();
    const userList = new LinkedList<User>();

    userList.insertFirst(firstUser);
    userList.insertFirst(lastUser);

    expect(userList.size()).toEqual(2);
    expect(userList.getFirst()).toEqual(lastUser);
    expect(userList.getLast()).toEqual(firstUser);
    expect(userList.size()).toEqual(2);
  });

  test(`given multiple values > when insertLast > head should reference first inserted value, tail should reference most recent inserted value`, () => {
    const [firstUser, lastUser] = users();
    const userList = new LinkedList<User>();

    userList.insertLast(firstUser);
    userList.insertLast(lastUser);

    expect(userList.size()).toEqual(2);
    expect(userList.getFirst()).toEqual(firstUser);
    expect(userList.getLast()).toEqual(lastUser);
    expect(userList.size()).toEqual(2);
  });

  test(`given empty list > when removeFirst/removeLast > return null`, () => {
    const userList = new LinkedList();

    expect(userList.size()).toEqual(0);
    expect(userList.removeFirst()).toBe(null);
    expect(userList.removeLast()).toBe(null);
    expect(userList.size()).toEqual(0);
  });

  test(`given single value > when removeFirst > return value and decrement count`, () => {
    const [user] = users();
    const userList = LinkedList.fromArray<User>([user]);

    expect(userList.size()).toEqual(1);
    expect(userList.removeFirst()).toEqual(user);
    expect(userList.size()).toEqual(0);
  });

  test(`given single value > when removeLast > return value and decrement count`, () => {
    const [user] = users();
    const userList = LinkedList.fromArray<User>([user]);

    expect(userList.size()).toEqual(1);
    expect(userList.removeLast()).toEqual(user);
    expect(userList.size()).toEqual(0);
  });

  test(`given multiple values > when removeFirst > return value and decrement count`, () => {
    const [user1, user2] = users();
    const userList = LinkedList.fromArray<User>([user1, user2]);

    expect(userList.size()).toEqual(2);
    expect(userList.removeFirst()).toEqual(user1);
    expect(userList.size()).toEqual(1);
  });

  test(`given multiple values > when removeLast > return value and decrement count`, () => {
    const [user1, user2] = users();
    const userList = LinkedList.fromArray<User>([user1, user2]);

    expect(userList.size()).toEqual(2);
    expect(userList.removeLast()).toEqual(user2);
    expect(userList.size()).toEqual(1);
  });

  test(`given multiple values > when clear() > head and tail should be null, count should be zero`, () => {
    const [user1, user2] = users();
    const userList = LinkedList.fromArray<User>([user1, user2]);

    expect(userList.size()).toEqual(2);
    userList.clear();
    expect(userList.size()).toEqual(0);
    expect(userList.getFirst()).toBe(null);
    expect(userList.getLast()).toBe(null);
  });

  test(`linked list should be iterable`, () => {
    const userArray = users();
    const userList = LinkedList.fromArray<User>(userArray);

    const resultArray1 = [...userList];
    const resultArray2 = [];

    for (const user of userList) {
      resultArray2.push(user);
    }

    expect(resultArray1).toEqual(userArray);
    expect(resultArray2).toEqual(userArray);
  });
});

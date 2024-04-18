type Nullable<T> = T | null;

export class LinkedList<T> {

  static fromArray<U>(arr: U[]): LinkedList<U>

  size(): number

  getFirst(): Nullable<T>

  getLast(): Nullable<T>

  insertFirst(data: T): void

  insertLast(data: T): void

  removeFirst(): Nullable<T>

  removeLast(): Nullable<T>

  clear(): void
}

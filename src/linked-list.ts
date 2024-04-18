type Nullable<T> = T | null;

class ListNode<T> {
  private next: Nullable<ListNode<T>>;
  private prev: Nullable<ListNode<T>>;

  constructor(private readonly data: T) {}

  getNext(): Nullable<ListNode<T>> { return this.next; }

  getPrev(): Nullable<ListNode<T>> { return this.prev; }

  getData(): T { return this.data; }

  setNext(node: ListNode<T>): void { this.next = node; }

  setPrev(node: ListNode<T>): void { this.prev = node; }

  pruneNext(): void { this.next = null; }

  prunePrev(): void { this.prev = null; }
}

export class LinkedList<T> {
  private head: Nullable<ListNode<T>>;
  private tail: Nullable<ListNode<T>>;
  private numNodes = 0;

  static fromArray<U>(arr: U[]): LinkedList<U> {
    const list = new LinkedList<U>();
    for (const data of arr) list.insertLast(data);
    return list;
  }

  size(): number { return this.numNodes; }

  getFirst(): Nullable<T> { return this.head?.getData() || null; }

  getLast(): Nullable<T> { return this?.tail?.getData() || null; }

  insertFirst(data: T): void {
    const node = new ListNode(data);
    const first = this.head;
    if (first) {
      node.setNext(first);
      first.setPrev(node);
    } else {
      this.tail = node;
    }
    this.head = node;
    this.numNodes++;
  }

  insertLast(data: T): void {
    const node = new ListNode(data);
    const last = this.tail;
    if (last) {
      last.setNext(node);
      node.setPrev(last);
    } else {
      this.head = node;
    }

    this.tail = node;
    this.numNodes++;
  }

  removeFirst(): Nullable<T> {
    if (!this.head) return null;

    const first = this.head;
    const newHead = first.getNext();
    if (newHead) {
      newHead.prunePrev();
    }

    this.head = newHead;
    this.numNodes--;

    first.pruneNext();
    return first.getData();
  }

  removeLast(): Nullable<T> {
    if (!this.tail) return null;

    const last = this.tail;
    const newLast = last.getPrev();

    if (newLast) {
      newLast.pruneNext();
    }

    this.tail = newLast;
    this.numNodes--;

    last.prunePrev();
    return last.getData();
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.numNodes = 0;
  }

  *[Symbol.iterator](): Generator<T> {
    let current = this.head;
    while (current) {
      yield current.getData();
      current = current.getNext();
    }
  }
}

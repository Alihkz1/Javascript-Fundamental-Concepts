class SimpleNode<T> {
  constructor(public value: T, public next: SimpleNode<T> | null = null) {}
}
class LinkedList<T> {
  private head: SimpleNode<T> | null = null;
  private tail: SimpleNode<T> | null = null;
  private size: number = 0;

  public append(value: T): void {
    const newNode = new SimpleNode<T>(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  public pretend(value: T): void {
    const newNode = new SimpleNode<T>(value);
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.size++;
  }

  public get getSize(): number {
    return this.size;
  }

  public find(value: T): SimpleNode<T> | null {
    if (!this.head) return null;
    if (this.head?.value === value) return this.head;
    let nextNode = this.head.next;
    while (nextNode) {
      if (nextNode.value === value) return nextNode;
      nextNode = nextNode.next;
    }
    return null;
  }

  public delete(value: T): void {}

  public print(): void {}
}

// const linkedList = new LinkedList<number>();
// linkedList.append(1);
// linkedList.append(1);
// linkedList.append(1);
// console.log(linkedList.getSize);

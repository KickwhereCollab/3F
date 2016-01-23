const reverseLinkedList = (linkedList) => {
  let node = linkedList;
  let prev = null;

  while(node) {
    let temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }
  return prev;
};

/* You can also implement it using a recursive function. However then the time complexity will not be constant anymore.*/


// Groups
//

class Group {
  constructor() {
    this.data = new Set();
  }

  add(e) {
    this.data.add(e);
    return this;
  }

  delete(e) {
    this.data.delete(e);
    return this;
  }

  has(e) {
    return this.data.has(e);
  }

  static from(iterable) {
    let v = new Group();
    iterable.forEach(e => v.add(e));
    return v;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

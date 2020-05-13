
// Iterable Groups
//

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index == this.group.members.length) return {done: true};
    return {value: this.group.members[this.index++], done: false};
  }

}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c


// Groups
//

class Group {
  constructor() {
    this.data = [];
  }

  add(e) {
    if (!this.data.includes(e)) {
      this.data.push(e);
    }
    return this;
  }

  delete(e) {
    if (this.data.includes(e)) {
      //let i = this.data.indexOf(e);
      //this.data = this.data.slice(0, i).concat(this.data.slice(i+1));
      this.data.filter(a => e !== a);
    }
    return this;
  }

  has(e) {
    return this.data.includes(e);
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

class Sorter {
  
    //arr
    //comparator
    
  constructor() {
    this.arr = [];
    this.comparator = (a,b)=>(a - b);
  }

  add(element) {
      this.arr.push(element);
    // your implementation
  }

  at(index) {
      return this.arr[index];
    // your implementation
  }

  get length() {
    return this.arr.length;// your implementation
  }

  toArray() {
    // your implementation
      return this.arr;
  }

  sort(indices) {
indices.sort();
    var newArray = [];
    indices.forEach ((index) =>{
        newArray.push(this.arr[index]);
    })
    newArray.sort(this.comparator);
    newArray.forEach ((element,index) =>{
        this.arr[indices[index]]=element;
    })
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;// your implementation
  }
}

module.exports = Sorter;
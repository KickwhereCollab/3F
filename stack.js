var Stack = function(){
  this.storage =[];
  this.max = [];
};

Stack.prototype.push = function(int){
  this.storage.push(int);
  var largest = this.max[this.max.length-1];
  if(this.max.length === 0 || largest < int) {
     this.max.push(int);
  }
};

Stack.prototype.pop = function() {
  var popped = this.storage.pop();
  if(popped === this.getMax()) {
    this.max.pop();
  }
  return popped;
};

Stack.prototype.getMax = function() {
  return this.max[this.max.length-1];
};

// Helper function to check what storage looks like
Stack.prototype.getStorage = function () {
  return this.storage;
};

// Helper function to check what max storage looks like
Stack.prototype.maxStorage = function() {
  return this.max;
};

/*
  This implementation assumes that all input integers are unique. Limitations: If there are repeated inputs this implementation will not work.
*/

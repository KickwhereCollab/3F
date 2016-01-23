const Stack = () => {
  let storage = [];
  let max = [];

  this.push = (int) => {
    if (max.length === 0) {
      max.push(int);
    } else {
      let last = max.length - 1;
      if(max[last] > int) {
        max.push(last);
      } else {
        max.push(int);
      }
    }
    storage.push(int);
  };

  this.pop = () => {
    max.pop();
    return storage.pop();
  };

  this.getMax = () => {
    return max[max.length-1];
  };
};

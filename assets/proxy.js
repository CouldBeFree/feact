let user = {
  name: 'John'
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, val){
      if(prop in target){
        return Reflect.get(...arguments);
      } else {
        throw new Error(`Object has no property ${prop}`);
      }
    }
  })
}

let numbers = [1,2,3];

numbers = new Proxy(numbers, {
    get(target, prop) {
      if(prop < 0){
        prop = +prop + target.length;
      }
      return Reflect.get(...arguments);
    }
});

console.log(numbers[-2]);

let obj = { name: "123", age: 18 }
let state = new Proxy(obj, {
    get(obj, key) {
        // console.log(obj, key)
        return obj[key];
    },
    set(obj, key ,value) {
        // console.log(obj, key, value)
        obj[key] = value;
     }
});
state.name = "456";
console.log(state)
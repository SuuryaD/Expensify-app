const add = ({ a = 1, b = 1 } = {}) => {
    console.log(a+b);
};
const obj = {
    a : 2 ,
    b : 3,
    c: 4
}
const {a: d} = obj;
console.log(d);
add(obj);
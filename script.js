let options = {
    width: 1024,
    height: 1024,
    name: "Alex"
};


options['bool'] = false;

options.colors = {
    border: 'black',
    bg: 'red'
};

options.arr = [1,2,"test",'@#'];

delete options.bool;

// console.log(options);

for (let key in options) {
    console.log('Ключ: ' + key + '. Значение: ' + options[key]);
}

console.log(Object.keys(options).length)
// https://www.youtube.com/watch?v=tWVWeAqZ0WU&ab_channel=freeCodeCamp.org

// pop() removes the last element of an array
// push() adds an element to the end of an array
// shift() removes the first element
// unshift() adds an element to the beginning of the array
// new set() The Set object lets you store unique values of any type, whether primitive values or object references. 
    // const mySet1 = new Set();, 
    // mySet1.add(1); // Set(1) { 1 }, 
    // mySet1.has(1); // true, 
    // mySet1.delete(1); // removes 1 from the set
    // mySet1.size; // 1
   // https://structy.net/problems/has-path
//    https://masteringjs.io/tutorials/fundamentals/foreach-object   explains how to forEach() on objects.
//     Basically Object.keys(target) or Object.values(target) or Object.entry(target)
// ------------------------------------------------------

const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const depthFirstPrintIterative = (graph, source) => {    //iterative
    const stack = [source];

    while (stack.length > 0){
        const current = stack.pop();
        console.log('depthFirstPrintIterative',current);

        for (let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
};

const depthFirstPrintRecursive = (graph, source) => { //recursive
    console.log('depthFirstPrintRecursive',source);
    for (let neighbour of graph [source]){
        depthFirstPrintRecursive(graph, neighbour);
        }
    };

const breathFirstPrint = (graph, source) => { //only itirative for BFS
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log('breathFirstPrintIterative',current);
        for (let neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }
};


let content = document.getElementsByClassName('content')[0];
Object.entries(graph).forEach(entry => {
    const [key, value] = entry;
    let displayEntry = document.createElement('div');
    displayEntry.textContent = `${key}:  ${value} `
    content.appendChild(displayEntry); 
  });






depthFirstPrintIterative(graph, 'a');
console.log('//');
depthFirstPrintRecursive(graph, 'a');
console.log('//');
breathFirstPrint(graph,'a');
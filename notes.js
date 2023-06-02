// https://www.youtube.com/watch?v=tWVWeAqZ0WU&ab_channel=freeCodeCamp.org

// pop() removes the last element of an array
// push() adds an element to the end of an array
// shift() removes the first element
// unshift() adds an element to the beginning of the array


const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const depthFirstPrint = (graph, source) => {    //iterative
    const stack = [source];

    while (stack.length > 0){
        const current = stack.pop();
        console.log(current);

        for (let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
};

// const depthFirstPrint = (graph, source) => { //recursive
//     console.log(source);
//     for (let neighbour of graph [source]){
//         depthFirstPrint(graph, neighbour);
//         }
//     };

// const breathFirstPrint = (graph, source) => { //only itirative for BFS
//     const queue = [source];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         console.log(current);
//         for (let neighbour of graph[current]) {
//             queue.push(neighbour)
//         }
//     }
// };

// breathFirstPrint(graph,'a');

depthFirstPrint(graph, 'a');
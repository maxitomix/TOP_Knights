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

const graph1 = {
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

function printGraph(graph){
let content = document.getElementsByClassName('content')[0];
Object.entries(graph).forEach(entry => {
    const [key, value] = entry;
    let displayEntry = document.createElement('div');
    displayEntry.textContent = `${key}:  ${value} `
    content.appendChild(displayEntry); 
  });
}



function buildGraph(rows,columns){
    for (let row = 0; row < rows; row++ ){
        let rowArray =[];
        for (let column = 0; column < columns; column++){
            let node = row +','+ column
            rowArray.push(node);
        }
        graph.push(rowArray);
    }
    console.log(graph);
}


function checkOutOfBounds(pos){
    // console.log('Pos:', pos);
    // console.log('Graph:', graph);
    let [r, c] = pos.split(',');
    // console.log('r:', r, 'c:', c);
    const rowInbounds = 0 <= r && r <graph.length; 
    const columnInbounds = 0 <= c && c <graph[0].length; 
    return (!rowInbounds || !columnInbounds) ?  false:  true;

}

function checkEntries(src, dest) {
    if (!checkOutOfBounds(src)) {
        console.log('bad source node');
        return false;
    }  
    if (!checkOutOfBounds(dest)){
        console.log('bad dest node'); 
        return false;
    }
    if (src === dest){
        console.log('Source same as dest!'); 
        return false;
    } 
    console.log('src and dest OK');   
    return true;
}

function explore(src,dest, visited){
    if (!checkOutOfBounds(src)) return false;

    let [r, c] = src.split(',');
    const pos = r +','+ c;

    if (visited.includes(pos)) return false;

    visited.push(pos);
    if (pos === dest) {
        console.log('found path');  
        return true;
    }

    // console.log(typeof(r))
    let move1 = (parseInt(r)+1)+','+(parseInt(c)+1);
    // console.log(move1);

    explore(move1,dest,visited)
}



//------------------------
function work(graph, src, dest){
    let visited = [];

    printGraph(graph);
    checkEntries(src,dest);
    explore(src,dest, visited);
    console.log(visited)
}

let graph = [];
buildGraph(8,8);

work(graph, '0,0' , '2,2');


// console.log(graph[0][1])

// depthFirstPrintIterative(graph, 'a');
// console.log('//');
// depthFirstPrintRecursive(graph, 'a');
// console.log('//');
// breathFirstPrint(graph,'a');

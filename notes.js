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

// function printGraph(graph){
// let content = document.getElementsByClassName('content')[0];
// Object.entries(graph).forEach(entry => {
//     const [key, value] = entry;
//     let displayEntry = document.createElement('div');
//     displayEntry.textContent =`${key}: ${value} `
//     content.appendChild(displayEntry); 
//   });
// }

function printGraph(graph) {
    let content = document.getElementsByClassName('content')[0];
    
    for (let row = 0; row < graph.length; row++) {
      for (let col = 0; col < graph[row].length; col++) {
        let displayEntry = document.createElement('div');
        displayEntry.textContent = graph[row][col];
        displayEntry.classList.add('cell');
        if ((row + col) % 2 === 0) {
          displayEntry.classList.add('light'); // Add class for light-colored cells
        } else {
          displayEntry.classList.add('dark'); // Add class for dark-colored cells
        }
        content.appendChild(displayEntry);
      }
    }
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

function explore(src, dest, visited) {
    if (!checkOutOfBounds(src)) return false;
  
    const queue = []; // Initialize a queue to hold positions
    const visitedSet = new Set(); // Use a set to keep track of visited positions
  
    let [r, c] = src.split(',');
    const startPos = r + ',' + c;
  
    queue.push(startPos); // Enqueue the starting position
  
    while (queue.length > 0) {
      const currentPos = queue.shift(); // Dequeue the current position
  
      if (visitedSet.has(currentPos)) continue;
  
      visited.push(currentPos);
      visitedSet.add(currentPos);
  
      if (currentPos === dest) {
        console.log('Found path');
        console.log(visited);
        return true;
      }
  
      // Explore all possible moves from the current position
      let [curR, curC] = currentPos.split(',');
      curR = parseInt(curR);
      curC = parseInt(curC);
  
      const moves = [
        [curR - 2, curC + 1],
        [curR - 1, curC + 2],
        [curR + 1, curC + 2],
        [curR + 2, curC + 1],
        [curR - 1, curC - 2],
        [curR - 2, curC - 1],
        [curR + 1, curC - 2],
        [curR + 2, curC - 1]
      ];
  
      for (const [newR, newC] of moves) {
        const newPos = newR + ',' + newC;
        if (checkOutOfBounds(newPos) && !visitedSet.has(newPos)) {
          queue.push(newPos); // Enqueue the new position
        }
      }
    }
  
    console.log('No path exists');
    return false;
  }






// function explore(src,dest, visited){    /// depth first.
//     if (!checkOutOfBounds(src)) return false;

//     let [r, c] = src.split(',');
//     const pos = r +','+ c;

//     if (visited.includes(pos)) return false;

//     visited.push(pos);
//     if (pos === dest) {
//         console.log('found path');  
//         console.log(visited);
//         return true;
//     }

//     // console.log(typeof(r))
//     let move1 = (parseInt(r)-2)+','+(parseInt(c)+1);
//     let move2 = (parseInt(r)-1)+','+(parseInt(c)+2);
//     let move3 = (parseInt(r)+1)+','+(parseInt(c)+2);
//     let move4 = (parseInt(r)+2)+','+(parseInt(c)+1);
//     let move5 = (parseInt(r)-1)+','+(parseInt(c)-2);
//     let move6 = (parseInt(r)-2)+','+(parseInt(c)-1);
//     let move7 = (parseInt(r)+1)+','+(parseInt(c)-2);
//     let move8 = (parseInt(r)+2)+','+(parseInt(c)-1);
    
//     // console.log(move1);

//     explore(move1,dest,visited);
//     explore(move2,dest,visited);
//     explore(move3,dest,visited);
//     explore(move4,dest,visited);
//     explore(move5,dest,visited);
//     explore(move6,dest,visited);
//     explore(move7,dest,visited);
//     explore(move8,dest,visited);
// }



//------------------------
function work(graph, src, dest){
    let visited = [];

    printGraph(graph);
    checkEntries(src,dest);
    explore(src,dest, visited);
   
}

let graph = [];
buildGraph(8,8);

work(graph, '6,4' , '4,5');

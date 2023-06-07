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
        let cell = document.createElement('div');
        cell.textContent = graph[row][col];
        cell.dataset.coord =`${graph[row][col]}`
        cell.addEventListener('click', () =>{

        })
        addClickFunctionality(cell)
        cell.classList.add('cell');
        if ((row + col) % 2 === 0) {
          cell.classList.add('light'); // Add class for light-colored cells
        } else {
          cell.classList.add('dark'); // Add class for dark-colored cells
        }
        content.appendChild(cell);
      }
    }
}

function addClickFunctionality(cell){
        const cells = document.getElementsByClassName('cell');

        cell.addEventListener('click', () =>{
          src = cell.dataset.coord;
          console.log('src:',src);
          for (let i=0; i < cells.length; i++){
            cells[i].classList.remove('src');
          }
          cell.classList.add('src');
         
        });

          cell.addEventListener('contextmenu', () => {
            event.preventDefault();
          dest = cell.dataset.coord;
          console.log('dest:',dest);
          for (let i=0; i < cells.length; i++){
            cells[i].classList.remove('dest');
          }
          cell.classList.add('dest');
          
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
    let [r, c] = pos.split(',');
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

function explore(src, dest) {
    if (!checkOutOfBounds(src)) return false;
  
    const queue = []; // Initialize a queue to hold positions
    const visitedSet = new Set(); // Use a set to keep track of visited positions
    const parentMap = new Map();
  
    let [r, c] = src.split(',');
    const startPos = r + ',' + c;
  
    queue.push(startPos); // Enqueue the starting position
    parentMap.set(startPos, null)
  
    while (queue.length > 0) {
      const currentPos = queue.shift(); // Dequeue the current position
  
      if (visitedSet.has(currentPos)) continue;
  
     
      visitedSet.add(currentPos);
  
      if (currentPos === dest) {
        console.log('Found path');
        let path = [];
        let current = dest;
        while (current != null) {
            path.unshift(current); // Add the cell to the beginning of the path
            current = parentMap.get(current); // Move to the parent cell
        }
        console.log('Path:', path.join(' -> '));


        return true;
      }
  
      // Explore all possible moves from the current position
      let [curR, curC] = currentPos.split(',');
      curR = parseInt(curR);
      curC = parseInt(curC);
  
      const moves = [
        [curR - 2, curC + 1],
        [curR - 2, curC - 1],
        [curR + 2, curC + 1],
        [curR + 2, curC - 1],
        [curR - 1, curC + 2],
        [curR - 1, curC - 2],
        [curR + 1, curC + 2],
        [curR + 1, curC - 2]
      ];
  
      for (const [newR, newC] of moves) {
        const newPos = newR + ',' + newC;
        if (checkOutOfBounds(newPos) && !visitedSet.has(newPos)) {
          queue.push(newPos); // Enqueue the new position
          parentMap.set(newPos, currentPos); // Set the current cell as the parent of the new cell
          console.log(parentMap);
        }
      }
    }
  
    console.log('No path exists');
    return false;
  }


//------------------------
function work(graph, src, dest){
    checkEntries(src,dest);
    explore(src,dest);
   
}

let graph = [];
buildGraph(8,8);
printGraph(graph);
work(graph, '3,3' , '0,7');




let src;
let dest;

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let numIslands = 0;
    const rows = grid.length, cols = grid[0].length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]]; // Down, Up, Right, Left

    function bfs(r, c) {
        let queue = [[r, c]];
        grid[r][c] = '0'; // Mark as visited

        while (queue.length > 0) {
            let [row, col] = queue.shift(); // Dequeue
            
            for (let [dr, dc] of directions) {
                let newRow = row + dr, newCol = col + dc;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === '1') {
                    queue.push([newRow, newCol]); // Enqueue
                    grid[newRow][newCol] = '0'; // Mark as visited
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                numIslands++; // Found an island
                bfs(r, c); // Sink it
            }
        }
    }

    return numIslands;
};
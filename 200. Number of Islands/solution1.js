/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
     if(!grid || !grid.length) return 0
    let cols = grid[0].length;
    let rows = grid.length
    let count = 0

    function graphDs(row, col) {
         if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
            return;
        }

         grid[row][col] = '0';

        // Explore all 4 directions
        graphDs(row + 1, col); // Down
        graphDs(row- 1, col); // Up
        graphDs(row, col + 1); // Right
        graphDs(row, col - 1); // Left
    }

     for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') { 
                count++; 
                graphDs(r, c); 
            }
        }
    }
    return count
};

//Time Complexity: O(M * N)
//space complexity: O(M * N);
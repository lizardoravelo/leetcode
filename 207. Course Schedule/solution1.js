/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();
    for (let [course, pre] of prerequisites) {
        if (!graph.has(pre)) graph.set(pre, []);
        graph.get(pre).push(course);
    }

    let visited = new Set(); // Tracks nodes in the current DFS path
    let done = new Set(); // Tracks completed nodes

    function dfs(course) {
        if (visited.has(course)) return false; // Cycle detected
        if (done.has(course)) return true; // Already processed

        visited.add(course);
        if (graph.has(course)) {
            for (let next of graph.get(course)) {
                if (!dfs(next)) return false;
            }
        }
        visited.delete(course);
        done.add(course);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};
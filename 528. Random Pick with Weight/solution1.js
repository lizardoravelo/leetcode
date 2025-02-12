/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.total = 0;
    this.prefixSum = [];

    for(let weight of w){
        this.total += weight;
        this.prefixSum.push(this.total);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = this.total * Math.random();

    let low = 0, high = this.prefixSum.length - 1;

    while(low < high){
        const mid = low + Math.floor((high - low) /2);

        if(target > this.prefixSum[mid]) low = mid + 1;
        else high = mid;
    }
    return low;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
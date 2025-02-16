/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 class MinHeap {
    constructor(){
        this.heap = [];
    }

    push(node){
        this.heap.push(node);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.size() -1;

        while(index > 0){
            const parentIndex = Math.floor((index-1)/2);
            if(this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    pop(){
        let min = this.heap[0];
        this.heap[0] = this.heap[this.size() -1];
        this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown(){
        let index = 0;
        const length = this.size();

        while(index < length){
            const leftIndex = 2* index +1;
            const rightIndex = leftIndex+1;
            let swapIndex = index;


            if(leftIndex < length && this.heap[leftIndex] < this.heap[swapIndex]){
                swapIndex = leftIndex;
            }
            if(rightIndex < length && this.heap[rightIndex] < this.heap[swapIndex])
                swapIndex = rightIndex;
            if(swapIndex === index) break;
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex],this.heap[index]];
            index = swapIndex;
        }
    }

    size(){
        return this.heap.length;
    }

    peek(){
        return this.heap[0];
    }

 }

var findKthLargest = function(nums, k) {
   let minHeap = new MinHeap();

   for(let i = 0; i < k; i++){
      minHeap.push(nums[i]);
   }

   for(let i = k; i < nums.length; i++){
        if(nums[i] > minHeap.peek()){
            minHeap.pop();
            minHeap.push(nums[i]);
        }
   }

   return minHeap.peek();
};
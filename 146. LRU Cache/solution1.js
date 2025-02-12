/**
 * @param {number} capacity
 */

class Node {
    constructor(key,value,next =null, prev = null){
        this.key = key;
        this.value =value;
        this.next = next;
        this.prev =prev;
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(0,0);
    this.tail = new Node(0,0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.moveToFront = function(node){
    this.removeNode(node);
    this.addToFront(node);
}

LRUCache.prototype.removeNode = function (node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

LRUCache.prototype.addToFront= function(node){
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
}

LRUCache.prototype.removeLruNode = function(){
    const lruNode = this.tail.prev;
    this.removeNode(lruNode);
    this.cache.delete(lruNode.key);
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.moveToFront(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        const node = this.cache.get(key);
        node.value =value;
        this.moveToFront(node);
    }else{
        if(this.cache.size >= this.capacity){
            this.removeLruNode();
        }
        const newNode = new Node(key,value);
        this.addToFront(newNode);
        this.cache.set(key,newNode);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
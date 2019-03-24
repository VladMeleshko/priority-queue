const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if (maxSize === undefined) {
			this.maxSize = 30;
		} else {
			this.maxSize = maxSize;
		}
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.maxSize > this.heap.size()) {
			this.heap.push(data, priority);
		} else if (this.maxSize < this.heap.size()) {
			throw Error("Error!");
		}
	}

	shift() {
		if (!this.isEmpty()) {
			let removeNodes = this.heap.pop();
			return removeNodes;
		} else {
			throw Error("Error!")
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if (this.heap.isEmpty() === 0) {
			return true;
		}
	}
}

module.exports = PriorityQueue;

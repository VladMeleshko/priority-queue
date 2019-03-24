const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode (node);
		this.shiftNodeUp (node);
	}

	pop() {
		if (this.isEmpty()) {
			return;
		} else {
			let data = this.root;
			this.detachRoot();
			this.restoreRootFromLastInsertedNode(this.detachRoot());
			this.shiftNodeDown(data);
			return data;
		}
	}

	detachRoot() {
		this.root = null;
		if (this.parentNodes.indexOf(this.root) != -1) {
			this.parentNodes.splice(this.parentNodes.indexOf(this.root), 1);
			return this.root;
		}
	}

	restoreRootFromLastInsertedNode(detached) {
		this.root = detached;
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		if (this.heapSize === 0) {
			return true;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.isEmpty()) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes.push(node);
			this.parentNodes[0].appendChild(node);
			if (this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;

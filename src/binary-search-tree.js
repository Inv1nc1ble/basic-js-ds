const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.topNode = null;
  }

  root() {
    return this.topNode;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.topNode == null) {
      this.topNode = newNode;
    } else {
      this.addNode(this.topNode, newNode);
    }
  }

  addNode(currentNode, newNode) {

    //уйти налево
    if (currentNode.data > newNode.data) {
      if (currentNode.left == null) {
        currentNode.left = newNode;
      } else {
        this.addNode(currentNode.left, newNode);
      }
    }
    //уходим вправо
    else {
      if(currentNode.right == null) {
        currentNode.right = newNode;
      } else {
        this.addNode(currentNode.right, newNode);
      }
    }
  }

  findNode(currentNode, data) {
     if (currentNode.data == data) return currentNode;

     if (currentNode.data > data) {
       if (currentNode.left !== null) {
         return this.findNode(currentNode.left, data)
       } else return null;
     } 
     else if(currentNode.data < data) {
      if (currentNode.right !== null) {
        return this.findNode(currentNode.right, data)
      } else return null;
     }
  }

  

  has( data ) {
      if (this.topNode == null) return false;

      let neededNode = this.findNode(this.topNode, data);
      console.log(neededNode)

      return neededNode == null ? false : true;
  }

  find( data ) {
    if (this.topNode == null) return null;

    return this.findNode(this.topNode, data);
  }

  remove( data ) {
    if (this.has(data)) {
      return this.topNode = this.removeNode(this.topNode, data);
    }
  }

  removeNode(currentNode, data){
    if (currentNode == null) return null;
    
    //right
    else if (currentNode.data < data) {
        currentNode.right = this.removeNode(currentNode.right, data);
        return currentNode;        
    } 
    //left
    else if (currentNode.data > data) {
        currentNode.left = this.removeNode(currentNode.left, data);
        return currentNode;
    } 
    // =
    else { 
        if (currentNode.left == null && currentNode.right == null) {
          currentNode = null;
          return currentNode;
        }
        if (currentNode.left == null) {
            currentNode = currentNode.right;
            return currentNode;
        } else if(currentNode.right == null) {
            currentNode = currentNode.left;
            return currentNode;
        }
        let minNode = this.findMinNode(currentNode.right);
        currentNode.data = minNode.data;
        currentNode.right = this.removeNode(currentNode.right, minNode.data);
        return currentNode;
      }
    }
/*
  removeNode(currentNode, data) {
   
    if (currentNode.data < data) {
      return this.removeNode(currentNode.right, data);
    }
    else if (currentNode.data > data) {
      return this.removeNode(currentNode.left, data);
    }
    else {
      if (currentNode.left == null && currentNode.right == null) {
        currentNode = null;
        return this;
      }

      else if (currentNode.right == null) {
        currentNode = currentNode.left;
        // return this;
        return this.remove(currentNode.left)
      } 
      else if (currentNode.left == null) {
        currentNode = currentNode.right;
        // return this;
        return this.remove(currentNode.right)
      }
      let minNode = this.findMinNode(currentNode.right);
      currentNode.data = minNode.data;

      
      return this.removeNode(currentNode.right, minNode.data)
    }
    
  }
*/
  min() {
    if (this.topNode.left == null) return this.topNode.data;
    else return this.findMinNode(this.topNode.left).data;
  }

  findMinNode(leftNode) {
    if (leftNode.left == null) return leftNode;
    else return this.findMinNode(leftNode.left);
  }

  findMaxNode(rightNode) {
    if (rightNode.right == null) return rightNode;
    else return this.findMaxNode(rightNode.right);
  }

  max() {
    if (this.topNode.right == null) return this.topNode.data;
    else return this.findMaxNode(this.topNode.right).data;
  }

}
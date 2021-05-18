const BinarySearchTree = require("./bst");

const main = () => {
  // 1. Draw a BST
  // 2. Remove the root
  // 3. Create a BST class
  // insert numbers, then easyQuestion
  // compare with drawing

  const BST = new BinarySearchTree();

  // insert [3,1,4,6,9,2,5,7]
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  console.log(BST);
  // remove root node
  // BST.remove(3);
  // console.log(BST);
  // replaces 3 with 4
  // removes node 4
  // node 6 moves up in the tree

  const easyQuestion = (input) => {
    for (let value of input) {
      BST.insert(value, null);
    }
  };

  console.log(
    easyQuestion(["E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"])
  );

};

module.exports = main;

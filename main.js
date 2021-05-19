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

  // const easyQuestion = (input) => {
  //   for (let value of input) {
  //     BST.insert(value, null);
  //   }
  // };

  // console.log(
  //   easyQuestion(["E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"])
  // );

  // 4. What does this program do?
  const tree = (t) => {
    if (!t) {
      return 0;
    }
    return tree(t.left) + t.value + tree(t.right);
  };

  console.log(tree(BST));
  /* ANSWER: recursive function
    adds up the keys of the tree
    Time complexity: O(log(n)) -- traverses the whole tree */

  // 5. Height of a BST
  const BSTheight = (t) => {
    if (!t.key) {
      return 0;
    }
    // recursive function
    // if root as left or right node + 1
    if (t.left && t.right) {
      if (BSTheight(t.left) > BSTheight(t.right)) {
        return BSTheight(t.left) + 1;
      }
      if (BSTheight(t.left) < BSTheight(t.right)) {
        return BSTheight(t.right) + 1;
      }
    } else if (t.left) {
      return BSTheight(t.left) + 1;
    } else if (t.right) {
      return BSTheight(t.right) + 1;
    } else {
      return 0;
    }
  };

  console.log(BSTheight(BST));

  // 6. Is it a BST?
  // does it follow the rules of a BST
  // left child < parent < right child
  const isBST = (t) => {
    if (!t) {
      return false;
    }
    if (t.right) {
      if (t.right.key > t.key) {
        isBST(t.right);
      } else {
        return false;
      }
    }
    if (t.left) {
      if (t.left.key < t.key) {
        isBST(t.left);
      } else {
        return false;
      }
    }
    return true;
  };

  console.log(isBST(BST));

  // 7. 3rd largest node
  const thirdLargest = (t) => {
    // stores keys from each node
    const keys = [];
    // helper function
    // recursive call to traverse the tree
    // pushes each keys to the array
    const getKeys = (t) => {
      if (!t) {
        return "error: no tree";
      }
      keys.push(t.key);
      getKeys(t.left);
      getKeys(t.right);
    };
    // helper function call
    getKeys(t);
    keys.sort();
    console.log(keys);
    // length - 3 to get third largest
    return keys[keys.length - 3];
  };

  console.log(thirdLargest(BST));

  // 8. Balanced BST
  // nodes inserted equally on left and right branches
  // no 2 leaves differ in distance from the root by > 1

  // const balanced = (t) => {
  //   if (!t) {
  //     return;
  //   }
  // };

  // console.log(balanced(BST));

  // 9. Are they the same BSTs?
  // don't actually construct the tree
  // can use array or linked list
  const sameBST = (input1, input2) => {
    if (input1.length !== input2.length) {
      return false;
    }
    let sorted1 = input1.sort(function (a, b) {
      return a - b;
    });
    let sorted2 = input2.sort(function (a, b) {
      return a - b;
    });
    for (let i = 0; i < input1.length; i++) {
      if (sorted1[i] !== sorted2[i]) {
        return false;
      }
    }
    return true;
  };

  let input1 = [3, 5, 4, 6, 1, 0, 2];
  let input2 = [3, 1, 5, 2, 4, 6, 0];
  let input3 = [3, 1, 4, 6, 9, 2, 5, 7];
  console.log(sameBST(input1, input2)); // true
  console.log(sameBST(input1, input3)); // false
};

module.exports = main;

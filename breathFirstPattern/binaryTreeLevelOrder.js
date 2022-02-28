const solution = (tree) => {
  const output = []
  let queue = []
  let level = 0;
  queue.push(tree)
  while (queue.length) {
    console.log({level})
    let levelArr = []
    let levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()
      levelArr.push(node.value)
      if (node != null && node.left != null) {
        queue.push(node.left)
      }
      if (node != null && node.right != null) {
        queue.push(node.right)
      }
    }

    output.push(levelArr)
    level++;

  }

  return output
}

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Level order traversal:`, solution(root))
---
title: "Building a Merkle Tree"
date: 2022-12-25
---

Based on the continuation of Learning Blockchains by Building One article, this apge will show you how to build a Merkle Tree from scratch.

Merkle trees are a data structure that can be used to verify the integrity of a large set of data. They are used in many applications, including blockchains, file systems, and distributed storage systems.

## What is a Merkle Tree?

A Merkle tree is a binary tree in which every leaf node is hashed with its adjacent leaf node to produce a parent node. This process is repeated until a single root node is produced. The root node is the hash of all the leaf nodes in the tree.

Within context, I used a merkle tree to store the hash of a series of transactions. The hash of each transaction is stored in a leaf node. So instead of having an object like this:

```json
{
  "transactions": [
    {
      "sender": "Alice",
      "recipient": "Bob",
      "amount": 50
    },
    {
      "sender": "Bob",
      "recipient": "Alice",
      "amount": 25
    }
    ...
  ]
}
```

we just have a single transaction hash

```json
{
  "transactions": "0x1234567890abcdef"
}
```

## How to build a Merkle Tree

Were going to be building this in python. The first thing we need to do is create a class which needs both hashlib and json. This library will be used to hash the data and convert the data to json.

```python
import hashlib
import json

class MerkleTree:
    def __init__(self, data):
        self.leaves = data
        self.root = None

``` 

Next we need to create the actual function that will create the tree. This function will take in a list of data and return the root node of the tree.

# Building the tree

First we need to deal with conditions where the number of leaves is not even. If the number of leaves is not even, we need to duplicate the last leaf node. This is because the tree needs to be balanced. If the number of leaves is odd, we need to duplicate the last leaf node.

```python

def build(self) -> str
    if len(self.leaves) == 1:
        self.root = self.leaves[0]
        return 

    if len(self.leaves) % 2 != 0:
        self.leaves.append(self.leaves[-1])

```

## Hashing the data

Now we will hash the data. We will use the sha256 algorithm to hash the data. We will also convert the data to json before hashing it. This is because the data is a list of strings. We need to convert it to json so that we can hash it.

```python
import hashlib
import json

...

def build(self) -> str:
    if len(self.leaves) == 1:
        self.root = self.leaves[0]
        return 

    if len(self.leaves) % 2 != 0:
        self.leaves.append(self.leaves[-1])

    self.leaves = [
        hashlib.sha256(json.dumps(leaf, sort_keys=True).encode()).hexdigest() 
        for leaf in self.leaves
    ]

```

## Creating the parent nodes

Now we will create the parent nodes. We will do this by taking two adjacent nodes and combining them into a parent node. We will then append the parent node to the list of leaves. We will repeat this process until we have a single root node.

```python

import hashlib
import json

...

def build(self) -> str:

    ...

    # grouping the list in pairs, if the list has an odd number of elements, the last element is duplicated

    self.leaves = [
        self.leaves[i:i + 2] for i in range(0, len(self.leaves), 2)
    ]

    # summing the pairs if they do not have 2 elements, then leave the element as it is. 

    self.leaves = [
        self.leaves[0][0] + self.leaves[0][1]
        if len(self.leaves[0]) == 2 else self.leaves[0][0]
        for self.leaves[0] in self.leaves
    ]

    # Recursively build the tree

    self.build()

```

## Getting the root node

Now we need to create a function that will return the root node of the tree. Pretty simple, we check whether the root node is None. If it is, we call the build function. Then we return the root node.

```python

def get_root(self) -> str:
    if self.root is None:
            self.build()

    root = json.dumps(self.root, sort_keys=True).encode()
    return hashlib.sha256(root).hexdigest()

```

## The final code

```python

class MerkleTree:

    def __init__(self, data: list):
        self.leaves = data
        self.root = None

    def build(self) -> str:

        """
        Builds the merkle tree
        :return: <str> hashed root

        This function is recursive, it will keep calling itself until the list has only one element
        """
        
        if len(self.leaves) == 1:
            self.root = self.leaves[0]
            return

        if len(self.leaves) % 2 != 0:
            self.leaves.append(self.leaves[-1])

        self.leaves = [
            hashlib.sha256(json.dumps(s, sort_keys=True).encode()).hexdigest()
            for s in self.leaves
        ]

        self.leaves = [
            self.leaves[i:i + 2] for i in range(0, len(self.leaves), 2)
        ]

        self.leaves = [
            self.leaves[0][0] + self.leaves[0][1]
            if len(self.leaves[0]) == 2 else self.leaves[0][0]
            for self.leaves[0] in self.leaves
        ]
        
        self.build()
    
    def get_root(self) -> str:
        if self.root is None:
                self.build()

        root = json.dumps(self.root, sort_keys=True).encode()
        return hashlib.sha256(root).hexdigest()

```

## Testing the code

Now we will test the code. We will create a list of data and create a merkle tree. We will then print the root node of the tree.

```python

data = [1, 2, 3, 4, 5, 6]
tree = MerkleTree(data)
print(tree.get_root())

# 2d31841e491f3295a524ba874359f2962571516b41d73aa2bfce2df079e7782e

```

## Conclusion

We can now create a merkle tree. We can also get the root node of the tree. This is the first step in creating a merkle proof. In the next article, we will be creating a merkle proof.

## Resources

[Merkle tree Wiki](https://en.wikipedia.org/wiki/Merkle_tree)

[Learning Blockchains by Building One](https://hackernoon.com/learn-blockchains-by-building-one-117428612f46)




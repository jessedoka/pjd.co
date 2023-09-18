---
title: How to implement binary trees in C
date: 2022-12-23
---

## Introduction

Binary trees are a data structure that is used to store data in a hierarchical manner. They are used to store data in a way that is easy to traverse and search. They are used in many applications such as file systems, databases, and compilers. In this article, we will learn how to implement binary trees in C.

## Implementation

We will implement a binary tree in C using a struct. The struct will have a value, a pointer to the left child, and a pointer to the right child. We will also implement a function to create a new node. The function will take a value and return a pointer to the new node.

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node *left;
    struct node *right;
} node;

node *createNode(int data) {
    node *newNode = (node *)malloc(sizeof(node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}
```
### Inserting a node

We will implement a function to insert a node into the tree. The function will take a pointer to the root node and a value. The function will return a pointer to the root node. The function will check if the root node is NULL. If it is, it will create a new node and return it. If it is not, it will check if the value is less than the root node's value. If this is true, it will insert the node into the left subtree, otherwise it will insert the node into the right subtree.

```c
node *insertNode(node *root, int data) {
    if (root == NULL) {
        root = createNode(data);
    } else if (data <= root->data) {
        root->left = insertNode(root->left, data);
    } else {
        root->right = insertNode(root->right, data);
    }
    return root;
}
```

### Traversing the tree

When it comes to traversing the tree, there are three ways to do it. We can traverse the tree in order, pre-order, or post-order. 

- In order traversal means that we will traverse the left subtree, then the root node, and then the right subtree. 

- Pre-order traversal means that we will traverse the root node, then the left subtree, and then the right subtree. 

- Post-order traversal means that we will traverse the left subtree, then the right subtree, and then the root node. 

We will implement a function to traverse the tree in order. The function will take a pointer to the root node and print the value of each node.

```c
void inOrder(node *root) {
    if (root == NULL) return;
    inOrder(root->left);
    printf("%d ", root->data);
    inOrder(root->right);
}
```

Try and see if you can implement the other two traversal functions. (⌐■_■)

### Searching for a node

We will implement a function to search for a node in the tree. The function will take a pointer to the root node and a value. The function will return a pointer to the node if it is found, otherwise it will return NULL.

```c
node *searchNode(node *root, int data) {
    if (root == NULL) return NULL;
    if (root->data == data) return root;
    if (data <= root->data) return searchNode(root->left, data);
    else return searchNode(root->right, data);
}
```

### Populating the tree

I am lazy, so I want to populate the tree with random numbers. We will implement a function to populate the tree with random numbers. The function will take a pointer to the root node and a number of nodes to insert. The function will return a pointer to the root node.

```c
#include <time.h>

...

node *populate_tree(node *root, int n, int max) {
    srand(time(NULL));
    for (int i = 0; i < n; i++) {
        int data = rand() % max;
        root = insertNode(root, data);
    }

    return root;
}
```

### Reverse a tree - Bonus (Interview question)

We will implement a function to reverse a tree. The function will take a pointer to the root node and return a pointer to the root node. The function will swap the left and right subtrees of each node.

```c
node *reverseTree(node *root) {
    if (root == NULL) return NULL;
    node *temp = root->left;
    root->left = root->right;
    root->right = temp;
    reverseTree(root->left);
    reverseTree(root->right);
    return root;
}
```

## Conclusion

In this article, we learned how to implement binary trees in C. We learned how to insert a node, traverse the tree, search for a node, and reverse a tree. We also learned how to populate the tree with random numbers. I hope you enjoyed this article. If you have any questions, feel free to ask them on my socials. If you liked this article, please share it with your friends. Thanks for reading!







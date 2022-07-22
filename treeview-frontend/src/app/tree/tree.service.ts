import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  constructor(private httpClient: HttpClient) {}

  getTree() {
    return this.httpClient.get('http://localhost:3000/tree');
  }

  addNode(tree: any, node: any) {
    tree.push({
      name: `Level ${node.depth}`,
      id: Math.random(),
      children: [],
      depth: node.depth,
    });

    return this.httpClient.put('http://localhost:3000/tree', tree).subscribe();
  }

  addChild(tree: any, node?: any) {
    node.children.push({
      name: `Level ${node.depth + 1}`,
      id: Math.random(),
      children: [],
      depth: node.depth + 1,
    });

    return this.httpClient.put('http://localhost:3000/tree', tree).subscribe();
  }

  removeNode(tree: any, node: any) {
    if (tree?.length === 1 && tree[0]?.depth === 1) return;

    for (let i = 0; i < tree.length; i++) {
      if (tree[i].id === node.id) {
        tree.splice(i, 1);
        break;
      }
      if (tree[i].children.length > 0) {
        this.removeNode(tree[i].children, node);
      }
    }

    return this.httpClient.put('http://localhost:3000/tree', tree).subscribe();
  }
}

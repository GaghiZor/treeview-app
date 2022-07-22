import { Component, Input } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input() tree: any = [];

  constructor(private treeService: TreeService) {}

  addNode(node: any) {
    return this.treeService.addNode(this.tree, node);
  }

  addChild(node?: any) {
    return this.treeService.addChild(this.tree, node);
  }

  removeNode(node: any) {
    return this.treeService.removeNode(this.tree, node);
  }
}

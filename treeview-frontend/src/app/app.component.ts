import { Component, OnInit } from '@angular/core';
import { TreeService } from './tree/tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  treeReturn: any = [];

  constructor(private treeService: TreeService) {}

  ngOnInit(): void {
    this.treeService.getTree().subscribe(tree => {
      this.treeReturn = tree;
    })
  }
}

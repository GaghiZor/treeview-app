import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { TreeService } from './tree.service';

@Controller('tree')
export class TreeController {

    constructor(private treeService: TreeService) {}

  @Get()
  getTree() {
    return this.treeService.getTree();
  }

  @Put()
  updateTree(
    @Body() tree: any,
  ) {
    this.treeService.updateTree(tree);
    return null;
  }
}

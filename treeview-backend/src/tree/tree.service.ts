import { Injectable } from '@nestjs/common';

@Injectable()
export class TreeService {
  private treeStructure = [
    {
      name: 'Level 1',
      id: Math.random(),
      depth: 1,
      children: [
        {
          name: 'Level 2',
          id: Math.random(),
          depth: 2,
          children: [
            {
              name: 'Level 3',
              id: Math.random(),
              depth: 3,
              children: [
                {
                  name: 'Level 4',
                  id: Math.random(),
                  depth: 4,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Level 1',
      id: Math.random(),
      depth: 1,
      children: [],
    },
  ];

  getTree() {
    return [...this.treeStructure];
  }

  async updateTree(tree: any) {
    this.treeStructure = [...tree];
  }
}

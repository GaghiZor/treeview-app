import { TreeService } from './tree.service';
export declare class TreeController {
    private treeService;
    constructor(treeService: TreeService);
    getTree(): {
        name: string;
        id: number;
        depth: number;
        children: {
            name: string;
            id: number;
            depth: number;
            children: {
                name: string;
                id: number;
                depth: number;
                children: {
                    name: string;
                    id: number;
                    depth: number;
                    children: any[];
                }[];
            }[];
        }[];
    }[];
    updateTree(tree: any): any;
}

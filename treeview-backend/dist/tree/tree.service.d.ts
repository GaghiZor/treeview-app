export declare class TreeService {
    private treeStructure;
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
    updateTree(tree: any): Promise<void>;
}

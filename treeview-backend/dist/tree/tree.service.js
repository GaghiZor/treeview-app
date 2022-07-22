"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeService = void 0;
const common_1 = require("@nestjs/common");
let TreeService = class TreeService {
    constructor() {
        this.treeStructure = [
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
    }
    getTree() {
        return [...this.treeStructure];
    }
    async updateTree(tree) {
        this.treeStructure = [...tree];
    }
};
TreeService = __decorate([
    (0, common_1.Injectable)()
], TreeService);
exports.TreeService = TreeService;
//# sourceMappingURL=tree.service.js.map
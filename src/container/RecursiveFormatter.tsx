import React from 'react'


interface type {
    topicId: number;
    topicType: Array<string>;
    bstLabel: string;
    branch: Tree;
}
type Tree = Array<string>

function RecursiveFormatter({branch}:type) {
    return (
        <div>
            
        </div>
    )
}

export default RecursiveFormatter
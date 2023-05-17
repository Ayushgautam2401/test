import { useState, Fragment, useMemo } from 'react'
import './style.scss'

export interface TreeBranch {
	id: string
	label: string
	branches?: Tree
	selected?: boolean
}
type Tree = Array<TreeBranch>



interface TreeItemProps {
	id: string
	label: string
	isSelected: boolean | undefined
	children: Array<JSX.Element>
	isRoot: boolean;
}

export interface RecursiveTreeProps {
	list: Tree
}

const TreeItem = ({ label, isSelected, children, isRoot }: TreeItemProps) => {
	const [isOpen, toggleItemOpen] = useState<boolean | null>(null)
	const [selected, setSelected] = useState(isSelected)
	
	return (
		<div>
			<div
				onClick={() => {
					setSelected(!selected)
					toggleItemOpen(!isOpen)
				}}
			>
				<div style={{background: isRoot ? 'blue' : "" }}>{label}</div>
			</div>
			<div style={{ paddingLeft: 10}}>{isOpen && children}</div>
		</div>
	)
}

const RecursiveTree = ({ list }: RecursiveTreeProps) => {
	const createTree = (branch: TreeBranch, isRoot: boolean) =>
		branch.branches && (
			<TreeItem
				id={branch.id}
				key={branch.id}
				isSelected={branch.selected}
				label={branch.label}
				isRoot={isRoot}
			>
				{branch.branches.map((branch: TreeBranch) => {
					return <Fragment key={branch.id}>{createTree(branch,false)}</Fragment>
				})}
			</TreeItem>
		)

	return (
		<div>
			{list.map((branch: TreeBranch, i: any) => (
				<div key={i}>{createTree(branch, true)}</div>
			))}
		</div>
	)
}

export default RecursiveTree;
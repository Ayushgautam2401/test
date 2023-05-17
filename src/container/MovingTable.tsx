import React from 'react'
import { StaticTable } from './EkorTable'
import './style.scss'

interface Props {
    head?: string;
}
const Head1 = ({ head }: Props) => {
    return (
        <div >{head}</div>
    )
}
function MovingTable() {
    return (
        <div className='Main'>
            <StaticTable header='Ayush' />
            <StaticTable header='Ayushq' />
            <div className='top'>
                <div className='header'>
                <Head1 head='raka' />
                <Head1 head='raka' />
                <Head1 head='raka' />
                <Head1 head='raka' />
                </div>
                <div className='Center'>
                    <div className='Container'>
                        <div>Container1</div>
                        <div>Container1</div>
                        <div>Container1</div>
                        <div>Container1</div>
                        <div>Container1</div>
                        <div>Container1</div>
                        <div>Container1</div>
                        <div>Container1</div>
                    </div>
                    <div className='Container'>
                        <div>Container2</div>
                        <div>Container2</div>
                        <div>Container2</div>
                        <div>Container2</div>
                        <div>Container2</div>
                        <div>Container2</div>
                        <div>Container2</div>
                        <div>Container2</div>
                    </div>
                    
                    <div className='Container'>
                        <div>Container3</div>
                        <div>Container3</div>
                        <div>Container3</div>
                        <div>Container3</div>
                        <div>Container3</div>
                        <div>Container3</div>
                        <div>Container3</div>
                        <div>Container3</div>
                    </div>
                    <div className='Container'>
                        <div>Container3.1</div>
                        <div>Container3.1</div>
                        <div>Container3.1</div>
                        <div>Container3.1</div>
                        <div>Container3.1</div>
                        <div>Container3.1</div>
                        <div>Container3.1</div>
                        <div>Container3.1</div>
                    </div>
                </div>
            </div>
            <StaticTable header='Ayushs' />
            <StaticTable header='Ayush1' />
        </div>
    )
}

export default MovingTable
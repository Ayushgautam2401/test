import './style.scss'

interface Coustom {
    header?: string;
    // header?: string;
}
export const StaticTable = ({ header }: Coustom) => {
    return (
        <div className='alignItem'>
            <div className='header'>{header}</div>
            <div>Container0</div>
            <div>Container0</div>
            <div>Container0</div>
            <div>Container0</div>
            <div>Container0</div>
            <div>Container0</div>
            <div>Container0</div>
            <div>Container0</div>
        </div>
    )
}

export const MovingTable =({ header }: Coustom) =>{
    return(
        <div className='Center'>
                <div className='Container'>
                    <div className='header'>{header}</div>
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
                    <div className='header'>{header}</div>
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
                    <div className='header'>{header}</div>
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
                    <div className='header'>{header}</div>
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
    )
}
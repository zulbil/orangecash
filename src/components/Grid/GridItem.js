import Circle from './Circle'

const GridItem = ({ phoneNumber, index }) => {
    return (
        <tr className={index} id={index}>
            {phoneNumber.map((item, pos) => {
                return <Circle key={pos} index={pos} digit={item} />
            })}
        </tr>
    )
}

export default GridItem

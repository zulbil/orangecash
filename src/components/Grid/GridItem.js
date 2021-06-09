import PropTypes from 'prop-types'
import Circle from './Circle'

const GridItem = ({ phoneNumber }) => {
    return (
        <tr>
            {phoneNumber.map((item, pos) => {
                return <Circle key={pos} digit={item} />
            })}
        </tr>
    )
}

GridItem.prototypes = {
    phoneNumber: PropTypes.array
}

export default GridItem

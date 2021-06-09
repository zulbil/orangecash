import PropTypes from 'prop-types'
import GridItem from './GridItem'

const Grid = ({ phoneNumbers }) => {

    return (
        <div>
            <table className="output mb-4">
                <tbody>
                    {phoneNumbers.map(( item, index) => {
                        return <GridItem key={index} phoneNumber={item} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

Grid.prototypes = {
    phoneNumbers : PropTypes.array
}

export default Grid

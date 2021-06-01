import GridItem from './GridItem'

const Grid = ({ phoneNumbers }) => {

    return (
        <div>
            <table className="output mb-4">
                <tbody>
                    {phoneNumbers.map(( item, index) => {
                        return <GridItem key={index} index={index} phoneNumber={item} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Grid

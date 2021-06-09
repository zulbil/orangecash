import PropTypes from 'prop-types'

const Circle = ({ digit }) => {
    return (
        <td>
            <div className={`circle ${digit.classStyle}`}>{digit.number}</div>
        </td>
    )
}

Circle.prototypes = {
    digit: PropTypes.string
}

export default Circle

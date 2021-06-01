import PropTypes from 'prop-types'

const Circle = ({ digit, index }) => {
    return (
        <td>
            <div className={`circle ${digit.classStyle}`}>{digit.number}</div>
        </td>
    )
}

export default Circle

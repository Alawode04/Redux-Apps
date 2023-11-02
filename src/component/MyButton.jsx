import PropTypes from "prop-types"

const MyButton = ({bgcolor, func, children}) => {

    const style = {
        backgroundColor: bgcolor,
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        marginRight: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
  return (
    <button style={style} onClick={func} >{children}</button>
  )
}

MyButton.propTypes = {
    bgcolor: PropTypes.string,
    children: PropTypes.string,
    func: PropTypes.func,
}
export default MyButton;
import PropTypes from 'prop-types'

const Button = ({children,version,type,isDisabled}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>

  )
}
Button.defaultProps={
    version: 'primary',
    isDisabled:false,
    type:'button',
}
Button.propTypes={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled:PropTypes.bool.isRequired
}
export default Button
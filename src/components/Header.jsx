//importing proptypes
import PropTypes from 'prop-types'

const Header = ({text,bgColor,textColor}) => {
    const headerStyle={
        backgroundColor:bgColor,
        color:textColor,
    }
  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}
Header.defaultProps={
    text:'Feedback App',
    bgColor: '#f7fff7',
    textColor:'#fe5f55'
}
Header.propTypes ={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}

export default Header
 import PropTypes from 'prop-types'

 //children prop refers to the tags or elements under the card div
 
 const Card = ({children,reverse}) => {
   return (
       //conditional styling if they prop 'reverse' is true then apply the reverse class
     <div className={`card ${reverse && 'reverse' }`}>{children}</div>
   )
 }
Card.defaultProps={
    reverse:false
}

Card.propTypes={
  children: PropTypes.node.isRequired,
  reverse : PropTypes.bool,
}
 
 export default Card
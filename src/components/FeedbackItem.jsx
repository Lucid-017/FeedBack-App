import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedBackContext from './context/FeedBackContext'

//the item paramter represents the item attribute passed in the feedback list component
const FeedbackItem = ({item}) => {
  const {deleteFeedback,editFeedback}=useContext(FeedBackContext)
     return (
    <Card>
       <div className="num-display">{item.rating}</div> 
       {/* //on click console log the items id */}
       <button onClick={()=> deleteFeedback(item.id)} className="close">
         <FaTimes color='#fe5f55'/>
         </button>
         <button onClick={()=>editFeedback(item)} className="edit">
           <FaEdit color='#fe5f55'/>
         </button>
       <div className="text-display">
           {item.text}
        </div>
    </Card >
  )
}

FeedbackItem.propTypes={
  item: PropTypes.object.isRequired,
}
export default FeedbackItem 
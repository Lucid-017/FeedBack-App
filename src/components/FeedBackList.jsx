import {FaTimes} from 'react-icons/fa'
import { motion,AnimatePresence } from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react'
import FeedBackContext from './context/FeedBackContext'


const FeedBackList = () => {
  //NOTE inserting the feedbackcontext componenet into feedbacklist 
  const {feedback} = useContext(FeedBackContext)
    //if theresno feedback or feedback is ===0 
    if(!feedback || feedback ===0){
        return <p>No Feedback Yet!</p>
    }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item)=>(
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          key={item.id}>
            <FeedbackItem key={item.id} item={item} />
           </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
  // return (
  //   <div className="feedback-list">
  //       {feedback.map((item)=>(
  //          <FeedbackItem key={item.id} item={item} 
  //          handleDelete={handleDelete}/>
  //       ))}
  //   </div>
  // )
}

//NOTE while using the "usecontent" hook ,defining proptypes is no longer necessary
// FeedBackList.propTypes={
//   feedback:PropTypes.arrayOf(
//     PropTypes.shape({
//       id:PropTypes.number,
//       text:PropTypes.string.isRequired,
//       rating:PropTypes.number.isRequired,
//     })
//   )
// }
export default FeedBackList
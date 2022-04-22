import { useContext } from 'react'
import FeedBackContext from './context/FeedBackContext'


const Feedbackstats = () => {
    // inserting the feedbackcontext componenet into feedbacklist 
    const {feedback} = useContext(FeedBackContext)
    //calculate average
    let average= feedback.reduce((acc,cur)=>{
        return acc + cur.rating / feedback.length
    },0)
  return (
    <div className="feedback-stats">
        <h4>{feedback.length}: reviews</h4>
        <h4>Average rating : {average} </h4>
        </div>
  )
}


export default Feedbackstats
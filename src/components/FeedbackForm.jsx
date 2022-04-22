import {useState,useContext,useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedBackContext from './context/FeedBackContext'


const FeedbackForm = () => {
    const [text,setText]=useState('')
    //set state for btn disabled
    const [btnDisabled,setbtnDisabled]=useState(true)
    //set state for error message
    const [message,setMessage]=useState('')
    //create a state for rating buttons
    // y are we creating a state all the time? well any even that gets updated needs a based state to work
    const [rating,setRating]= useState(10)

    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedBackContext)

    useEffect(()=>{
        // NOTE run a check to see if edit is === true ;that is if the edit button is clicked
        if(feedbackEdit.edit === true){
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            setbtnDisabled(null)
        }
        /* NOTE note that the rating does not change? that beacuse the rating select is its own component
        so you'll have to import use context and use effect into the ratinhg component
        and apply changes from there 
        */
    },[feedbackEdit])
    function handleTextOnChange(e){
        
        if(text ===''){
            setbtnDisabled(true)
            setMessage(null)
        }else if (text !== '' && text.trim().length<=10){
            setMessage('text must be more than 10 characters')
            setbtnDisabled(true)
            
        }else{
            setMessage(null)
            setbtnDisabled(false)
            
        }
        setText(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(text.trim().length >10 ){
            //if text is greater than 10 carcters then run th ehandle submit block
            //create a feedback object
            const newFeedback ={
                text,
                //shorthand for text: text;
                rating,
            }

            if(feedbackEdit.edit===true){
                // NOTE that is if the edit mode is on
                updateFeedback(feedbackEdit.item.id,newFeedback)
                // this adds the prop of id  
            }else{
                addFeedback(newFeedback) 
            }
            
            console.log(newFeedback)
            setText('')
        }
        
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate us?</h2>
            {/* select is a prop for the ratingselect component */}
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange={handleTextOnChange} value={text} placeholder='write a review' />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>    
    </Card>
  )
}

export default FeedbackForm
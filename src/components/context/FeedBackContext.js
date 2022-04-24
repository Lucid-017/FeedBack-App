// here we will create a context that will help us to pass data through components
// first import createcontext
import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'

// now asign a variable and set that to create context
const FeedBackContext=  createContext()
// now create a "provider"
//the children prop refers to all our components that will need access to our context 
export const FeedBackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:'Thor Odinson',
            rating:10
        },
        {
            id:2,
            text:'Iron Man',
            rating:9
        }
        ,
        {
            id:3,
            text:'Hulk',
            rating:10
        }
    ])
    
    const [feedbackEdit,setFeedbackEdit]=useState([
        {
            item:{},
            edit:false,
        }
    ])
    // delete feedback
    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure?')){
          setFeedback(feedback.filter((item)=>item.id !== id))
        }
      } 
    //   add feedback
      const addFeedback =(newFeedback)=>{
        newFeedback.id=uuidv4()
        //NOTE when adding or appending to a list or set of items,always remember to include the exist set of items using the spread operator
        setFeedback([newFeedback,...feedback])
      }
    // set item to be updated 
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    // update feedback item
    const updateFeedback = (id,updatedItem)=>{
        // call setfeedback with the newly updated
        setFeedback(feedback.map((item)=>item.id === id?{...item,...updatedItem}:item))
        /*if the id is equal to the id thats being called
            if so then you spread across the current item using a spread operator
            along with the newly updated item using a tenary operator
        */
    }
    return(
        /*any value that wants to be passed in,like state or any functions to use 
        are going to into a prop called 'Value'
        */
        <FeedBackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
            
        }}>
            {children}
        </FeedBackContext.Provider>
    )
}
export default FeedBackContext
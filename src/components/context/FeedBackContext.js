// here we will create a context that will help us to pass data through components
// first import createcontext
import { createContext,useState,useEffect } from "react";
import {v4 as uuidv4} from 'uuid'

// now asign a variable and set that to create context
const FeedBackContext=  createContext()
// now create a "provider"
//the children prop refers to all our components that will need access to our context 
export const FeedBackProvider=({children})=>{
    const [isLoading,setIsLoading]= useState(true)
    const [feedback,setFeedback]=useState([])
    
    const [feedbackEdit,setFeedbackEdit]=useState([
        {
            item:{},
            edit:false,
        }
    ])
    // use useeffect to get data from database
    useEffect(()=>{
        fetchFeedback()
    },[])
    
    // fetch feedback
    const fetchFeedback = async () =>{
        /*NOTE by adding proxy we can omit the "http://localhost:5000" 
                from our fetch request because our updated package.json
                now includes a proxy file that connects with the database for us
*/
        const response = await fetch(
            '/feedback?_sort=id&_order=desc'
            )
        const data= await response.json()
        setFeedback(data)
        setIsLoading(false)
    }
    // delete feedback
    const deleteFeedback= async (id)=>{
        if(window.confirm('Are you sure?')){
            /*TODO when handlimg a delete request you dont need to store the await
            in a response variable,and also no headers or body is not mandatory */
              await fetch(`/feedback/${id}`,{
                method:'DELETE'
            })
          setFeedback(feedback.filter((item)=>item.id !== id))
        }
      } 
    //   add feedback
      const addFeedback = async (newFeedback)=>{
        //   
        const response =await fetch('/feedback',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newFeedback)
        })
        const data = await response.json()
        
        /*because of the way json server works we wont be adding iD's manually anymore
        beacuse like most databases,the serves creates the id automatically
         */
        // newFeedback.id=uuidv4()
        //NOTE when adding or appending to a list or set of items,always remember to include the exist set of items using the spread operator
        setFeedback([data,...feedback])
      }
    // set item to be updated 
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    // update feedback item
    const updateFeedback = async (id,updatedItem)=>{
        /*we update the server 
        we get the response back (data) which is the updated item*/
        const response = await fetch(`/feedback/${id}`,{
            method: "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        const data =await response.json()
        // call setfeedback with the newly updated item from the server request
        setFeedback(feedback.map((item)=>item.id === id?{...item,...data}:item))
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
            isLoading, 
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
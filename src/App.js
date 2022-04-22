//NOTE uuid  is apackage that can be instaalled in npm,it can be used to generate unique ids for sets of items

import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import AboutPage from './components/pages/AboutPage'
import FeedbackStats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter as Router, Route,Routes,NavLink} from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';
import { FeedBackProvider } from './components/context/FeedBackContext';

const App = () => {
  //NOTE the array takes in first the name of the current state and the second is a function to update the state
    // const [Feedback,setFeedback]=useState(FeedbackData)
    //NOTE the usestatefunction takes in the deafult data you want for this piece of state 
    //NOTE right now feeback is = feedbackData that was imported 
  return (
    <FeedBackProvider>
      
      <Router>
        <Header text='Feedback App'/>
        <div className="container"> 
          <Routes>
            <Route exact path='/' element={
              <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedBackList/>
            
              </>
            }>
              </Route>

            <Route path='/about' element={<AboutPage/>} />
          </Routes>
          {/* <Card>
            {/* using active links class *
            <NavLink to={'/'} activeClassName={'active'}>
              <span>Home</span>
            </NavLink>
            <NavLink to={'/about'} activeClassName={'active'}>
             <span>About</span> 
            </NavLink>
          </Card> */}
          <AboutIconLink/>
        </div>
        
      </Router>
    
    </FeedBackProvider>
  
  )
}

export default App
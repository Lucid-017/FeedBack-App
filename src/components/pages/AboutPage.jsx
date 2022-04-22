import Card from "../shared/Card"
import { Link } from 'react-router-dom'
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>This is a react app that displays users inputs in form of a feedback</p>
        <p>version 1.0.0</p>
        <p>
          <Link to='/'>back home</Link>
        </p>
        
      </div>
    </Card>
  )
}

export default AboutPage
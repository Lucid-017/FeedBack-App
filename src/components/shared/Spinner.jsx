import spinnergif from '../assets/spinner.gif'

const Spinner = () => {
  return <img src={spinnergif} alt='loading' style={
      {width:"100px",margin:"auto",display:"block"}
    }/>
}

export default Spinner
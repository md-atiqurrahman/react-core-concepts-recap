import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadComments></LoadComments>
     <District name='Noahakali' special='bivag'></District>
     <District name='Brammonbriya' special='lati sota'></District>
     <District name='Comilla' special='Moyna and moti'></District>
    </div>
  );
}
function LoadComments(){
  const [comments,setComments] = useState([])

  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  },[])
  return (
    <div>
      <h1>Comments: {comments.length}</h1>
      {
        comments.map(comment => console.log(comment))
      }
      {
        comments.map(comment => <Comment name={comment.name} body={comment.body}></Comment>)
      }
    </div>
  )
};
function Comment(props){
  return (
    <div style={{backgroundColor: 'lightblue',margin:'10px',padding:'15px'}}>
      <h3>Name: {props.name}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}
const districtStyle = {
  backgroundColor: 'lightpink',
  margin: '15px',
  padding: '15px',
  border: '1px solid gray'
}
function District(props){
  const [power,setPower] = useState(1)

  const boostPower = () => setPower(power * 2);
  return (
    <div style={districtStyle}>
      <h1>Name: {props.name}</h1>
      <p>Speciality: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  )
}
export default App;

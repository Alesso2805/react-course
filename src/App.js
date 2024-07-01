import './App.css';

function App() {
  return (
      <div className="App">
        <Job salary={90000} position="Senior SDE" company="Amazon"/>
        <Job salary={12000} position="Junior SDE" company="Google"/>
        <Job salary={10000} position="Project Manager" company="Netflix"/>
      </div>
);
}

const Job = (props) => {
  return <div>
    <h1>Salary: {props.salary}</h1>
    <h1>Position: {props.position}</h1>
    <h1>Company: {props.company}</h1>
  </div>
}


const User = (props) => {   //props to create reusable components
  return <div><h1> {props.name} </h1> <h1>{props.age}</h1> <h1>{props.email}</h1></div>
}

const GetName = ()  => {
  return "Alessandro"; //this is just a variable
}

const GetNameComponent = ()  => {
  return <h1>Alessandro</h1>; //this is a react component
}

export default App;

import "./App.css";

function App() {
  // const name = 'Pratik';
  // const age = 32;
  // const email = 'pratik123@reactmail.com';
  return (
    <div className="App">
      <User name="Mowglee" age={33} email="mowgli@mail.com" />
      <User name="Bagheera" age={30} email="Baheera@mail.com" />
      <User name="Baloo" age={31} email="Baloo@mail.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1> <br/>
    </div>
  );
};

export default App;

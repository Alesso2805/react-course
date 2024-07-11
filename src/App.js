import './App.css';
import {Person} from './components/Person';

function App() {

  return (
    <div className="App">
      <Person
      name="Alessandro"
      email="alessandrodp2222@gmail.com"
      age={21}
      isMarried={false}
      friends={["andre", "mario", "josh", "tyler"]}
      >
      </Person>
    </div>
  );
}

export default App;

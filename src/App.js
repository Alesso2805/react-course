import styles from './App.module.css';
import { User } from './User'
import { Planets } from './Planets'

function App() {
    const planets  = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true},
    ];

  return (
      <div className={styles.App}>
          {planets.map((planet, key) => {
              if (planet.isGasPlanet === true){
                  return <Planets name={planet.name}/>;
              }
          })}
      </div>
  );
}

export default App;

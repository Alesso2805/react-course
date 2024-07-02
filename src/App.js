import styles from './App.module.css';

function App() {
    const names  = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"];

  return (
      <div className={styles.App}>
          {names.map((name, key) => {
              return <h1 key={key}> {name} </h1>
          })}
      </div>
);
}

export default App;

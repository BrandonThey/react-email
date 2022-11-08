import './App.css';
import NavBar from './components/NavBar/NavBar';
import AppDisplay from './containers/AppDisplay/AppDisplay';

function App() {
  return (
    <div className="App">
      <section className='NavBar'>
        <NavBar />
      </section>

      <section className='AppDisplay'>
        <AppDisplay />
      </section>
    </div>
  );
}

export default App;

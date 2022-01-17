//Components

import TableComponent from './components/TableComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Franklin Fontalvo test in React
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please, run the migrations in the backend folder
        </p>
       
      </header>

      <TableComponent />


    </div>
  );
}


export default App;

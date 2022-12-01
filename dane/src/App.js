import './App.css';
import SimpleComponent from './SimpleComponent';
import PropsComponent from './PropsComponent';

import PersonOverview from './PersonOverview';
import PersonDetails from './PersonDetails';

function App() {

  const person = {
    forename: 'William',
    surname: 'Carrillo',
    age: 47,
    telephone: '856-924-4005',
    city: 'New Jersey'
  }

  return (
    <div className="App">
      {/*
      <SimpleComponent />
      <PropsComponent title="MyTitle" age={25} />
  */}
  
      <div className="Person">
        <PersonOverview person={person} />
      </div>
      <div className="Person">
        <PersonDetails person={person} />
      </div>
  
    </div>
  );
}

export default App;

import './App.css';
import User from './components/User';
import UserDetails from './components/UserDetails';
import ClassComp from './components/ClassComp';
import Classexercise from './components/ClassExercise';
import Counter from './components/Counter';
import Checkboxes from './components/Checkboxes';
import Inputs from './components/Inputs';

function App() {

  const userId = "18012021083"

  return (
    <div className="App">
      {/* <User userId={userId} />
      <hr />

      <UserDetails userId={userId} />
      <hr />

      <ClassComp />

      <hr /> */}
      <Classexercise />
      
      <hr />
      <div className='row'>
        <div className='col-md-4'>
          <Counter />
        </div>
        <div className='col-md-4'>
          <Checkboxes />
        </div>
        <div className='col-md-4'>
          <Inputs />
        </div>

      </div>
    </div>
  );
}

export default App;

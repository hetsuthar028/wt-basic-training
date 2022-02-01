import './App.css';
import User from './components/User';
import UserDetails from './components/UserDetails';
import ClassComp from './components/ClassComp';
import Classexercise from './components/ClassExercise';

function App() {

  const userId = "18012021083"

  return (
    <div className="App">
      <User userId={userId} />
      <hr />

      <UserDetails userId={userId} />
      <hr />

      <ClassComp />

      <hr />
      <Classexercise />
    </div>
  );
}

export default App;

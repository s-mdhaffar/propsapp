import './App.css';
import Profile from './profile/Profile';

function App() {
  const user = {
    fullName : "Elon Musk",
    bio : "Tesla Space X ...",
    profession : "Entrepreneur"
  }
  return (
    <div className="App">
      <Profile prof = {user}>
        <h1>This is :</h1>
        <img src="/elonMusk.jpg" alt="myimage" />
      </Profile>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react'
import GetUserComponent from './components/GetUserComponent/GetUserComponent';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn ? <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> : <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/>}
      </header>
    </div>
  );
}

export default App;

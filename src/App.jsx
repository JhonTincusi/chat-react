import Chat from '../components/Chat'
import SendMessage from '../components/SendMessage'
import Profile from '../components/Profile'
import './App.css'


function App() {


  return (
    <div className="App">
      <div className="User-app">
        <Profile/>
      </div>
      <div className='Chat-app'>
        <Chat/>
        <SendMessage/>
      </div>
      
    </div>
  )
}

export default App



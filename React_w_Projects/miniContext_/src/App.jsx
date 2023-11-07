import './App.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile'

export default function App() {

  return (
     <UserContextProvider>
      <h1> React with Context API </h1>
      <Login/>
      <Profile/>
     </UserContextProvider>

  )
}

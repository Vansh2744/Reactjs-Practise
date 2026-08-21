import './App.css'
import Child1 from './Child1'

function App() {
  const user = {
    name: "Vansh",
    email: "vansh@gmail.com",
    username: "vansh2744"
  }
  return (
    <>
      <Child1 user={user} />
    </>
  )
}

export default App

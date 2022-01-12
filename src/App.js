import './App.css';
import SignIn from './Pages/signIn';
import Premium from './Pages/premium';
import { Route, Routes} from "react-router-dom"

const MyRoutes = 
  <Routes>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/premium" component={Premium} />
  </Routes>


function App() {
  return (
    <div className="App">
      <SignIn  />
      {/* <Premium />*/}
    </div>
  );
}

export default App;
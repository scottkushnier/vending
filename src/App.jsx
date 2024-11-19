
import './App.css'
import Book from './Book'
import Cat from './Cat'
import Dog from './Dog'

import { Link, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <p> here, there, more</p>
         <Router>
            <Route path="/">
              <Book />
            </Route>
            <Route path="/cat">
              <Cat />
            </Route>
            <Route path="/dog">
              <Dog/>
            </Route>
            <Link to="/cat">Go to Cat</Link>
         </Router>  
    </>
  )
}

export default App

      https://github.com/scottkushnier/vending.git
      
     
      

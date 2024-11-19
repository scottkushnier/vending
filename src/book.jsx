
import './App.css'
import Book from './Book'

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <p> here, there, more</p>
         <Router>
            <Route path="/">
              <Book />
            </Route>
         </Router>
      
  
    </>
  )
}

export default App

      

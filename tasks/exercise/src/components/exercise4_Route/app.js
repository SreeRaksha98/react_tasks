import * as React from "react"
import About from "./Components/About.js"
import Home from "./Components/Home.js"
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <div>
            <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                </ol>
            <hr />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
            </Routes>
            </div>
        </Router>
    )
}

export default App
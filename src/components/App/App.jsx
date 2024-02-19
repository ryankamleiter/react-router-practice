import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About.jsx/About.jsx';
import Home from '../Home.jsx/Home.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">GitHub Student List</h1>
                </header>
                <div>
                <ul>
                <li>
                    <Link to="/home">Home</Link>
                    </li>
                    <li>
                    <Link to="/allStudents">Student list</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    
                </ul>
                </div>
                <br />
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/allStudents">
                <p>Student list:</p>
                    <StudentList />
                </Route>

                <Route path="/about" exact>
                    <About />
                </Route>
            </div>
        </Router>
    );
}

export default App;

import React from "react"
import {useHistory} from 'react-router-dom'
import StudentForm from "../StudentForm/StudentForm";

function Home() {
    const history = useHistory()

    const handleStudentAdded = () => {
        alert("Going to see student list");
        history.push('/allStudents');
    };

    return(
        <div>
            <h2>Home</h2>
            <StudentForm onClick={handleStudentAdded} />
            <button onClick={handleStudentAdded}>Go to Student List</button>
        </div>
    )
}

export default Home
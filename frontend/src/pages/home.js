import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        const fetchWorkouts = async () => {
            //fetch data from server 
            const response = await fetch('/api/workouts');
            // parse json into the response object
            const json = await response.json();
            // if succeed, the json should contain workout object
            // check if response is ok
            if (response.ok) {
                setWorkouts(json)
            }
            

        }
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((i) => (
                    <WorkoutDetails key={i._id} workout={i}/>
                ))}

                <WorkoutForm/>
            </div>
        </div>
    )
}

export default Home
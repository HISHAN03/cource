import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AppBar from "../../components/Appbar";
import axios from "axios";

function Courses() {
    const [courses, setCourses] = useState([]);

    const init = async () => {
        const response = await axios.get(`api/courses`)
        setCourses(response.data.courses)
    }

    useEffect(() => {
        init();
    }, []);
    
    return (
    <div>

        <AppBar />
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center",marginTop:"60px"}}>
        {courses.map(course => {
            return <Course course={course} />}
            )}
    </div>
            </div>)
}

export function Course({course}) {


    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}} ></img>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" onClick={() => {
            }}>Edit</Button>
        </div>
    </Card>

}

export default Courses;
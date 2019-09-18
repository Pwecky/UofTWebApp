import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Paper, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(themes => ({
    root: {

    },
    paper: {
        textAlign: 'center'
    }
}));

export default function CourseLookup(props) {
    const classes = useStyles();
    /* States */
    const [courseData, setCourseData] = useState(null);
    const [courseCode, setCourseCode] = useState(null);
    const [courseList, setCourseList] = useState(null);

    /* Function definitions */
    const getCourseList = () => {
        axios.get('/get_course_list')
            .then(response => {
                setCourseList(response.data)
        });
    };

    const getCourseData = (courseCode) => {
        fetch(`http://localhost:5000/get/${courseCode}`)
            .then(response => {
                response.json().then(data => {
                    setCourseData(data);
                });
        }).catch(error => {
            console.log(error);
        });
    };

    const handleChange = value => {
        setCourseCode(value);
    };

    const handleSubmit = () => {
        getCourseData(courseCode)
    };

    /* ComponentDidMount */
    useEffect(() => {
        getCourseList();
    }, []);

    /* Render logic */
    return <div className={classes.root}>
        <TextField
            component="div"
            value={courseCode || ""}
            onChange={event => handleChange(event.target.value)}
        />
        <Button href="" onClick={handleSubmit}>Search</Button>
        {courseData && (
            <Paper className={classes.paper}>
                {courseData.map(value => {
                    return <div>{value}</div>;
                })}
            </Paper>
        )}
    </div>;
}
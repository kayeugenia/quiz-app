"use client";

import React, {useState} from 'react';
import { courseData } from './courseData';
import './courseCard.css';
import styled from 'styled-components';

const ClickButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px 2px;
    cursor: pointer;
`;

const PopupCard = styled.div`
    width: 50vw;
    min-width: 320px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    font-size: 24px;
    font-weight: 600;
    max-height: 85vh;
    overflow: scroll;
    border-radius: 10px;
`;

const CourseInfo = styled.div`
    padding: 10px 0 10px 0;
    text-align: justify;
    text-justify: inter-word;
    font-size: 15px;
    font-weight: 400;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
`;

// Define Popup component
const CustomPopup = ({ onClose, course }) => (
    <Overlay>
        <PopupCard>
            {course.image && <img src={`/${course.image}`} width="60%" alt="Course Image" />}
            <div>{course.name}</div>
            <div style={{textAlign: "left", marginTop: "20px", fontSize: "20px"}}>
                <h5>Course Description:</h5>
            </div>
            <CourseInfo>{course.summary}</CourseInfo>

            {course.assignment && <div style={{textAlign: "left", marginTop: "20px", fontSize: "20px"}}>
                <h5>Past Assignments:</h5>
            </div>}
            {course.assignment && <CourseInfo>{course.assignment}</CourseInfo>}

            {course.interesting && <div style={{textAlign: "left", marginTop: "20px", fontSize: "20px"}}>
                <h5>Interesting Aspect:</h5>
            </div>}
            {course.interesting && <CourseInfo>{course.interesting}</CourseInfo>}
            <ClickButton onClick={onClose}>Close</ClickButton>
        </PopupCard>
    </Overlay>
);

// Helper function to find course data with flexible course code matching
const findCourseData = (courseID) => {
    const courseKey = getStandardCourseKey(courseID);
    return courseData[courseKey] || null;
};

// Helper function to get the course key in courseData
export const getStandardCourseKey = (courseID) => {
    // Try exact match first
    if (courseData[courseID]) {
        return courseID;
    }
    
    // If not found and courseID contains "/", try swapped version
    if (courseID.includes('/')) {
        const [part1, part2] = courseID.split('/');
        const swappedID = `${part2}/${part1}`;
        if (courseData[swappedID]) {
            return swappedID;
        }
    }
    
    // Return original courseID if not found in courseData
    return courseID;
};

export const CourseCard = ({courseID}) => {
    const course = findCourseData(courseID);
    const [isShownCourseInfo, setIsShownCourseInfo] = useState(false);
    const togglePopup = () => {
        setIsShownCourseInfo(!isShownCourseInfo);
    };

    // Handle case where course is not found
    if (!course) {
        return (
            <div className="course-card">
                <div className="course-details">
                    <div className="course-title">{courseID}: Course data not available</div>
                </div>
            </div>
        );
    }

    return (
        <div className="course-card">
        <div className="course-details" onClick={togglePopup}>
            <div className="course-title">{courseID}: {course.name}</div>
            <div className="course-info">Taught by {course.prof}</div>
            <div className="course-type">{course.type}</div>
            {isShownCourseInfo && <CustomPopup onClose={togglePopup} course={course}/>}
        </div>
        <div className='icon-container' onClick={togglePopup}>
            <img src="/fullscreen.png" width="20px"></img>
        </div>
        </div>
    );
};  
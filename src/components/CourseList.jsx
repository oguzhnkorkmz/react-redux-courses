import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCourse } from '../store/slices/courseSlice';

function CourseList() {
    const dispatch = useDispatch()
    const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
        const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return {
            courses: filteredCourses,
        }
    })

    const renderCourses = courses.map((course, index) => {
        return (
            <div className='panel courses' key={index}>
                <h1 className='course'>Course Name: {course.name}</h1>
                <p className='course'>Course Description: {course.description}</p>
                <p className='course'>Course Price: {course.cost}$</p>
                <button
                    className='button is-danger course'
                    onClick={() => {
                        dispatch(removeCourse(course.id))
                    }}
                >Delete</button>
            </div>
        )
    })
    return (
        <div>
            {renderCourses}
        </div>
    )
}

export default CourseList
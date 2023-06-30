import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeCost, changeDescription } from '../store/slices/formSlice'
import { addCourse } from '../store/slices/courseSlice'

function CourseForm() {
    const dispatch = useDispatch()
    const { name, description, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            description: state.form.description,
            cost: state.form.cost
        }
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addCourse({ name, description, cost }))
    }

    return (
        <div className='courseForm panel'>
            <h4 className='subtitle is-3'>Add Course</h4>
            <form className='addForm' onSubmit={handleSubmit}>
                <div className='fieldGroup'>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <input
                            className='input is-expanded'
                            onChange={(event) => {
                                dispatch(changeName(event.target.value));
                            }}
                            value={name}
                        />
                    </div>
                    <div className='field'>
                        <label className='label'>Description</label>
                        <textarea
                            className='input is-expanded'
                            onChange={(event) => {
                                dispatch(changeDescription(event.target.value));
                            }}
                            value={description}
                        />
                    </div>
                    <div className='field'>
                        <label className='label'>Price</label>
                        <input
                            className='input is-expanded'
                            type='number'
                            onChange={(event) => {
                                dispatch(changeCost(parseInt(event.target.value)));
                            }}
                            value={cost}
                        />
                    </div>
                </div>
                <div className='saveBtn'>
                    <button className='button is-primary'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default CourseForm
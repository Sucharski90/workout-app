import React from 'react'
import { withRouter } from 'react-router-dom'
import Exercise from './Exercise'

function ExerciseList (props) {
  console.log(props)
  return (
    <div className='exercise-list'>
      {props.apiData.map(exercise => {
        return <Exercise key={exercise.id} exercise={exercise} selectExerciseById={props.selectExerciseById} />
      })}
    </div>
  )
}

export default withRouter(ExerciseList)

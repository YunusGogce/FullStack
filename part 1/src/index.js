import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }    

    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total  course={course}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    var parts = [ ]
    props.course.parts.forEach(element => {
        parts.push(<Part partName={element.name} partExercises={element.exercises}/>)
    })

    return (
        <div>
            {parts}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.partName} {props.partExercises}</p>
    )
}

const Total = (props) => {
    let totalExercises = 0
    props.course.parts.forEach(element => {
        totalExercises += element.exercises
    });

    return (
        <div>      
          <p>Number of exercises {totalExercises}</p>
        </div>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))
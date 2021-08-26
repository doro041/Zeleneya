import React from 'react'
import { DisplayName } from '../components/DisplayName/displayName'

//In container we create manipulations with state and pass props to View

export const DisplayNameContainer = (props) => {
    return (
        <DisplayName displayName={props}/>
    )
}
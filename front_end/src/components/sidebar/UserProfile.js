import React, { Component } from 'react'
import './userprofile.css'
import FileUpload from './FileUpload'

export default class UserProfile extends Component {
    render() {
        return (
            <div className='main-user-profile'>
            <FileUpload />
            </div>
        )
    }
}

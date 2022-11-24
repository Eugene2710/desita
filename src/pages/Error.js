import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section>
            <div>
                <h1>Oops! This a dead end!</h1>
                <Link to='/'>
                    Back Home
                </Link>
            </div>
        </section>
    )
}
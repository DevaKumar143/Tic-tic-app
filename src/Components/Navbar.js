import React from 'react'
// import { Link } from 'react-router-dom';


export default function Navbar() {
    
    return (
        <div>
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">TickTick app</a >
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Calender View</ a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Habbit Tracker</a >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Promoto</a >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="Task">Task</a >
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}

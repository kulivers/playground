import React, {Component} from 'react'
import './width-auto.css'
import {Link, BrowserRouter, Route, withRouter, useHistory } from 'react-router-dom'

const WidthAuto = (props) => {
    let history = useHistory();
    console.log(history)
    return (
        <BrowserRouter>
            <div>
                <Route path="/width-100-auto/:any" render={({match, ...props}) => {
                    return (
                        <>
                            <Link to="/">
                                <button>go back</button>
                            </Link>
                            <br/>
                            <Link to={`${match.url}/width-100`}> width 100%</Link>
                            <Link to={`${match.url}/width-auto`}> width-auto</Link>
                        </>
                    )
                }}/>
                <Route path='/width-100' render={p => {
                    return (<div style={{border: '2px red solid'}}>
                            <div className="width-100">div with width:100%; U CAN SCROOL ---></div>
                        </div>
                    )
                }}/>
                <Route path="/width-auto" render={p =>
                    <div style={{border: '2px red solid'}}>
                        <div className="width-auto">div with width:auto; NO SCROLL</div>
                    </div>
                }/>
            </div>
        </BrowserRouter>
    )

}

export default WidthAuto;
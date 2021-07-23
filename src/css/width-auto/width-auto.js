import React, {Component} from 'react'
import './width-auto.css'
import {Link, BrowserRouter, Route, useHistory, withRouter} from 'react-router-dom'

class WidthAuto extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/width-100"> width 100%</Link>
                    <Link to="/width-auto"> width auto</Link>
                    <Route path="/width-100" render={<div className="width-100">div with width:100%</div>
                    }/>
                    {/*<div className="width-auto">div with width:auto</div>*/}
                </div>
            </BrowserRouter>
        )
    }
}

export default WidthAuto;
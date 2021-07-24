import WidthAuto from './css/width-auto/width-auto'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import React from 'react';
import Menu from './Menu'


import Button from '@material-ui/core/Button'


const App = () => {

    return (
        <BrowserRouter>
            <Route exact path="/" component={Menu}/>
            <Route path="/*" render={({match}) => (
                (match.url === '/') ? null : (
                    <div style={{display: 'flex'}}>
                        <Link to="/" style={{margin: 'auto', marginTop: '10px'}}><Button variant="contained"
                                                                                         color="primary">go
                            back</Button></Link>
                    </div>
                )
            )}/>
            <Route path="/width-100-auto-difference" component={WidthAuto}/>
        </BrowserRouter>
    )
}

export default App;



import WidthAuto from './css/width-auto/width-auto'
import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react';
import Menu from './Menu'


const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Menu}/>
            <Route path="/width-100-auto-difference" component={WidthAuto}/>
        </BrowserRouter>
    )
}

export default App;



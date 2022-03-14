import React from 'react';
import {Switch , Route , Redirect , Link} from 'react-router-dom';
import ColorList from './ColorList';
import ColorPage from './ColorPage';

const Routes = ( {color} ) => {
    return (
        <Switch>
            <Route exact path='/colors'>
                <ColorList />
            </Route>
            <Route path = '/colors/:color'>
                <ColorPage color = {color}/>
            </Route>
            <Redirect to = '/colors' />
        </Switch>
    )
}

export default Routes;
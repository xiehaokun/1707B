import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'
import {IRouterProp} from '../utils/interface'


let RouterView: React.FC<IRouterProp> = props=>{
    return <Switch>{
        props.routes.map((item, index)=>{
            if (item.redirect){
                if (item.path == '*'){
                    return <Redirect key={item.path} to={item.redirect}/>
                }
            }
            return <Route key={item.path} path={item.path} render={(renderProps: RouteComponentProps)=>{
                if (item.children){
                    return <item.component routes={item.children} {...renderProps}/>
                }else{
                    return <item.component {...renderProps}/>
                }
            }}></Route>
        })
    }</Switch>
}   


export default RouterView
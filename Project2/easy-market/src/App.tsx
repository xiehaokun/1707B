import React from 'react';

// 引入路由
import {HashRouter} from 'react-router-dom'
import RouterView from './router/RouterView';
import config from './router/router'

function App() {
  return (
    <HashRouter>
      <RouterView routes={config.routes}/>
    </HashRouter>
  );
}

export default App;

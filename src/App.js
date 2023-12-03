import {route} from './route';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {
            route.map((route,index)=>
              <Route
                  key={"route" + index} 
                  path={route.path}
                  element = {route.element}
              />
          )}
        </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;

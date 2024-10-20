
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { QueryClientProvider,QueryClient } from 'react-query';
import {Route,Switch} from "react-router-dom";
import Home from './Components/Home';
import ProductPage from './Components/Product';

const queryClient=new QueryClient();
const App=()=>{
  return(
    <QueryClientProvider client={queryClient}>
    <>
    
   
    <Switch>
    <Route exact component={Header} path="/header"  />
    <Route  exact component={Body} path="/body"/>
    <Route exact component={Home} path="/" />
    <Route exact component={ProductPage} path ="/product"/>
    </Switch> 
    </>
    </QueryClientProvider>
  )
}

export default App;


import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { QueryClientProvider,QueryClient } from 'react-query';

const queryClient=new QueryClient();
const App=()=>{
  return(
    <QueryClientProvider client={queryClient}>
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className='rounded-lg shadow-lg w-full max-w-md'>
     <Header />
     <Body />
     </div>
       

     
    
    </div>
    </>
    </QueryClientProvider>
  )
}

export default App;

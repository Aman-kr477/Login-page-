
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
const App=()=>{
  return(
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className='rounded-lg shadow-lg w-full max-w-md'>
     <Header />
     <Body />
     </div>
       

     
    
    </div>
    </>
  )
}

export default App;

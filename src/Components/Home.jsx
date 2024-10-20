import Header from "./Header"
import Body from "./Body";

const Home=()=>{
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className='rounded-lg shadow-lg w-full max-w-md'>
      
        <Header />
        <Body />
        </div>
           
   
        
       
        </div>
    )
}

export default Home;
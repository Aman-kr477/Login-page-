
const Body=()=>{
    return (
<section className="p-6">
    <form className="space-y-4">
    <input  type="text" 
    placeholder="Enter your name"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
    <input type="email"
     placeholder="Enter your email" 
     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
     />
    <input  type="tel" 
    placeholder="Enter your phone number"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
       <button type="submit"
       className="w-full bg-gradient-to-r from-darkblue to-darkblue  text-white py-2 rounded-2xl hover:bg-blue-700 transition-colors"
       >Get Started</button>
    </form>
</section>
    )
}
export default Body;
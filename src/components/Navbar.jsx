import { ArrowRight } from "react-feather" 
const Navbar = () => {
return (
    <div className="flex header">
     <img src="logo.svg" alt="" className="logo"/>
     <nav>
      <ul className="listed-items">
        <li><a>Home</a></li>
        <li><a>Features</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
      </ul>
     </nav>
     <button className="btn-signin flex gap-1">Sign in <ArrowRight /> </button>
    </div>
  )
}
export default Navbar
const Header = () => {
  return (
    <div className="flex header">
     <span>
      <img src="logo.svg" alt=""/>
      <span>Rails</span>
     </span>
     <nav>
      <ul className="listed-items">
        <li><a>Home</a></li>
        <li><a>Features</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
      </ul>
     </nav>
     <button className="btn">Sign in</button>
    </div>
  )
}
export default Header
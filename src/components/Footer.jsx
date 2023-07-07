import { ArrowRight } from "react-feather"
const Footer = () => {
  return (
    <div id="Footer" className="flex">
      <p>2023 &copy; All rights reserved.</p>
      <div className="contact">
      <h3>Get in touch</h3>
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Message" />
      <button className="btn-start flex gap-1">Send <ArrowRight /></button>
      </div>
      </div>
  )
}
export default Footer
import NavBar from '../../navigation/navigation'
import './style.css'

const About = () => (
  <div className="content">
    <NavBar />
    <div className="about">
      <h1>Thank you for using Bookshop.org!</h1>
      <p>A BETTER WAY TO BUY BOOKS ONLINE</p>
      <span className="left">
        <p>
          <b>Our Mission:</b> To help local, independent bookstores thrive in
          the age of ecommerce.
        </p>
        <p>
          <b>Our Vision:</b> We work to connect readers with independent
          booksellers all over the world. We believe local bookstores are
          essential community hubs that foster culture, curiosity, and a love of
          reading, and we are committed to helping them survive and thrive. Our
          platform gives independent bookstores tools to compete online and
          financial support to help them maintain their presence in local
          communities.
        </p>
      </span>
    </div>
  </div>
)

export default About

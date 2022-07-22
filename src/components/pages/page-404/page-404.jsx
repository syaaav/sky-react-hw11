import NavBar from '../../navigation/navigation'
import './style.css'

const Page404 = () => (
  <div className="content">
    <NavBar />
    <div className="error">
      <h1>Error 404</h1>
      <p>Sorry, the page you’re looking for does not seem to exist.</p>
    </div>
  </div>
)

export default Page404

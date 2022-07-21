import NavBar from '../../navigation/navigation'
import LoginPass from '../../login-password/LoginPass'
import './style.css'

const SingIn = () => (
  <div className="content">
    <NavBar />
    <div className="sign-in">
      <h1>Sing in</h1>
      <LoginPass />
    </div>
  </div>
)

export default SingIn

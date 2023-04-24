import './index.css'

const Login = props => {
  const {onChange} = props
  return (
    <button className="button" type="button" onClick={onChange}>
      Logout
    </button>
  )
}
export default Login

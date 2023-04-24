import './index.css'

const Logout = props => {
  const {onChange} = props
  return (
    <button className="button" type="button" onClick={onChange}>
      Login
    </button>
  )
}
export default Logout

import './index.css'

const TextContent = props => {
  const {text} = props
  return <h1 className="msg">{text}</h1>
}
export default TextContent


const Button = () => {

  const handleClick = (e) => e.target.textContent = "ouch";

  // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  return (
    <button onDoubleClick={(e) => handleClick(e)}>Click Me If You Dare 💀</button>
  )
}

export default Button
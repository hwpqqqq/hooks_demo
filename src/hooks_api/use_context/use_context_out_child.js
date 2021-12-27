import react, { useContext } from 'react'
const themes = {
  light: {
    color: '#ddd',
    background: 'yellow'
  },
  dark: {
    color: '#ffffff',
    background: '#333333'
  }
}
export default function UseContextOutChild(props) {
  const context = useContext(props.theme);
  return (
    <div style={{ color:context.color, background: context.background }}>
      useContextOutChild
    </div>
  )

}


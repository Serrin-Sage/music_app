import Screen from './Screen'
import Circle from './Circle'

const Ipod = () => {
  return (
    <div className='ipod-container'>
      <div className='ipod-shadow'></div>
      <Screen />
      <Circle />
    </div>
  )
}

export default Ipod
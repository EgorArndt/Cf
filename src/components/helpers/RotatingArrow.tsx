import { ArrowLeft as ArrowDown } from '@icons'

const RotatingArrow = ({ isUp }: {isUp: boolean}) => 
    <ArrowDown
        style={{
        transform: `rotate(${isUp ? 90 : -90}deg)`,
        transition: 'ease 0.3s',
        }}
    />

export default RotatingArrow
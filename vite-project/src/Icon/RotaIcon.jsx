export default function RotaIncon({active=false}){
    const color= active?"#F2BE22":"#F4EDEA"

return (
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.5" cy="32.5" r="32.5" fill={color}/>
<path opacity="0.5" d="M32 45.5C38.9036 45.5 44.5 39.9036 44.5 33C44.5 26.0964 38.9036 20.5 32 20.5C25.0964 20.5 19.5 26.0964 19.5 33C19.5 39.9036 25.0964 45.5 32 45.5Z" stroke="#A3A3A3" strokeWidth="1.5"/>
<path d="M32 28V33L35.125 36.125" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>)
}

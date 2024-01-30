export default function VoitureIcon({active=false}){
    const color= active?"#F2BE22":"#F4EDEA"

return (
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.5" cy="32.5" r="32.5" fill={color}/>
<path d="M26.375 45.5C29.4812 45.5 32 39.9037 32 33C32 26.0963 29.4812 20.5 26.375 20.5M26.375 45.5C23.2688 45.5 20.75 39.9037 20.75 33C20.75 26.0963 23.2688 20.5 26.375 20.5M26.375 45.5H37.625C40.7312 45.5 43.25 39.9037 43.25 33C43.25 26.0963 40.7312 20.5 37.625 20.5H26.375" stroke="#A3A3A3" strokeWidth="1.5"/>
<path opacity="0.5" d="M28.25 33C28.25 37.1425 27.41 40.5 26.375 40.5C25.34 40.5 24.5 37.1425 24.5 33C24.5 28.8575 25.34 25.5 26.375 25.5C27.41 25.5 28.25 28.8575 28.25 33ZM28.25 33H27" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round"/>
</svg>)
}

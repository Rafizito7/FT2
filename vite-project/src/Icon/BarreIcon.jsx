export default function BarreIcon({active=false}){
    const color= active?"#F2BE22":"#F4EDEA"

return (
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.5" cy="32.5" r="32.5" fill={color}/>
<path d="M44.5 45.5H19.5" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.5" d="M43.25 45.5V36.125C43.25 35.6277 43.0525 35.1508 42.7008 34.7992C42.3492 34.4475 41.8723 34.25 41.375 34.25H37.625C37.1277 34.25 36.6508 34.4475 36.2992 34.7992C35.9475 35.1508 35.75 35.6277 35.75 36.125V45.5" stroke="#A3A3A3" strokeWidth="1.5"/>
<path d="M35.75 45.5V24.25C35.75 22.4825 35.75 21.5988 35.2 21.05C34.6525 20.5 33.7687 20.5 32 20.5C30.2325 20.5 29.3487 20.5 28.8 21.05C28.25 21.5975 28.25 22.4813 28.25 24.25V45.5" stroke="#A3A3A3" strokeWidth="1.5"/>
<path opacity="0.5" d="M28.25 45.5V29.875C28.25 29.3777 28.0525 28.9008 27.7008 28.5492C27.3492 28.1975 26.8723 28 26.375 28H22.625C22.1277 28 21.6508 28.1975 21.2992 28.5492C20.9475 28.9008 20.75 29.3777 20.75 29.875V45.5" stroke="#A3A3A3" strokeWidth="1.5"/>
</svg>)
}

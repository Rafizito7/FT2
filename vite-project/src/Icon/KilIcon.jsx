export default function KilIcon({active=false}){
    const color= active?"#F2BE22":"#F4EDEA"

return (
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.5" cy="32.5" r="32.5" fill={color}/>
<path d="M23.25 28C25.3211 28 27 26.3211 27 24.25C27 22.1789 25.3211 20.5 23.25 20.5C21.1789 20.5 19.5 22.1789 19.5 24.25C19.5 26.3211 21.1789 28 23.25 28Z" stroke="#A3A3A3" strokeWidth="1.5"/>
<path d="M40.75 45.5C42.8211 45.5 44.5 43.8211 44.5 41.75C44.5 39.6789 42.8211 38 40.75 38C38.6789 38 37 39.6789 37 41.75C37 43.8211 38.6789 45.5 40.75 45.5Z" stroke="#A3A3A3" strokeWidth="1.5"/>
<path opacity="0.5" d="M30.7498 23.3125C30.5012 23.3125 30.2627 23.4113 30.0869 23.5871C29.9111 23.7629 29.8123 24.0014 29.8123 24.25C29.8123 24.4986 29.9111 24.7371 30.0869 24.9129C30.2627 25.0887 30.5012 25.1875 30.7498 25.1875V23.3125ZM33.2498 41.75L33.9123 42.4125C34.0879 42.2367 34.1865 41.9984 34.1865 41.75C34.1865 41.5016 34.0879 41.2633 33.9123 41.0875L33.2498 41.75ZM32.0373 39.2125C31.8596 39.0469 31.6245 38.9567 31.3816 38.961C31.1388 38.9653 30.907 39.0637 30.7353 39.2355C30.5635 39.4072 30.4651 39.639 30.4608 39.8818C30.4565 40.1247 30.5467 40.3598 30.7123 40.5375L32.0373 39.2125ZM30.7123 42.9625C30.5467 43.1402 30.4565 43.3753 30.4608 43.6182C30.4651 43.861 30.5635 44.0928 30.7353 44.2645C30.907 44.4363 31.1388 44.5347 31.3816 44.539C31.6245 44.5433 31.8596 44.4531 32.0373 44.2875L30.7123 42.9625ZM37.1648 23.3125H30.7498V25.1875H37.1648V23.3125ZM33.2498 40.8125H26.8348V42.6875H33.2498V40.8125ZM38.0035 28.0688L24.9898 36.35L25.996 37.9312L39.0098 29.65L38.0035 28.0688ZM33.9123 41.0875L32.0373 39.2125L30.7123 40.5375L32.5873 42.4125L33.9123 41.0875ZM32.5873 41.0875L30.7123 42.9625L32.0373 44.2875L33.9123 42.4125L32.5873 41.0875ZM26.8348 40.8125C25.2723 40.8125 24.6773 38.7712 25.996 37.9312L24.9898 36.35C22.0885 38.1962 23.396 42.6875 26.8348 42.6875V40.8125ZM37.1648 25.1875C38.7273 25.1875 39.3223 27.2288 38.0035 28.0688L39.0098 29.65C41.911 27.8037 40.6035 23.3125 37.1648 23.3125V25.1875Z" fill="#A3A3A3"/>
</svg>)
}
export default function Motor({percent}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 676" fill="none">

    <clipPath id="test">
        <rect width={percent + "%"} height="100%" />
    </clipPath>
    <clipPath id="test2">
        <rect width="100%" height="100%" />
    </clipPath>
    <path
        d="M53.1334 184.511H0V558.629H53.1334V411.238H82.2477V558.629H252.93L387.219 675.086H783.9V517.869H834.486V620.861H955.31C1036.25 435.985 989.034 252.93 955.31 184.511H834.486V289.323H783.9V184.511H707.839L631.051 110.998H526.603V65.8709H609.579V0H306.063V65.8709H387.219V110.998H252.93L180.872 191.062L82.2477 193.973V331.174H53.1334V184.511Z"
        fill="" id="motor" />
    <use clipPath="url(#test2)" href="#motor" fill="#0038A7" />
    <use clipPath="url(#test)" href="#motor" fill="#5F99EA" />
    <text y="100" fill="#5F99EA" fontSize="40" fontFamily="Lato">Boite auto {percent}%</text>
    <text x="650" y="100" fill="#0038A7" fontSize="40" fontFamily="Lato" >Boite Manuelle {100-percent}%</text>
</svg>
}
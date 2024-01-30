import BarreIcon from "../Icon/BarreIcon"
import BoiteIcon from "../Icon/BoiteIcon"
import EnergieIcon from "../Icon/EnergieIcon"
import HomeIcon from "../Icon/HomeIcon"
import KilIcon from "../Icon/KilIcon"
import MpIcon from "../Icon/MpIcon"
import RotaIncon from "../Icon/RotaIcon"
import VnIcon from "../Icon/VnIcon"
import VoIcon from "../Icon/VoIcon"
import VoitureIcon from "../Icon/VoitureIcon"
import WaffleIcon from "../Icon/WaffleIcon"
import Motor from "../charts/motor"
import MyResponsiveTreeMap from "../charts/treemapChart"
import MyResponsiveBar from "../charts/DiagBarre"
import { useState } from "react"
import ImageKil from '../charts/Kil'
import Rota from '../charts/Rota'
import Voiture from '../charts/Voiture'
import Barre2 from "../charts/Barre2"

export default function Page1() {
    const [name, setName] = useState('Home')
    const style = {
        body: {
            width: '100%',
            height:'100vh',
            padding: '1.1rem',
            display: 'flex',
        },
        component1Icon:{
            flex:1,
        },
        SideBarre: {
            display: 'flex',
            flexDirection: 'column',
            //justifyContent: 'space-between',
            textAlign: 'center',
            fontSize: '24px',
            gap: '23px',
            color: '#a3a3a3',
            fontFamily: 'Lato',
        },
        main: {
            widht:'1500px',
            display: 'flex',
            justifyContent: 'center',
            aligneItems: 'center'
        },
        // Ensemble: {
        //     height: '80%',
        //     width: '90%',
        //     backgroundColor: 'White',
        //     marginLeft: '8%',
        //     display: 'flex',
        //     //justifyContent:'center',

        // },
        BarreContainer: {
            width: '1350px',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            //marginRight:'2%',
            //alignItems: 'center',
        },
        titre: {
            width: '100%',
            height: '48px',
            color: '#8FBAD8',
            //textAlign: 'center',
        },
        Ensemble: {
            width: '100%',
            height: '100%',
            display:'flex',
            justifyContent:'center',
        },
        ColoTitre:{
            color: '#8FBAD8',
            fontSize:'50px',
            height:'5%',
        },
    }

    return (
        <div className='Body' style={style.body}>
                <div className="SideBare" style={style.SideBarre}>
                    <div  style={style.component1Icon} onClick={() => setName('Home')}><HomeIcon active={name == 'Home'} /></div>
                    <div style={style.component1Icon}><VoIcon active={name == 'Vo'} /> </div>
                    <div style={style.component1Icon}><VnIcon active={name == 'Vn'} /> </div>
                    <div style={style.component1Icon}><MpIcon active={name == 'Mp'} /> </div>
                    <div style={style.component1Icon} onClick={() => setName("Barre2")}><BarreIcon active={name == 'Barre2'} /> </div>
                    <div style={style.component1Icon} onClick={() => setName("Voiture")}><VoitureIcon active={name == 'Voiture'} /> </div>
                    <div style={style.component1Icon} onClick={() => setName("waffle")}><WaffleIcon active={name == 'waffle'} /> </div>
                    <div style={style.component1Icon} onClick={() => setName("motor")}><BoiteIcon active={name == 'motor'} /> </div>
                    <div style={style.component1Icon} onClick={() => setName("DiagBarre")}><EnergieIcon active={name == 'DiagBarre'} /> </div>
                    <div style={style.component1Icon} onClick={() => setName("Kil")}><KilIcon active={name == 'Kil'} /> </div>
                    <div style={style.component1Icon} onClick={() => setName("Rota")}><RotaIncon active={name == 'Rota'} /> </div>
                </div>
            <div className="Ensemble" style={style.Ensemble}>
                        <div style={style.main}>
                                <div className="Titre" styel={style.titre}>
                                    {name === 'Home' &&
                                        <h1 className='text-1' style={style.ColoTitre}>Home</h1>}
                                    {name === 'waffle' &&
                                        <h1 className='text-1' style={style.ColoTitre}>Nombre de voiture vendu par marque</h1>}
                                    {name === 'motor' &&
                                        <h1 className='text-1' style={style.ColoTitre}>Préférence de boite de vitesse</h1>}
                                    {name === 'DiagBarre' &&
                                        <h1 className='text-1' style={style.ColoTitre}>Motorisation les plus vendu</h1>}
                                    {name === 'Kil' &&
                                        <h1 className='text-1' style={style.ColoTitre}>Prix moyen d’une voiture en fonction de son kilométrage</h1>}
                                    {name === 'Voiture' &&
                                        <h1 className='text-1' style={style.ColoTitre}>Motorisation les plus vendu</h1>}
                                    {name === 'Rota' &&
                                        <h1 className='text-1' style={style.ColoTitre}>Temps de rotation par marque selon les dernières ventes</h1>}
                                    
                                
                                <div className="Graph" style={style.BarreContainer}>
                                    
                                    {(name === 'waffle' || name === 'Home') && <MyResponsiveTreeMap></MyResponsiveTreeMap>}
                                    {(name === 'motor' || name === 'Home') && <Motor percent={75} />}
                                    {(name === 'DiagBarre' || name === 'Home') && <MyResponsiveBar></MyResponsiveBar>}
                                    {(name === 'Kil' ) && <ImageKil></ImageKil>}
                                    {(name === 'Rota' ) && <Rota></Rota>}
                                    {(name === 'Voiture' ) && <Voiture></Voiture>}
                                    {(name === 'Barre2' ) && <Barre2></Barre2>}
                                     </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}


{/* <h1 style={style.Titre}>Motorisation les plus vendus</h1> */ }


// {name === 'Home' &&
// <h1 className='text-1'>Home</h1>}
// {name === 'waffle' &&
// <h1 className='text-1'>Nombre de voiture vendu par marque</h1>}
// {(name === 'waffle' || name === 'Home') && <MyResponsiveTreeMap></MyResponsiveTreeMap>}
// {(name === 'motor' || name === 'Home') && <Motor percent={51}/>}
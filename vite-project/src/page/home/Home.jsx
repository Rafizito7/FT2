import React from 'react';
import './home.css';

const Home = ({

}) => {

  return (<div className="body">

        <div className="div">
            <div className='vector_droite' >
                <img className="vector-2" src="/src/image/Vector 2.svg" alt="fleche2" />
            </div>
            <div >
                <img className="vector-1" src="/src/image/Vector 1.svg" alt="fleche1" />
            </div>

     <div className="image">
        <img className="voiture" alt="voiture" src="/src/image/voiture.png" 
        />
</div>
    <p className="text">Référence : 185467D0-23P208 / 23205866 / O</p>
    <div className="frame"> 
        <div className='infoCar'>
            <p className="peugeot">
                <span className="span">
                    Peugeot 208
                    <br />
                </span>
                <span className="text-2">185467D0-23P208 / 23205866 / O</span>
            </p>
            <p className="element-puretech-voiture">
                1.2 PureTech
                <br />
                voiture d’occasion 12 359 km - 2023
            </p>
        </div>
        <div className="flexcontainer">
            <p className="text">
                <span className="text-3">Mise en circulation :</span>
                <span className="text-4">
                    11/06/2023
                    <br />
                </span>
            </p>
            <p className="text">
                <span className="text-3">Type de boîte :</span>
                <span className="text-5">&nbsp;</span>
                <span className="text-4">
                    Automatique
                    <br />
                </span>
            </p>
            <p className="text">
                <span className="text-3">Carburant :</span>
                <span className="text-5">&nbsp;</span>
                <span className="text-4">
                    Essence
                    <br />
                </span>
            </p>
            <p className="text">
                <span className="text-3">Consomation : </span>
                <span className="text-4">5.4l/100km</span>
                <span className="text-3">
                    {" "}
                    <br />
                </span>
            </p>
            <p className="text">
                <span className="text-3">Certificat : </span>
                <span className="text-4">Crit’Air 1</span>
                <span className="text-3">
                    {" "}
                    <br />
                </span>
            </p>
            <p className="text">
                <span className="text-3">Couleur : </span>
                <span className="text-4">Rouge Elexir</span>
            </p>
        </div>
    </div>
    <div className="frame-2">
        <p className="p">Taux de vente par rapport aux options</p>
        <div className="flexcontainer-2">
            <p className="span-text">
                <span className="text-6">
                    Climatisation
           
                </span>
            </p>
            <p className="span-text">
                <span className="text-6">
                    Régulateur de vitesse
            
                </span>
            </p>
            <p className="span-text">
                <span className="text-6">
                    Radar de recul
        
                </span>
            </p>
            <p className="span-text">
                <span className="text-6">
                    GPS
                    
                </span>
            </p>
            <p className="span-text">
                <span className="text-6">
                    Bluetooth
                    
                </span>
            </p>
            <p className="span-text">
                <span className="text-6">
                    Apple Car Play
                    
                </span>
            </p>
            <p className="span-text">
                <span className="text-6">Android Auto</span>
            </p>
        </div>
        <div className="flexcontainer-3">
            <p className="text-2">
                <span className="text-7">
                    100 %
                </span>
            </p>
            <p className="text-2">
                <span className="text-7">
                    100 %
                </span>
            </p>
            <p className="text-2">
                <span className="text-7">
                    75 %
                </span>
            </p>
            <p className="text-2">
                <span className="text-7">
                    37 %
                </span>
            </p>
            <p className="text-2">
                <span className="text-7">
                    25 %
                </span>
            </p>
            <p className="text-2">
                <span className="text-7">
                    65 %
                </span>
            </p>
            <p className="text-2">
                <span className="text-7">21 %</span>
            </p>

        </div>
    </div>
    <div className="frame-3">
        <div className="overlap-group">
            <div className="text-8">Parking</div>
            <div className="text-9">159</div>
        </div>
        <div className="overlap">
            <div className="frame-4">
                <div className="text-10">En arrivage</div>
                <div className="text-11">22</div>
            </div>
            <div className="frame-5">
                <div className="text-12">Stock</div>
                <div className="text-13">78</div>
            </div>
            <div className="frame-6">
                <div className="text-14">Rotation moyenne</div>
                <div className="text-15">13 jours</div>
            </div>
        </div>
       
    </div>
     <div className="frame-7">
     <div className="label">
        <div className="text-16">Prix de vente idéal</div>
    </div>  
    <div className="rectangle" />
        <div className="div-wrapper">
        <div className="text-wrapper-19">0.92</div>
    </div>
    <div className="overlap-2">
        <div className="text-wrapper-20">11 499 €</div>
        <div className="rectangle-2" />
    </div>

    </div>
</div>
    

</div>


);
};
        
export default Home;

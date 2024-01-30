import { ResponsiveTreeMap } from '@nivo/treemap'
import React from 'react';


const data = [
  
  {
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Étiquettes de lignes",
    "01. Citadine": "Nombre de NATCODE",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Peugeot",
    "01. Citadine": 1079,
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Renault",
    "01. Citadine": "716",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Citroën",
    "01. Citadine": "490",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Dacia",
    "01. Citadine": "274",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Toyota",
    "01. Citadine": "202",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Fiat",
    "01. Citadine": "191",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Opel",
    "01. Citadine": "118",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Audi",
    "01. Citadine": "111",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Volkswagen",
    "01. Citadine": "89",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Ford",
    "01. Citadine": "68",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Mini",
    "01. Citadine": "41",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Kia",
    "01. Citadine": "34",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Nissan",
    "01. Citadine": "31",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Seat",
    "01. Citadine": "30",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Skoda",
    "01. Citadine": "29",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Suzuki",
    "01. Citadine": "27",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "DS",
    "01. Citadine": "23",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Hyundai",
    "01. Citadine": "20",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Smart",
    "01. Citadine": "20",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "BMW",
    "01. Citadine": "14",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Mitsubishi",
    "01. Citadine": "6",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Abarth",
    "01. Citadine": "5",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Honda",
    "01. Citadine": "4",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Alfa Romeo",
    "01. Citadine": "3",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Chevrolet",
    "01. Citadine": "1",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Mazda",
    "01. Citadine": "1",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "Total général",
    "01. Citadine": "3627",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
},
{
    "VEHICUL_CATEGORIE": "",
    "01. Citadine": "",
    "": ""
}
]
const MyResponsiveTreeMap = () => (
    <ResponsiveTreeMap
        data={data}
        keys={[
            'peugeot',
            'Renault',
            'Citroën',
        ]}
        identity="name"
        value="loc"
        valueFormat=".02s"
        tile="binary"
        outerPadding={9}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.2
                ]
            ]
        }}
        parentLabelSize={10}
        parentLabelPadding= {4}
        parentLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        colors={{ scheme: 'yellow_green_blue' }}
        nodeOpacity={1}
        borderColor={{ 
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.1
                ]
            ]
        }}
    />
)
export default MyResponsiveTreeMap;
import { ResponsiveTreeMap } from '@nivo/treemap'



const data = 
{   
    "children":
     [
      {
        "name": "Peugeot",
        "color": "rgb(#53AF6F)",
        "loc": 1079
      },
      {
        "name": "Renault",
        "color": "hsl(331, 70%, 50%)",
        "loc": 716
      },
      {
        "name": "Citroën",
        "color": "hsl(334, 70%, 50%)",
        "loc": 490
      },
      {
        "name": "Dacia",
        "color": "hsl(334, 70%, 50%)",
        "loc": 274
      },
      {
        "name": "Toyota",
        "color": "hsl(334, 70%, 50%)",
        "loc": 202
      },
      {
        "name": "Fiat",
        "color": "hsl(334, 70%, 50%)",
        "loc": 191
      },
      {
        "name": "Opel",
        "color": "hsl(334, 70%, 50%)",
        "loc": 110
      },
      {
        "name": "Audi",
        "color": "hsl(334, 70%, 50%)",
        "loc": 111
      },
      {
        "name": "Volkswagen",
        "color": "hsl(334, 70%, 50%)",
        "loc": 89
      },
      {
        "name": "Ford",
        "color": "hsl(334, 70%, 50%)",
        "loc": 68
      },
      {
        "name": "Mini",
        "color": "hsl(334, 70%, 50%)",
        "loc": 41
      },
      {
        "name": "Kia",
        "color": "hsl(334, 70%, 50%)",
        "loc": 34
      },
      {
        "name": "Nissan",
        "color": "hsl(334, 70%, 50%)",
        "loc": 31
      },
      {
        "name": "Seat",
        "color": "hsl(334, 70%, 50%)",
        "loc": 30
      },
      {
        "name": "Skoda",
        "color": "hsl(334, 70%, 50%)",
        "loc": 29
      },
      {
        "name": "Suzuki",
        "color": "hsl(334, 70%, 50%)",
        "loc": 27
      },
      {
        "name": "Smart",
        "color": "hsl(334, 70%, 50%)",
        "loc": 20
      }, 
    ]
}
const MyResponsiveTreeMap = () => (
    <ResponsiveTreeMap
        data={data}
        identity="name"
        value="loc"
        fill="color"
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
                    3
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
                    1.2
                ]
            ]
        }}
        nodeOpacity={2}
        colors={{ scheme: 'yellow_green' }}
        borderColor={{ 
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0
                ]
            ]
        }}
    />
)
export default MyResponsiveTreeMap;
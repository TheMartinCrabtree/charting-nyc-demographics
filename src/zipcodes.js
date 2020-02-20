const zipcodeTable = [
    {
        borough: "Bronx", 
        neighborhoods: {
            "Central Bronx": [10453, 10457, 10460],
            "Bronx Park and Fordham": [10458, 10467, 10468],
            "High Bridge and Morrisania": [10451, 10452, 10456],
            "Hunts Point and Mott Haven": [10454, 10455, 10459, 10474],
            "Kingsbridge and Riverdale": [10463, 10471],
            "Northeast Bronx": [10466, 10469, 10470, 10475],
            "Southeast Bronx": [10461, 10462,10464, 10465, 10472, 10473]
        }
    },
    { 
        borough: "Brooklyn", 
        neighborhoods: {
            "Central Brooklyn": [11212, 11213, 11216, 11233, 11238],	
            "Southwest Brooklyn": [11209, 11214, 11228],
            "Borough Park":	[11204, 11218, 11219, 11230],
            "Canarsie and Flatlands": [11234, 11236, 11239],
            "Southern Brooklyn": [11223, 11224, 11229, 11235],
            "Northwest Brooklyn": [11201, 11205, 11215, 11217, 11231],
            "Flatbush":	[11203, 11210, 11225, 11226],
            "East New York and New Lots": [11207, 11208],
            "Greenpoint": [11211, 11222],
            "Sunset Park":	[11220, 11232],
            "Bushwick and Williamsburg": [11206, 11221, 11237]
        }

    }
];

export default zipcodeTable;
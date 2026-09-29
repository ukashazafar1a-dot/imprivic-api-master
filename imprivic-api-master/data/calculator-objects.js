//Lona Template

const lona_materials = {
    "10": "Lona Frontlight 460gr",
    "15": "Lona Microperforada",
    "20": "Lona Frontlight opaca trasera negra",
    "25": "Lona Backlight o Retroilumanda",
    "30": "Lona Backlight Noche/Dia",
    "35": "Lona Doble Cara",
    "40": "Lona Frontlight 360gr"
}

const lona_impressions = {
    "5": "Sin impresión",
    "10": "Impresa a color 1 cara"
}

const lona_cortes = {
    "5": "Corte recto",
    "10": "Corte con forma",
}

const lona_refuerzos = {
    "1": "Sin refuerzo",
    "2": "Perimetral",
    "3": "Borde superior",
    "4": "Borde inferior",
    "5": "Borde derecho",
    "6": "Borde izquierdo",
    "7": "Borde supérior e inferior",
    "8": "Borde derecho e izquierdo"
}

const lona_vainas = {
    "1": "Sin vaina",
    "2": "Borde superior",
    "3": "Borde inferior",
    "4": "Borde derecho",
    "5": "Borde izquierdo",
    "6": "Borde supérior e inferior",
    "7": "Borde derecho e izquierdo"
}

const lona_ojaleses = {
    "1": "Sin ojales",
    "2": "Ojales de plastico transparente",
    "3": "Ojales metalicos"
}

const lona_velcros = {
    "1": "Sin velcro",
    "2": "Perimetral",
    "3": "Borde superior",
    "4": "Borde inferior",
    "5": "Borde derecho",
    "6": "Borde izquierdo",
    "7": "Borde supérior e inferior",
    "8": "Borde derecho e izquierdo",
}

//Material price without printing and unmade
const mpwopuTable = [
    ["Lona Frontlight 460gr", 1, 460, 6.8, 6.46, 6.14, 5.83, 5.54, 5.26, 5.00],
    ["Lona Microperforada", 1, 440, 6.8, 6.46, 6.14, 5.83, 5.54, 5.26, 5.00],
    ["Lona Frontlight opaca trasera negra", 1, 460, 9, 8.55, 8.12, 7.72, 7.33, 6.96, 6.62],
    ["Lona Backlight o Retroilumanda", 1, 510, 9, 8.55, 8.12, 7.72, 7.33, 6.96, 6.62],
    ["Lona Backlight Noche/Dia", 1, 510, 0, 0, 0, 0, 0, 0, 0],
    ["Lona Doble Cara", 2, 510, 0, 0, 0, 0, 0, 0, 0],
    ["Lona Frontlight 360gr", 1, 360, 0, 0, 0, 0, 0, 0, 0]
];

//Material price without printing and ready-made

const mpwoprTable = [
    ["Lona Frontlight 460gr", 1, 460, 8.50, 8.08, 7.67, 7.29, 6.92, 6.58, 6.25],
    ["Lona Microperforada", 1, 440,8.50, 8.08, 7.67, 7.29, 6.92, 6.58, 6.25],
    ["Lona Frontlight opaca trasera negra", 1, 460, 10.80, 10.26, 9.75, 9.26, 8.80, 8.36, 7.94],
    ["Lona Backlight o Retroilumanda", 1, 510, 10.80, 10.26, 9.75, 9.26, 8.80, 8.36, 7.94],
    ["Lona Backlight Noche/Dia", 1, 510, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
    ["Lona Doble Cara", 2, 510, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
    ["Lona Frontlight 360gr", 1, 360, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]
];

//Material price with printing and unmade

const mpwpuTable = [
    ["Lona Frontlight 460gr", 1, 460, 8.02, 7.62, 7.24, 6.88, 6.54, 6.21, 5.90],
    ["Lona Microperforada", 1, 440, 8.02, 7.62, 7.24, 6.88, 6.54, 6.21, 5.90],
    ["Lona Frontlight opaca trasera negra", 1, 460, 10.62, 10.09, 9.58, 9.11, 8.65, 8.22, 7.81],
    ["Lona Backlight o Retroilumanda", 1, 510, 10.62, 10.09, 9.58, 9.11, 8.65, 8.22, 7.81],
    ["Lona Backlight Noche/Dia", 1, 510, 24.00, 22.80, 21.66, 20.58, 19.55, 18.57, 17.64],
    ["Lona Doble Cara", 2, 510, 22.00, 20.90, 19.86, 18.86, 17.92, 17.02, 16.17],
    ["Lona Frontlight 360gr", 1, 360, 10.00, 9.50, 9.03, 8.57, 8.15, 7.74, 7.35]
  ];

//Material price with printing and packaging

const mpwppTable = [
    ["Lona Frontlight 460gr", 1, 460, 9.00, 8.55, 8.12, 7.71, 7.33, 6.96, 6.61],
    ["Lona Microperforada", 1, 440, 9.00, 8.55, 8.12, 7.71, 7.33, 6.96, 6.61],
    ["Lona Frontlight opaca trasera negra", 1, 460, 11.43, 10.86, 10.32, 9.80, 9.31, 8.85, 8.40],
    ["Lona Backlight o Retroilumanda", 1, 510, 11.43, 10.86, 10.32, 9.80, 9.31, 8.85, 8.40],
    ["Lona Backlight Noche/Dia", 1, 510, 26.88, 25.54, 24.26, 23.05, 21.89, 20.80, 19.76],
    ["Lona Doble Cara", 2, 510, 24.64, 23.41, 22.24, 21.13, 20.07, 19.07, 18.11],
    ["Lona Frontlight 360gr", 1, 360, 11.20, 10.64, 10.11, 9.60, 9.12, 8.67, 8.23]
  ];

// Shaped Cut

const shapedCutTable = [
    ["Lona Frontlight 460gr", 1, 460, 6, 6, 6, 6, 6, 6, 6],
    ["Lona Microperforada", 1, 440, 6, 6, 6, 6, 6, 6, 6],
    ["Lona Frontlight opaca trasera negra", 1, 460, 6, 6, 6, 6, 6, 6, 6],
    ["Lona Backlight o Retroilumanda", 1, 510, 6, 6, 6, 6, 6, 6, 6],
    ["Lona Backlight Noche/Dia", 1, 510, 6, 6, 6, 6, 6, 6, 6],
    ["Lona Doble Cara", 2, 510, 6, 6, 6, 6, 6, 6, 6],
    ["Lona Frontlight 360gr", 1, 360]
];

//Vinilo Template
const materials = {
    "10": "Vinilo promocional transparente",
    "15": "Vinilo promocional transparente con tinta blanca",
    "20": "Vinilo larga duración transparente",
    "25": "Vinilo larga duración transparente laminado brillo",
    "30": "Vinilo larga duración transparente laminado mate",
    "35": "Vinilo larga duración transparente con tinta blanca",
    "40": "Vinilo larga duración transparente con tinta blanca laminado brillo",
    "45": "Vinilo larga duración transparente con tinta blanca laminado mate",
    "50": "Vinilo ácido impreso air free",
    "55": "Vinilo ácido impreso air free con tinta blanca",
    "60": "Vinilo alta adherencia mate paredes",
    "65": "Vinilo alta adherencia paredes laminado mate",
    "70": "Vinilo Polimérico larga duración brillo",
    "75": "Vinilo Polimérico larga duración laminado brillo",
    "80": "Vinilo Polimérico larga duración laminado mate",
    "85": "Vinilo microperforado promocional",
    "90": "Vinilo promocional brillo",
    "95": "Vinilo promocional mate",
    "100": "Vinilo promocional laminado brillo",
    "105": "Vinilo promocional laminado mate",
    "110": "Vinilo translúcido polimérico laminado brillo",
    "115": "Vinilo translúcido polimérico noche & dia laminado brillo",
    "120": "Vinilo translúcido polimérico laminado mate",
    "125": "Vinilo translúcido polimérico noche & dia laminado mate",
    "130": "Vinilo easy dot facil aplicación blanco",
    "135": "Vinilo easy dot facil aplicación transparente",
    "140": "Vinilo easy dot facil aplicación transparente con tinta blanca",
    "145": "Vinilo de suelos antideslizante",
    "150": "Vinilo Fundición  larga duración laminado brillo"
}

const cintas = {
    "1": "No aplica",
    "2": "Perimetral",
    "3": "Borde superior",
    "4": "Borde inferior",
    "5": "Borde derecho",
    "6": "Borde izquierdo",
    "7": "Borde supérior e inferior",
    "8": "Borde derecho e izquierdo"
}

const velcros = {
    "1": "No aplica",
    "2": "Perimetral",
    "3": "Borde superior",
    "4": "Borde inferior",
    "5": "Borde derecho",
    "6": "Borde izquierdo",
    "7": "Borde supérior e inferior",
    "8": "Borde derecho e izquierdo"
}

const ojaleses = {
    "1": "Sin ojales",
    "2": "Ojales en las esquinas"
}

const adhesivos = {
    "0": "Sin adhesivo",
    "10": "Reverso completo",
    "15": "Cinta doble cara perimetral en reverso",
    "20": "Velcro perimetral en reverso"
}

const m2Table = [
    [0.01, 10, 20, 50, 100, 500, 1000],    // Thresholds (top row)
    [9.00, 8.73, 8.47, 8.21, 7.97, 7.73, 7.50],   // Row 1
    [14.00, 13.58, 13.17, 12.78, 12.39409934, 12.02, 11.66], // Row 2
    [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00], // Row 3
    [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99], // Row 4
    [16.00, 15.52, 15.05, 14.60, 14.16, 13.74, 13.33], // Row 5
    [21.00, 20.37, 19.76, 19.17, 18.59, 18.03, 17.49], // Row 6
    [20.00, 19.40, 18.82, 18.25, 17.71, 17.17, 16.66],
    [25.00, 24.25, 23.52, 22.82, 22.13, 21.47, 20.82],
    [11.00, 10.67, 10.35, 10.04, 9.74, 9.45, 9.16],
    [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99],
    [10.00, 9.70, 9.41, 9.13, 8.85, 8.59, 8.33],
    [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99],
    [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99],
    [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
    [8.00, 7.76, 7.53, 7.30, 7.08, 6.87, 6.66],
    [8.00, 7.76, 7.53, 7.30, 7.08, 6.87, 6.66],
    [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
    [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
    [21.00, 20.37, 19.76, 19.17, 18.59, 18.03, 17.49],
    [35.00, 33.95, 32.93, 31.94, 30.99, 30.06, 29.15],
    [21.00, 20.37, 19.76, 19.17, 18.59, 18.03, 17.49],
    [35.00, 33.95, 32.93, 31.94, 30.99, 30.06, 29.15],
    [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
    [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
    [15.00, 14.55, 14.11, 13.69, 13.28, 12.88, 12.49],
    [16.00, 15.52, 15.05, 14.60, 14.16, 13.74, 13.33],
    [41.00, 39.77, 38.58, 42.00, 40.74, 39.52, 43.00]
];

const pvcTable = {
    thresholds: [0.01, 10, 20, 50, 100, 500, 1000],
    materials: {
        "Vinilo promocional transparente": [9.00, 8.73, 8.47, 8.21, 7.97, 7.73, 7.50],
        "Vinilo promocional transparente con tinta blanca": [14.00, 13.58, 13.17, 12.78, 12.39409934, 12.02, 11.66],
        "Vinilo larga duración transparente": [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
        "Vinilo larga duración transparente laminado brillo": [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99],
        "Vinilo larga duración transparente laminado mate": [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99],
        "Vinilo larga duración transparente con tinta blanca": [16.00, 15.52, 15.05, 14.60, 14.16, 13.74, 13.33],
        "Vinilo larga duración transparente con tinta blanca laminado brillo": [21.00, 20.37, 19.76, 19.17, 18.59, 18.03, 17.49],
        "Vinilo larga duración transparente con tinta blanca laminado mate": [21.00, 20.37, 19.76, 19.17, 18.59, 18.03, 17.49],
        "Vinilo ácido impreso air free": [20.00, 19.40, 18.82, 18.25, 17.71, 17.17, 16.66],
        "Vinilo ácido impreso air free con tinta blanca": [25.00, 24.25, 23.52, 22.82, 22.13, 21.47, 20.82],
        "Vinilo alta adherencia mate paredes": [11.00, 10.67, 10.35, 10.04, 9.74, 9.45, 9.16],
        "Vinilo alta adherencia paredes laminado mate": [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99],
        "Vinilo Polimérico larga duración brillo": [10.00, 9.70, 9.41, 9.13, 8.85, 8.59, 8.33],
        "Vinilo Polimérico larga duración laminado brillo": [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99],
        "Vinilo Polimérico larga duración laminado mate": [18.00, 17.46, 16.94, 16.43, 15.94, 15.46, 14.99],
        "Vinilo microperforado promocional": [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
        "Vinilo promocional brillo": [8.00, 7.76, 7.53, 7.30, 7.08, 6.87, 6.66],
        "Vinilo promocional mate": [8.00, 7.76, 7.53, 7.30, 7.08, 6.87, 6.66],
        "Vinilo promocional laminado brillo": [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
        "Vinilo promocional laminado mate": [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
        "Vinilo translúcido polimérico laminado brillo": [21.00, 20.37, 19.76, 19.17, 18.59, 18.03, 17.49],
        "Vinilo translúcido polimérico noche & dia laminado brillo": [35.00, 33.95, 32.93, 31.94, 30.99, 30.06, 29.15],
        "Vinilo translúcido polimérico laminado mate": [21.00, 20.37, 19.76, 19.17, 18.59, 18.03, 17.49],
        "Vinilo translúcido polimérico noche & dia laminado mate": [35.00, 33.95, 32.93, 31.94, 30.99, 30.06, 29.15],
        "Vinilo easy dot facil aplicación blanco": [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
        "Vinilo easy dot facil aplicación transparente": [12.00, 11.64, 11.29, 10.95, 10.62, 10.30, 10.00],
        "Vinilo easy dot facil aplicación transparente con tinta blanca": [15.00, 14.55, 14.11, 13.69, 13.28, 12.88, 12.49],
        "Vinilo de suelos antideslizante": [16.00, 15.52, 15.05, 14.60, 14.16, 13.74, 13.33],
        "Vinilo Fundición larga duración laminado brillo": [41.00, 39.77, 38.58, 42.00, 40.74, 39.52, 43.00]
    }
};

//Banner Template

const banner_solo_gráfica_prices = {
    thresholds: [1,5,25,50,100],
    prices: [20,19,17,14,12]
}

const banner_expositor_con_gráfica_prices = {
    thresholds: [1,5,25,50,100],
    prices: [36,32,29,27,26]
}

const banner_materials = {
    "1": "Solo gráfica",
    "2": "Expositor con gráfica"
}

exports.materials = materials;
exports.lona_materials = lona_materials;
exports.cintas = cintas;
exports.velcros = velcros;
exports.adhesivos = adhesivos;
exports.ojaleses = ojaleses;
exports.m2Table = m2Table;
exports.pvcTable = pvcTable;
exports.mpwopuTable = mpwopuTable;
exports.mpwoprTable = mpwoprTable;
exports.mpwpuTable = mpwpuTable;
exports.mpwppTable = mpwppTable;
exports.shapedCutTable = shapedCutTable;
exports.lona_impressions = lona_impressions;
exports.lona_cortes = lona_cortes;
exports.lona_refuerzos = lona_refuerzos;
exports.lona_vainas = lona_vainas;
exports.lona_ojaleses = lona_ojaleses;
exports.lona_velcros = lona_velcros;
exports.banner_solo_gráfica_prices = banner_solo_gráfica_prices;
exports.banner_expositor_con_gráfica_prices = banner_expositor_con_gráfica_prices;
exports.banner_materials = banner_materials;
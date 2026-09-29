const { pvcTable,mpwopuTable, mpwoprTable, mpwpuTable, mpwppTable, shapedCutTable, cintas, velcros } = require('../data/calculator-objects');
const { findIndexSmallerOrEqual, getPriceForQuantity } = require('./helpers.general');

function hlookup(lookupValue, table, rowIndex) {
    const thresholds = table[0];
    let columnIndex = 0;

    // Find the column in which the lookupValue fits
    for (let i = 0; i < thresholds.length; i++) {
        if (lookupValue < thresholds[i]) {
        columnIndex = i - 1;
        break;
        }
        columnIndex = i; // last threshold
    }

    // Return the value from the desired row
    return table[rowIndex][columnIndex];
}

function vlookup(value, table, colIndex, exactMatch = true) {
    for (let i = 0; i < table.length; i++) {
      if ((exactMatch && table[i][0] === value) || (!exactMatch && table[i][0].includes(value))) {
        if (colIndex < table[i].length) {
          return table[i][colIndex];
        } else {
          throw new Error("Column index out of range");
        }
      }
    }
    return 0; // If no match is found
}

function getThreshold(value,thresholds){
    let columnIndex = 0;

    // Find the column in which the lookupValue fits
    for (let i = 0; i < thresholds.length; i++) {
        if (value < thresholds[i]) {
        columnIndex = i - 1;
        break;
        }
        columnIndex = i; // last threshold
    }
    if(columnIndex < 0) columnIndex = 0;

    // Return the value from the desired row
    return thresholds[columnIndex];
}
  

function lona_getVelcro(ancho,largo, velcro){
    switch (velcro) {
        case "Sin velcro":
            return 0;
        case "Perimetral":
            return ((ancho/100)+(largo/100))*2;
        case "Borde superior":
            return ancho/100;
        case "Borde inferior":
            return ancho/100;
        case "Borde derecho":
            return largo/100;
        case "Borde izquierdo":
            return largo/100;
        case "Borde supérior e inferior":
            return (ancho/100)*2;
        case "Borde derecho e izquierdo":
            return (largo/100)*2;
        default:
            return 0;
    }
}

function lona_get_unit_price_from_table(table,material,superficie){
    const thresholds = table.thresholds;
    const colIndex = findIndexSmallerOrEqual(superficie,thresholds);

    return vlookup(material,table.prices, colIndex);
}

function lona_getMaterial(superficie,priceTables, material, corte, impression, refuerzo, vaina, ojales){
    let materialPrice = 0, materialUnitPrice = 0;
    
    const mpwopuUnitPrice = lona_get_unit_price_from_table(priceTables.mpwopuTable, material, superficie);
    const mpwopuPrice = mpwopuUnitPrice * superficie;

    const mpwoprUnitPrice = lona_get_unit_price_from_table(priceTables.mpwoprTable, material, superficie);
    const mpwoprPrice = mpwoprUnitPrice * superficie;

    const mpwpuUnitPrice = lona_get_unit_price_from_table(priceTables.mpwpuTable, material, superficie);
    const mpwpuPrice = mpwpuUnitPrice * superficie;

    const mpwppUnitPrice = lona_get_unit_price_from_table(priceTables.mpwppTable, material, superficie)
    const mpwppPrice = mpwppUnitPrice * superficie;

    const corteUnitPrice = lona_get_unit_price_from_table(priceTables.corte_con_forma, material, superficie);
    let cortePrice = 0;

    if(corte == 'Corte recto'){
        cortePrice = 0;
    }else if(corte == 'Corte con forma'){
        cortePrice = corteUnitPrice * superficie;
    }

    if(impression == "Sin impresión" && refuerzo == "Sin refuerzo" && vaina == "Sin vaina" && ojales == "Sin ojales"){
        materialPrice = mpwopuPrice + cortePrice;
        materialUnitPrice = mpwopuUnitPrice + cortePrice;
    }
    if (impression === "Sin impresión") {
        if (refuerzo !== "Sin refuerzo" || vaina !== "Sin vaina" || ojales !== "Sin ojales") {
          materialPrice = mpwoprPrice + cortePrice;
          materialUnitPrice = mpwoprUnitPrice + cortePrice;
        }
    }
    if (impression !== "Sin impresión") {
        if (refuerzo === "Sin refuerzo" && vaina === "Sin vaina" && ojales === "Sin ojales") {
          materialPrice = mpwpuPrice + cortePrice;
          materialUnitPrice = mpwpuUnitPrice + cortePrice;
        }
    }
    if (impression !== "Sin impresión") {
        if (refuerzo !== "Sin refuerzo" || vaina !== "Sin vaina" || ojales !== "Sin ojales") {
          materialPrice = mpwppPrice + cortePrice;
          materialUnitPrice = mpwppUnitPrice + cortePrice;
        } 
    }

    return {materialPrice, materialUnitPrice}
}

function banner_getMaterial(cantidad,priceTable){
    return getPriceForQuantity(cantidad, priceTable)
}

function getPVCValue(prices,thresholds, m2) {

    if (!prices || !thresholds) {
        throw new Error(`Prices or Thresholds not found.`);
    }

    let columnIndex = thresholds.findIndex((v)=>v==m2);

    return prices[columnIndex];
}

function getCorte(corte,superficie,recto_price,troquelado_price,multi_troquel_price){
    switch(corte){
        case '1':
            return recto_price * superficie;
        case '2':
        case '4':
            return troquelado_price * superficie < troquelado_price ? troquelado_price : (troquelado_price * superficie);
        case '3':
            return multi_troquel_price * superficie < multi_troquel_price ? multi_troquel_price : (multi_troquel_price * superficie);
        default:
            return 0;
    }
}

function getOjales(ojales){
    switch (ojales) {
        case 'Sin ojales':
            return 0;
        case 'Ojales en las esquinas':
            return 4;
        default:
            return 0;
    }
}

function getLaminado(laminado,superficie,laminado_price){
    switch (laminado) {
        case '0':
            return 0;
        case '5':
            return laminado_price * superficie;
        case '10':
            return laminado_price * superficie;  
        default:
            return 0;
    }
}

function getCinta(cinta,largo,ancho,cinta_price){
    let price = 0;
    switch (cinta) {
        case "1":
            return 0;
        case "2":
            price = ((largo + ancho)*2)/100;
            break;
        case "3":
        case "4":
            price = largo / 100;
            break;
        case "5":
        case "6":
            price = ancho / 100;
            break;
        case "7":
            price = (largo/100)*2;
        case "8":
            price = (ancho/100)*2;  
        default:
            return 0;
    }
    return price * cinta_price;
}

function getVelcro(velcro,largo,ancho, velcro_price){
    let price = 0;
    switch (velcro) {
        case "1":
            return 0;
        case "2":
            price = ((largo + ancho)*2)/100;
            break;
        case "3":
        case "4":
            price = largo / 100;
            break;
        case "5":
        case "6":
            price = ancho / 100;
            break;
        case "7":
            price = (largo/100)*2;
        case "8":
            price = (ancho/100)*2;  
        default:
            return 0;
    }
    const newPrice = (price * velcro_price) * price;
    return newPrice;
}

function getAdhesivo(adhesivo,superficie,adhesivo_price){
    const adhesivoValue = adhesivo_price * superficie;
    switch(adhesivo){
      case 'Sin adhesivo':
        return 0;
      case 'Reverso':
        return adhesivoValue;
      case 'Anverso':
        return adhesivoValue;
      default:
        return 0;
    }
}

function getRevision(revision_archivos){
    switch (revision_archivos) {
        case '10':
            return 4.95;
        case '0':
            return 0;
        default:
            return 0;
    }
}

function getDelivery(fecha_entrega){
    switch (fecha_entrega) {
        case "1":
            return 1;
        case "2":
            return 1.3;
        case "3":
            return 1.3;
        default:
            return 0;
    }
}

function getNDisenos(n_disenos){
    if(n_disenos <= 1) return 0;
    if(n_disenos > 100) return 100;
    return n_disenos;
}

exports.vlookup = vlookup;
exports.hlookup = hlookup;
exports.getThreshold = getThreshold;
exports.getPVCValue = getPVCValue;
exports.getCorte = getCorte;
exports.getCinta = getCinta;
exports.getVelcro = getVelcro;
exports.getOjales = getOjales;
exports.getNDisenos = getNDisenos;
exports.getLaminado = getLaminado;
exports.getAdhesivo = getAdhesivo;
exports.getRevision = getRevision;
exports.getDelivery = getDelivery;
exports.lona_getVelcro = lona_getVelcro;
exports.lona_getMaterial = lona_getMaterial;
exports.banner_getMaterial = banner_getMaterial;
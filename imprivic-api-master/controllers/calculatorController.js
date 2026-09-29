const { hlookup,vlookup, getPVCValue,getCorte,getLaminado,getRevision,getAdhesivo, getDelivery, lona_getMaterial, lona_getVelcro, banner_getMaterial, getThreshold, getVelcro, getCinta, getOjales, getNDisenos } = require('../helpers/helpers.calculator')
const { m2Table, materials,adhesivos, lona_materials, lona_cortes, lona_impressions, lona_refuerzos, lona_vainas, lona_velcros, lona_ojaleses, banner_materials, ojaleses } = require('../data/calculator-objects')

const calculatePrice = function(req,res){
    const {
        cantidad,
        n_disenos,
        largo,
        ancho,
        materialThresholds,
        materialPrices,
        corte,
        adhesivo,
        laminado,
        cinta,
        velcro,
        ojales,
        recto_price,
        troquelado_price,
        multi_troquel_price,
        laminado_price,
        adhesivo_price,
        cinta_price,
        velcro_price,
        revision_archivos,
        fecha_entrega,
        min_price
    } = req.body;

    if(!cantidad || !largo || !ancho){
        return res.status(400).json({
            status:'Missing value(s)',
            message: 'Required value(s) missing.'
        })
    }

    let price = 0;

    try {
        const superficie = cantidad * ((largo * ancho)/10000)

        const m2 = getThreshold(superficie,materialThresholds)

        const materialPVC = getPVCValue(materialPrices,materialThresholds,m2)
        
        const materialValue = materialPVC * superficie < materialPVC ? materialPVC : materialPVC * superficie;
        price += materialValue;

        if(corte){
            const corteValue = getCorte(corte,superficie,recto_price,troquelado_price,multi_troquel_price);
            price += corteValue;
        }
        
        if(laminado){
            const laminadoValue = getLaminado(laminado,superficie,laminado_price);
            price += laminadoValue;
        }
        
        if(adhesivo){
            const adhesivoValue = getAdhesivo(adhesivo,superficie,adhesivo_price)
            price += adhesivoValue;
        }

        if(ojales){
            const ojalesValue = getOjales(ojaleses[ojales])
            price += ojalesValue;
        }

        if(adhesivo && cinta && adhesivos[adhesivo] == 'Cinta doble cara perimetral en reverso'){
            const cintaValue = getCinta(cinta,largo,ancho,cinta_price);
            price += cintaValue;
        }

        if(adhesivo && velcro && adhesivos[adhesivo] == 'Velcro perimetral en reverso'){
            const velcroValue = getVelcro(velcro,largo,ancho,velcro_price);
            price += velcroValue;
        }
        
        if(revision_archivos){
            const revisionValue = getRevision(revision_archivos);
            price += revisionValue;
        }
        
        if(fecha_entrega){
            const deliveryValue = getDelivery(fecha_entrega);
            price *= deliveryValue;
        }

        //Add N Disenos to the sum of price
        if(n_disenos){
            const disenosValue = getNDisenos(n_disenos);
            price += disenosValue;
        }

        if(min_price && price < min_price) price = min_price;

        return res.status(200).json({
            status: 'Success',
            price: parseFloat(price).toFixed(2)
        })


    } catch (error) {
        return res.status(500).json({
            status: 'Server Error',
            message: error.message,
        })
    }
}

const calculatePriceCartonMicrocanal = function(req,res){
    const {
        cantidad,
        noOfDesigns,
        largo,
        alto,
        impresion,
        material,
        corte,
        adhesivo,
        tinta_blanca,
        laminado,
        revision_archivos,
        fecha_entrega
    } = req.body;

    if(!cantidad || !largo || !ancho){
        return res.status(400).json({
            status:'Missing value(s)',
            message: 'Required value(s) missing.'
        })
    }

    let price = 0;

    try {
        const superficie = cantidad * ((largo * ancho)/10000)

        const m2 = hlookup(superficie, m2Table, 0);

        const materialPVC = getPVCValue(materials[material], m2);
        
        const materialValue = materialPVC * superficie < materialPVC ? materialPVC : materialPVC * superficie;
        price += materialValue;

        if(corte){
            const corteValue = getCorte(corte,superficie);
            price += corteValue;
        }
        
        if(laminado){
            const laminadoValue = getLaminado(laminado,superficie);
            price += laminadoValue;
        }
        
        if(adhesivo){
            const adhesivoValue = getAdhesivo(adhesivo,superficie)
            price += adhesivoValue;
        }
        
        if(revision_archivos){
            const revisionValue = getRevision(revision_archivos);
            price += revisionValue;
        }
        
        if(fecha_entrega){
            const deliveryValue = getDelivery(fecha_entrega);
            price *= deliveryValue;
        }

        if(price < 40) price = 40;

        return res.status(200).json({
            status: 'Success',
            price: parseFloat(price).toFixed(2)
        })


    } catch (error) {
        return res.status(500).json({
            status: 'Server Error',
            message: error.message,
        })
    }
}

const calculatePriceLona = function(req,res){
    const {
        cantidad,
        largo,
        ancho,
        material,
        impression,
        refuerzo,
        vaina,
        ojales,
        corte,
        velcro,
        diametro_del_tubo,
        posición_de_los_ojales,
        distancia_entre_ojales,
        priceTables,
        revision_archivos,
        fecha_entrega,
        formula,
        min_price
    } = req.body;

    if(!cantidad || !largo || !ancho){
        return res.status(400).json({
            status:'Missing value(s)',
            message: 'Required value(s) missing.'
        })
    }

    let unitPrice = 0, price = 0;
    const velcro_multiplier = 10;

    try {
        const superficie = ((ancho/100)*(largo/100))* cantidad;

        const materialPrices = lona_getMaterial(superficie,JSON.parse(priceTables), lona_materials[material], lona_cortes[corte], lona_impressions[impression], lona_refuerzos[refuerzo], lona_vainas[vaina], lona_ojaleses[ojales]);
        
        const velcroPrice = lona_getVelcro(ancho, largo, lona_velcros[velcro]) * velcro_multiplier;

        const deliveryPrice = getDelivery(fecha_entrega);

        const revisionPrice = getRevision(revision_archivos);

        unitPrice = (materialPrices.materialUnitPrice + velcroPrice + revisionPrice) * deliveryPrice;
        price = (materialPrices.materialPrice + velcroPrice + revisionPrice) * deliveryPrice;

        // if((price / cantidad) < unitPrice){
        //     price = unitPrice;
        // }else{
        //     price = price/cantidad;
        // }

        try {
            if(formula){
                price = eval(formula.replaceAll('s',superficie).replaceAll('p',price).replaceAll('up',unitPrice).replaceAll('q',cantidad).replaceAll('w',ancho).replaceAll('h',largo))
            }
        } catch (error) {
            console.log(error)
        }
        
        if(min_price && price < min_price){
            price = min_price;
        }

        return res.status(200).json({
            status: 'Success',
            price: parseFloat(price).toFixed(2),
            superficie,
            materialPrices: materialPrices,
            revisionPrice,
            deliveryPrice,
            velcroPrice
        })
    } catch (error) {
        return res.status(500).json({
            status: 'Server Error',
            message: error.message,
        })
    }
}

const calculatePriceXBanner = function(req,res){
    const {
        cantidad,
        revision_archivos,
        fecha_entrega,
        priceTable
    } = req.body;

    if(!cantidad){
        return res.status(400).json({
            status:'Missing value(s)',
            message: 'Required value(s) missing.'
        })
    }

    try {
        let price = 0;

        const materialPrice = banner_getMaterial(cantidad, priceTable);

        const revisionPrice = getRevision(revision_archivos);

        price = cantidad * materialPrice + revisionPrice;

        if(fecha_entrega){
            const deliveryValue = getDelivery(fecha_entrega);
            price *= deliveryValue;
        }

        return res.status(200).json({
            status: 'Success',
            price: parseFloat(price).toFixed(2)
        })
    } catch (error) {
        return res.status(500).json({
            status: 'Server Error',
            message: error.message,
        })
    }
}

exports.calculatePrice = calculatePrice;
exports.calculatePriceLona = calculatePriceLona;
exports.calculatePriceCartonMicrocanal = calculatePriceCartonMicrocanal;
exports.calculatePriceXBanner = calculatePriceXBanner;
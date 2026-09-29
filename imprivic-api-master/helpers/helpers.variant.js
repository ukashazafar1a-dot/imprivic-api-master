const { postNewProductWithVariant, postVariantImage, postNewVariant } = require("../requests");

async function create_product(title,price,tag,image,weight=0.0,weight_unit='kg',requires_shipping=true){
    try {
        const product = await postNewProductWithVariant(title,price,tag,weight,weight_unit,requires_shipping);
        const variant = product?.variants[0];
        if(image) await postVariantImage(product.id,variant.id,image);
        return variant;
    } catch (error) {
        throw(error)
    }
}

async function create_variant(id,title,price,image,weight,weight_unit,requires_shipping) {
    try {
        const variant = await postNewVariant(id,title,price,weight,weight_unit,requires_shipping);
        console.log("Variant>>",variant)
        if(image) await postVariantImage(id,variant.id,image);
        return variant;
    } catch (error) {
        throw(error)
    }
}

function generateUniqueTitle(productTitle) {
    const currentDate = new Date();  
    currentDate.setHours(currentDate.getHours() + 3);
  
    // Format the date as HH:MM:SS_DD/MM/YYYY
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
    const year = currentDate.getFullYear();
  
    const formattedDate = `${hours}:${minutes}:${seconds}_${day}/${month}/${year}`;
  
    // Combine the product title with the formatted date
    const uniqueTitle = `${productTitle} - ${formattedDate}`;
  
    return uniqueTitle;
  }


exports.create_product = create_product;
exports.create_variant = create_variant;
exports.generateUniqueTitle = generateUniqueTitle;
const { default: axios } = require("axios");
const cloudinary = require('../helpers/helpers.cloudinary')

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;


const uploadFile = async function(req,res){
    const uploader = async (path) => await cloudinary.uploads(path,'Product Files')
    // const {file} = req.body;

    // if(!cantidad || !largo || !ancho){
    //     return res.status(400).json({
    //         status:'Missing value(s)',
    //         message: 'Required value(s) missing.'
    //     })
    // }

    let price = 0;

    console.log("Req files", req.files.file)

    try {

        if(req.files.file){
            const path = req.files.file;
            const newPath = await uploader(path)
            console.log("New Path", newPath)
        }
        

        return res.status(200).json({
            status: 'Success',
            file: 'Uploaded'
        })


    } catch (error) {
        console.log("Error",error)
        return res.status(500).json({
            status: 'Server Error',
            message: error.message,
        })
    }

   
}

exports.uploadFile = uploadFile;
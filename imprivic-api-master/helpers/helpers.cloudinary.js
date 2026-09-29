const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier')
const dotenv = require('dotenv')

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

exports.uploads = async (file,folder) => {
    return new Promise((resolve,reject) => {

        let cld_upload_stream = cloudinary.uploader.upload_stream({
            folder: folder,
            resource_type: 'auto',
            use_filename: true,
            unique_filename: false,
            filename_override: decodeURIComponent(file.originalname)
        },(error,result)=>{
            if(result){
                resolve({
                    url: result.url,
                    id: result.public_id
                })
            }else{
                console.log("Cloudinary Error>>",error)
                reject(error);
            }
        })

        streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
    })
}
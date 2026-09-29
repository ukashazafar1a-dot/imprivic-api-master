function checkIfFileIsImage(file){
    // Array of allowed files
    const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'gif'];
    const array_of_allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

    // Get the extension of the uploaded file
    const file_extension = file.originalname.slice(
        ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2
    );

    // Check if the uploaded file is allowed
    console.log(file_extension,file.mimetype)
    if (!array_of_allowed_files.includes(file_extension) || !array_of_allowed_file_types.includes(file.mimetype)) {
        return false;
    }
    return true;
}

function checkIfFileSizeIsValid(file){
    // Allowed file size in mb
    const allowed_file_size = 20;
    if ((file.size / (1024 * 1024)) > allowed_file_size) {                  
        return false;
    }
    return true;
}

function findIndexSmallerOrEqual(value, array) {
    let index = -1; // Start with -1 in case no value is smaller or equal
    for (let i = 0; i < array.length; i++) {
      if (array[i] <= value) {
        index = i;
      } else {
        break; // Break the loop once we find a value greater than the input
      }
    }
    return index;
}

function getPriceForQuantity(quantity,array) {
  const { thresholds, prices } = array;

  // Find the index of the largest threshold that is less than or equal to the quantity
  let index = -1;
  for (let i = 0; i < thresholds.length; i++) {
      if (thresholds[i] <= quantity) {
          index = i;
      } else {
          break; // No need to check further since thresholds are sorted
      }
  }

  // Return the corresponding price
  return index !== -1 ? prices[index] : 0; // return null if no valid threshold is found
}

exports.checkIfFileIsImage = checkIfFileIsImage;
exports.checkIfFileSizeIsValid = checkIfFileSizeIsValid;
exports.findIndexSmallerOrEqual = findIndexSmallerOrEqual;
exports.getPriceForQuantity = getPriceForQuantity;
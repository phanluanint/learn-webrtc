const openCamera = () => {
    return new Promise((resolve, reject) => {
        navigator.mediaDevices.getUserMedia({ video: true})
        .then(stream => resolve(stream))
        .catch(error => reject(error))
    })
    
}

module.exports = openCamera
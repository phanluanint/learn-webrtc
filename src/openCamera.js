const openCamera = () => {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(stream => {
        console.log(stream)
        const video = document.querySelector('#localStream')
        video.srcObject = stream
        video.onloadedmetadata = () => {
            video.play()
        }
    })
    .catch(error => console.log(error))
}

module.exports = openCamera
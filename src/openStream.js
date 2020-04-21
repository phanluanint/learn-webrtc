const playVideo = require('./playVideo')
const openCamera = () => {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(stream => playVideo(stream, '#localStream'))
    .catch(error => console.log(error))
}

module.exports = openCamera
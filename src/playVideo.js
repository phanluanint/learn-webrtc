const playVideo = (stream, id) => {
    const video = document.querySelector(id)
    video.srcObject = stream
    video.onloadedmetadata = () => {
        video.play()
    }
}

module.exports = playVideo
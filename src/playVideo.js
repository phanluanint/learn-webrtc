const playVideo = (stream, id) => {
    console.log(stream)
    const video = document.querySelector(id)
    video.srcObject = stream
    video.onloadedmetadata = () => {
        video.play()
    }
}

module.exports = playVideo
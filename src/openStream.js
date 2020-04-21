const Peer = require('simple-peer')
const playVideo = require('./playVideo')
const openCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream })
            p.on('signal', token => {
                const txtMySignal = document.querySelector('#txtMySignal')
                txtMySignal.value = JSON.stringify(token)
            })
            p.on('stream', friendStream => {
                playVideo(friendStream, '#friendStream')
            })

            const btnConnect = document.querySelector('#btnConnect')
            btnConnect.addEventListener('click', () => {
                const txtFriendSignal = document.querySelector('#txtFriendSignal')
                const friendSignal = JSON.parse(txtFriendSignal.value)
                console.log('friend signal', friendSignal)
                p.signal(friendSignal)
            })
            playVideo(stream, '#localStream')
        })
        .catch(error => console.log(error))
}

module.exports = openCamera
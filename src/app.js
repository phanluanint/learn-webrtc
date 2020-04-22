const Peer = require('simple-peer')
const playVideo = require('./playVideo')
const openStream = require('./openStream')
openStream().then(stream => {
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


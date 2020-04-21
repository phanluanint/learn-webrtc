const openCamera = require('./openStream')
// openCamera() 

const Peer = require('simple-peer')

const p = new Peer({initiator: location.hash === '#1', trickle: false})

p.on('signal', token => {
    const txtMySignal = document.querySelector('#txtMySignal')
    txtMySignal.value = JSON.stringify(token)
})

p.on('connect', () => {
    setInterval(() => {
        p.send(Math.random())
    }, 2000)
})

p.on('data', data => console.log('received', data))

const btnConnect = document.querySelector('#btnConnect')

btnConnect.addEventListener('click', () => {
    const txtFriendSignal = document.querySelector('#txtFriendSignal')
    const friendSignal = JSON.parse(txtFriendSignal.value)
    console.log('friend signal', friendSignal)
    p.signal(friendSignal)
})


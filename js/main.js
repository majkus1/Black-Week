const sendbtn = document.querySelector('.send')
const popup = document.querySelector('.popup')

sendbtn.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.add('show-popup')
})

document.addEventListener('DOMContentLoaded', () => {


    //Variables for happy love
    let sendLoveIcon = document.querySelector('#sendLoveHeart');
    let sendLoveContainer = document.querySelector('#sendLoveContainer');
    let happyLoveCounter = 0;
    const loveSent = document.createElement('span');


    // Styling the love sent message -> 
    loveSent.textContent = "Your love was sent to happy";
    loveSent.style.display = 'block';
    loveSent.style.color = 'red';

    // Make sendLove logo red on click 
    sendLoveIcon.addEventListener("click", () => {
        if (!(sendLoveIcon.classList.contains('active'))) {
            sendLoveIcon.classList.add('active');
            happyLoveCounter++;
            sendLoveContainer.appendChild(loveSent);
        }
        console.log(happyLoveCounter);
    })

})



// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


let modal = document.getElementById("modal");
modal.classList.add("hidden")

let modalmessage = document.getElementById("modal-message");

let likeButton = document.querySelector(".like-glyph");


likeButton.addEventListener('click', (event) => {
  event.preventDefault();
  mimicServerCall()

    .then(
      likeButton.classList.toggle("activated-heart"),
      likeButtonActive = document.querySelector(".activated-heart"),
      likeButton.innerHTML = EMPTY_HEART,
      likeButtonActive.innerHTML = FULL_HEART

    )

    .catch((error) => {
      modal.classList.remove("hidden"),
        modalmessage.innerText = error.message,
        setTimeout(() => {
          modal.classList.add('hidden')
        }, 300);
    })

})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
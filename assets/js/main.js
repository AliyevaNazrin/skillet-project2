const MenuBtn = document.querySelector(".fa-bars")
const baglamaIconu = document.querySelector(".fa-xmark")

MenuBtn.addEventListener("click", function () {

    document.querySelector(".mobile-menu").classList.add("aktiv")

})

baglamaIconu.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.remove("aktiv")
})

const shirketler = new Swiper(".shirketlerSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});




// mukafatlar sectionu karuseli 


// const mukafatSwiperi = new Swiper(".mukafatlarSwiperi", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 40,
//         },
//         1024: {
//           slidesPerView: 2,
//           spaceBetween: 50,
//         },
//       },
//     });
{/* <div class="swiper-slide">
                    <div class="award p-3 ">
                        <img src="./assets/images/editions/sekil1.svg" alt="">
                        <h5 class="my-3">Side Bowls</h5>
                        <p>SET OF 4-$45</p>
                        <p> Hand-painted porcelain stackable bowls, designed for plating, eating, and scooping.</p>
                    </div>
                </div> */}
//   API

// const awardsDiv = document.getElementsByClassName("mukafatlarinOlduguDiv")[0]
// window.addEventListener('DOMContentLoaded', getMukafatlariGetir)

// async function getMukafatlariGetir() {
//     const unvan = "assets/melumatlar.json"
//     try {
//         const cavab = await fetch(unvan)
//         const mukafatlarMelumati = await cavab.json()
//         console.log(mukafatlarMelumati)


//         for (let i = 0; i < mukafatlarMelumati.length; i++) {
//             awardsDiv.innerHTML += `  <div class="swiper-slide">
//             <div class="award p-3 ">
//                 <img src="${mukafatlarMelumati[i].photo} " alt="" class="sekil">
//                 <h5 class="my-3">${mukafatlarMelumati[i].name} </h5>
//                 <p>${mukafatlarMelumati[i].set} </p>
//                 <p>${mukafatlarMelumati[i].text} </p>
//             </div>
//         </div> `
//         }
//     }

//     catch (err) {
//         console.log(`Serverde xeta yarandi.Xetanin sebebi: ${err.message}`)
//     }
// }






//  const cardsDiv = document.getElementsByClassName("cards")[0]
//  window.addEventListener('DOMContentLoaded', getCartlariGetir)

//  async function getCartlariGetir() {
//   const unvan = "assets/melumatlar.json"
//  try {
//     const cavab = await fetch(unvan)
//       const mukafatlarMelumati = await cavab.json()
//      console.log(mukafatlarMelumati)


//       for (let i = 0; i < cards.length; i++) {
//           cardsDiv.innerHTML += `  <div class="cards">
//                     <div class="card p-3 ">
//              <img src="${mukafatlarMelumati[i].photo} " alt="" class="sekil">
//              <h5 class="my-3">${mukafatlarMelumati[i].name} </h5>
//             <p>${mukafatlarMelumati[i].set} </p>
//               <p>${mukafatlarMelumati[i].text} </p>
//         </div>
//      </div> `
//        }
//   }
//     catch (err) {
//           console.log(`Serverde xeta yarandi.Xetanin sebebi: ${err.message}`)
//          }
//    }
        

let body = document.getElementsByTagName('body')[0]
let nav1 = document.getElementById('nav1')
let nav2 = document.getElementById('nav2')
const onscroll = () => {
  if (window.scrollY > 90) {
    nav2.style.height = '50px'
    nav2.style.transition = '0.1s'
  } else {
    nav2.style.height = 0
  }
  console.log(window.scrollY)
}

let cards = document.getElementById('cards')

const products = [
  {
    img: './img/products1.webp',
    name: 'Mahalliy sotuvchilar',
  },
  {
    img: './img/im2.webp',
    name: 'Muddatli tulov X 12',
  },
  {
    img: './img/im3.webp',
    name: 'Ramazon takliflari',
  },
  {
    img: './img/im4.webp',
    name: 'Kompyuter mahsulotlari',
  },
  {
    img: './img/im5.webp',
    name: 'Smartfonlar X 12',
  },
  {
    img: './img/im6.webp',
    name: 'Eksklyuzof takliflar',
  },
  {
    img: './img/im7.webp',
    name: 'Avtomobil mahsulotlari',
  },
  {
    img: './img/im8.webp',
    name: 'Maishiy texnika X 12',
  },
]

products.map((product, index) => {
  return (cards.innerHTML =
    cards.innerHTML +
    `
    <div class="col-3 my-3">
                    <div class="img text-center">
                        <img class="img-fluid" src="${product.img}" />
                    </div>
                    <div class="text text-center">
                        ${product.name}
                    </div>
                </div>`)
})

// setInterval(() => {
//   console.log(new Date().getHours())
//   console.log(new Date().getMinutes())
//   console.log(new Date().getSeconds())
//   console.log(new Date().getFullYear())
//   console.log(new Date().getMonth())
//   console.log(new Date().getDay())
// }, 1000)


function vaqt(){
  let soat = document.getElementById('chas');
  let daqiqa = document.getElementById('minut');
  let soniya = document.getElementById('sekund');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  soat.innerHTML = h;
  daqiqa.innerHTML = m;
  soniya.innerHTML = s;

}

let interval = setInterval(vaqt, 1000)


const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


let buttons = document.getElementsByClassName('buttons')[0]

products.map((product,index) => {
  (buttons.innerHTML +=
    `
    <button class="dot" onclick="clickbutton(this)" id="${index}"></button>
      `
    )
})

let allbuttons = document.getElementsByTagName('button')
const clickbutton = (button) =>{
  for (const index in products) {
    document.getElementById(index).classList.add('dot')
    document.getElementById(index).classList.remove('line')
  }

  document.getElementById(button.id).classList.remove('dot')
  document.getElementById(button.id).classList.add('line')
}

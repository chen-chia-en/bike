let slide = document.querySelectorAll('.slide');
let order = document.querySelectorAll('.order');

let slide_index = 0;
let prev_slide = document.querySelector('.prev');
let next_slide = document.querySelector('.next');

// showslide
let showSlide = (index)=>{
    slide.forEach(e =>
        e.classList.remove('show')
    )
    slide[index].classList.add('show')   
    
}

showSlide(slide_index)

order.forEach((value, index) =>{
    value.addEventListener('click', () =>{
        showSlide(index)
       
    })
})
// 關於底下數字的變化: 當備案的時候，顏色變白，其他回原狀
order.forEach((value, index) =>{
    value.addEventListener('click', () =>{
        change(index)
    })
})

let change = (index)=>{
    order.forEach(value =>{
        value.classList.remove('show')
    })
    order[index].classList.add('show')
}

change(slide_index)
// 初始狀態


prev_slide.addEventListener('click', function(){
    slide_index = slide_index - 1 
    if(slide_index < 0){
        slide_index = slide.length - 1 
    }
    change(slide_index)
    showSlide(slide_index)
})

next_slide.addEventListener('click', function(){
    slide_index = slide_index + 1
    if(slide_index === slide.length){
        slide_index = 0
    }
    change(slide_index)
    showSlide(slide_index)
})

// navigation
let navigation = document.querySelectorAll('nav ul li')
let navigation_index = 0;

navigation.forEach((value,index)=>{
    value.addEventListener('click', function(){
        turnWhite(index)
    })
})

let turnWhite = (index)=>{
    navigation.forEach((value,index)=>{
        value.classList.remove('show')
    })
    navigation[index].classList.add('show')
}

turnWhite(navigation_index)

// scrolltrigger
// gsap.registerPlugin(ScrollTrigger);

// gsap.from("", {
// scrollTrigger: ".category h2", // start the animation when ".box" enters the viewport (once)
// x: 500
// });
// gsap.from("", {
//     scrollTrigger: ".category h1", // start the animation when ".box" enters the viewport (once)
//     x: -500
//   });

gsap.registerPlugin(ScrollTrigger);

gsap.from(".category h2", {
    scrollTrigger:{
      scrub: 1
    },
    x:100
  });

gsap.from(".category h1", {
  scrollTrigger:{
    scrub: 1
  },
  x: -100,

 
})
// section3
gsap.from(".information h2", {
    scrollTrigger:{
      scrub: 1
    },
    x: 200,
    opacity:0
  })

  gsap.from(".name", 
  {  scrollTrigger:{
      scrub: 0.1,
      autoAlpha: 0
    },
    x: -500,
   
  })

  gsap.from(".price", {
    scrollTrigger:{
      scrub: 1
    },
    y: 200
  })
  gsap.from("#buy", {
    scrollTrigger:{
        scrub: 1
      },
      y: 200
  })


  gsap.from(".bestseller-inner-bike", {
    scrollTrigger:{
      scrub: 2
    },
    x: 500,
    rotatation: 0
  })

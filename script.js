// 顯示隱藏文字
function toggleText() {
  const text = document.getElementById("secret");
  text.style.display = text.style.display === "none" ? "block" : "none";
}

// 滑動動畫
const revealElements = document.querySelectorAll('.card, .project, .contact, .hero-overlay');
function reveal() {
  for(const el of revealElements){
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if(elementTop < windowHeight - revealPoint){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition='all 0.6s ease-out';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
    }
  }
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// LightGallery 初始化
lightGallery(document.getElementById('lightgallery'), { plugins: [lgZoom], speed: 500 });

// 粒子背景初始化
particlesJS("particles-js",{
  "particles":{
    "number":{"value":50,"density":{"enable":true,"value_area":800}},
    "color":{"value":["#FFD700","#C0C0C0","#B87333"]},
    "shape":{"type":"circle"},
    "opacity":{"value":0.7,"random":true},
    "size":{"value":3,"random":true},
    "line_linked":{"enable":true,"distance":150,"color":"#FFD700","opacity":0.3,"width":1},
    "move":{"enable":true,"speed":2}
  },
  "interactivity":{
    "events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"}},
    "modes":{"grab":{"distance":140,"line_linked":{"opacity":0.5}},"push":{"particles_nb":4}}
  },
  "retina_detect":true
})
<script>
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom],
    speed: 400,
  })
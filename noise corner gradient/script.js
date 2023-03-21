gsap.ticker.fps(15) //reduce frame rate to improve performance

gsap.timeline({repeat:-1, defaults:{duration:4, ease:'none'}}) //noise filter loop
.to('feTurbulence', {attr:{baseFrequency:5.51}})
.to('feTurbulence', {attr:{baseFrequency:5.49}, duration:8})
.to('feTurbulence', {attr:{baseFrequency:5.5}})

gsap.timeline()
.to('image', {svgOrigin:'690 720', rotate:360, duration:8, ease:'none', repeat:-1}, 0) //rotate gradient
.from('path', {scale:1.4, duration:3, ease:'expo'}, 0) //scale in from offscreen
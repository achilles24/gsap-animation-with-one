gsap.registerPlugin(ScrollTrigger);

const wrapper = gsap.utils.toArray('.box');
const firstSection = document.querySelector('.wrapper');
if (wrapper.length) {
  ScrollTrigger.create({
      start: 'top bottom',
      end: 'bottom bottom',
      trigger: '.box-1',
      // endTrigger: '.bottom',
      scrub: true,
      snap: {
        delay: 0.015,
        duration: 1.25,
        ease: 'power1.inout',
        snapTo: 1 / wrapper.length,
      },
      // markers: true,
  });
  

const firstImage = document.querySelector('.first-image');
ScrollTrigger.create({
  trigger: firstImage,
  start: 'top center',
  end: 'top top-=25%',
  onEnter: () => {
   firstSection.classList.add('first-image');
  },
  onLeave: () => {
    firstSection.classList.add('first-image');
  },
  onEnterBack: () => {
    firstSection.classList.remove('first-image');
  },
  scrub: 1,
  markers: true,
  });
}

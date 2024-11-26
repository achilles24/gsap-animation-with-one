gsap.registerPlugin(ScrollTrigger);

const wrapper = gsap.utils.toArray('.box')
if (wrapper.length) {
  ScrollTrigger.create({
      start: 'top bottom',
      end: 'bottom top',
      trigger: '.box-1',
      endTrigger: '.box-2',
      scrub: true,
      snap: {
        delay: 0.015,
        duration: 1.25,
        ease: 'power1.inout',
        snapTo: 1 / wrapper.length,
      },
      markers: true,
  });
}

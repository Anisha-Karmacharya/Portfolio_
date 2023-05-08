gsap.registerPlugin(ScrollTrigger);
function imageReveal() {
  let revealContainers = document.querySelectorAll(".image");
  revealContainers.forEach((container) => {
    let image = container.querySelector(".img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset",
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1, {
      xPercent: -200,
      ease: Power1.out,
    });
    tl.from(image, 1, {
      xPercent: 200,
      scale: 1.3,
      delay: -1,
      ease: Power1.out,
    });
  });
}
const homeLanding = () => {
  const landingTl = gsap.timeline();
  // landingTl.from(".home__landing", { opacity: 0, duration: 1 });
  landingTl.from(".name", { opacity: 0, yPercent: 50, duration: 0.5 });
  landingTl.from(".brief__caption", { opacity: 0, yPercent: 50, duration: 0.65 });
  landingTl.from(".self__description", { opacity: 0,  yPercent: 50,duration: 0.75 });
  landingTl.from(".scroll-button", { opacity: 0, yPercent: 50,  duration: 0.85 });
  landingTl.from(".home__social", { opacity: 0, yPercent: 50, duration: 0.95 });
};

const homeExplore = () => {
  const exploreTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#homeExplore",
    },
  });
  exploreTl.from(".exploreTitle", { opacity: 0, y: 50, duration: 1 });
  exploreTl.from(".exploreDescription", { opacity: 0, y: 50, duration: 0.75 });
  exploreTl.from(".explore-button", { opacity: 0, y: 50, duration: 0.75 });
};

const homeFeatured = () => {
  const featuredTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home__featured ",
    },
  });
  featuredTl.from(".carousel-title", { opacity: 0, y: 50, duration: 1 })
  featuredTl.from(".home__featured ", { opacity: 0,y: 150, duration: 1 });
  featuredTl.from(".slider", { opacity: 0, y: 50, duration: 0.75 });

};

const homeContact = () => {
  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home__contact",
    },
  });
  contactTl.from(".home__contact", { opacity: 0,y: 150, duration: 1 });
  contactTl.from(".contact__form", { opacity: 0, y: 50, duration: 0.95 });
  contactTl.from(".contact__title", { opacity: 0, y: 50, duration: 0.75 });
  contactTl.from(".contact__inputs", { opacity: 0, y: 50, duration: 0.75 });
  contactTl.from(".submit__button", { opacity: 0, y: 50, duration: 0.75 });
};

const aboutLanding = () => {
  const aboutLandingTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about__landing",
    },
  });
  aboutLandingTl.from(".about__landing__title", { opacity: 0, duration: 0.05 });
  aboutLandingTl.from(".about__landing__description", { opacity: 0, y: 50, duration: 0.95 });
  aboutLandingTl.from(".about__edu-exp--title", { opacity: 0, y: 50, duration: 0.85 });
  // aboutLandingTl.from(".edu-exp__title", { opacity: 0, y: 50, duration: 0.75 });
  aboutLandingTl.from(".edu-exp__datas", { opacity: 0, duration: 0.65 });
  aboutLandingTl.from(".edu-exp__data", { opacity: 0, y: 50, duration: 0.65 });
  
};

const journey = () => {
  const journeyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".journey",
    },
  });
  journeyTl.from(".journey", { opacity: 0,  duration: 1 });
  journeyTl.from(".journey__landing--title", { opacity: 0, y:50,  duration: 0.85 });
  journeyTl.from(".journey__landing--caption", { opacity: 0, y:50,  duration: 0.75 });
  journeyTl.from(".about__journey", { opacity: 0, y:50,  duration: 0.5 });  
}

const journeyDetails = () => {
  const detailsTl = gsap.timeline();
  detailsTl.from(".detailJourney", { opacity: 0,  duration: 1 });
  detailsTl.from(".detailJourney__title", { opacity: 0, y:50,  duration: 1 });
  detailsTl.from(".detailJourney__description", { opacity: 0, y:50,  duration: 1 });  
}

const work = () => {
  const workTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".work",
    },
  }); 
  workTl.from('.work__filter', { opacity: 0, y:50,  duration: 0.65 })
  workTl.from('.work__container', { opacity: 0, y:50,  duration: 0.75 })
}

const workDetails = () => {
  const workdetailsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".workDetails",
    },
  });
  workdetailsTl.from('.workInfo', { opacity: 0, y:50,  duration: 1 })
  workdetailsTl.from('.workDetails-Information', { opacity: 0, y:50,  duration: 1 })
  workdetailsTl.from('.workDetails-additionInfos', { opacity: 0, y:50,  duration: 1 })
}

imageReveal();
homeLanding();
homeExplore();
homeFeatured();
homeContact();
aboutLanding();
journey();
journeyDetails();
work();
workDetails();
import gsap from 'gsap';

const createTimeline = (
  config: gsap.TimelineVars = { defaults: { paused: true } }
) => {
  const tl = gsap.timeline(config);
  let playingForward = true;

  tl.addLabel('first')
    .fromTo(
      '#navbarButtons',
      { top: -100, opacity: 0 },
      { top: 0, opacity: 1 },
      '<'
    )
    .fromTo('#logo', { top: -100, opacity: 0 }, { top: 0, opacity: 1 }, '<')
    .fromTo(
      '#textHigh',
      { left: '-50%', opacity: 0 },
      { left: '5%', opacity: 1 },
      '<'
    )
    .fromTo(
      '#machine',
      { scale: 0.2, opacity: 0 },
      { scale: 1, opacity: 1 },
      '<'
    )
    .fromTo('#machine-buttons', { opacity: 0 }, { opacity: 1 }, '<');
  tl.addLabel('second').to('#machine', { scaleX: -1 });
  return tl;
};

export default createTimeline;

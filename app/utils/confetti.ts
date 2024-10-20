import confetti from 'canvas-confetti';


export function confettiCustom(config: confetti.Options) {
  return confetti(config);
}

export function confettiCustomParade(duration = 1000, config: confetti.Options) {

  const end = Date.now() + duration;

  (function frame() {

    confettiCustom(config);

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }

  }());

  return new Promise(resolve => setTimeout(resolve, duration));

}

export function confettiOnPageSides(duration = 1000) {

  confettiCustomParade(duration, {
    particleCount: 7,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });

  confettiCustomParade(duration, {
    particleCount: 7,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

  return new Promise(resolve => setTimeout(resolve, duration));

}

export function confettiOnCenter(duration = 1000) {
  return confettiCustomParade(duration, {
    particleCount: 7,
    angle: 90,
    origin: { x: 0.5 }
  });
}

export function confettiOnBottom(duration = 1000) {
  return confettiCustomParade(duration, {
    particleCount: 7,
    angle: 90,
    origin: { x: 0.5, y: 1 }
  });
}

export function confettiOnTop(duration = 1000) {
  return confettiCustomParade(duration, {
    particleCount: 7,
    angle: 270,
    origin: { x: 0.5, y: 0 }
  });
}
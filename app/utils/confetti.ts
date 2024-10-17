import confetti from 'canvas-confetti';


export function confettiCustom(config: any) {
  confetti(config);
}

export function confettiCustomParade(duration = 1000, config: any) {

  const end = Date.now() + duration;

  (function frame() {

    confettiCustom(config);

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }

  }());

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

}

export function confettiOnCenter(duration = 1000) {
  confettiCustomParade(duration, {
    particleCount: 7,
    angle: 90,
    origin: { x: 0.5 }
  });
}

export function confettiOnBottom(duration = 1000) {
  confettiCustomParade(duration, {
    particleCount: 7,
    angle: 90,
    origin: { x: 0.5, y: 1 }
  });
}

export function confettiOnTop(duration = 1000) {
  confettiCustomParade(duration, {
    particleCount: 7,
    angle: 270,
    origin: { x: 0.5, y: 0 }
  });
}
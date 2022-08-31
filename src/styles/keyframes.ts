import { keyframes } from "styled-components";

export const FadeUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0)
  }
  100% {
    opacity: 1;
    transform: translateZ(0)
  }
`;

export const SlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const SlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const SlideLeftOut = keyframes`
  from {
    opacity: 0;
    transform: translateX(0%);
  }
  to {
    opacity: 1;
    transform: translateX(-100%);
  }
`;

export const bounce = keyframes`
  10%,
  20%,
  80%,
  90% {
    transform: translate3d(0, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(0, -5px, 0);
}

  40%,
  60% {
    transform: translate3d(0, 5px, 0);
}
`;

export const bounceIn = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1)
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }
  
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

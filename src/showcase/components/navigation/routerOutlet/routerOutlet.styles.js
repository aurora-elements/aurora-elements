import { css } from "lit-element";
export const styles = css`
  [route] {
    display: block;
  }
  [route]:not([style*="display: none"]) {
    animation: slide-down 0.5s cubic-bezier(0.75, 0.02, 0.5, 1);
  }
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(1.1);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;
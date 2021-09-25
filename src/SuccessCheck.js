import { html, css, LitElement } from 'lit';

export class SuccessCheck extends LitElement {
  static get styles() {
    return css`
      :host {
        --animation-duration: 150ms;
        --background-color: rgba(0, 128, 96, 1);
        --border-radius: 50%;
        --check-color: rgba(255, 255, 255, 1);

        display: block;
      }

      .container {
        background: var(--background-color);
        border-radius: var(--border-radius);

        display: flex;
        align-items: center;
        justify-content: center;
      }

      svg {
        fill: none;
        stroke: var(--check-color);
        stroke-dasharray: 20;
        stroke-dashoffset: 20;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;

        animation-name: stroke;
        /* it might be better to rAF the animation */
        animation-delay: 500ms;
        animation-duration: var(--animation-duration);
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }

      @keyframes stroke {
        100% {
          stroke-dashoffset: 0;
        }
      }
    `;
  }

  render() {
    return html`<div class="container">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="m4.889 11.06 3.038 2.937 6.862-8.121" />
      </svg>
    </div>`;
  }
}

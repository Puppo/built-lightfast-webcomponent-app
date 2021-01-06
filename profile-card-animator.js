import { TemplateRender } from './template-render.js'

export class ProfileCardAnimator extends TemplateRender {

    connectedCallback() {
        super.connectedCallback()

        this.shadowRoot.querySelector('slot').addEventListener('slotchange', this.animate())
    }

    animate() {
        const elems = this.querySelectorAll('profile-card')

        Array.from(elems).map((card, index) => {
            const animation = card.animate({
                opacity: [0, 1],
                scale: ['scale(0)', 'scale(1)']
            }, {
                iterations: 1,
                delay: 50,
                duration: 250
            })

            animation.onfinish = e => card.style.opacity = 1
        })
    }

    get template() {
        return `
        <style>
            :host {
                display: flex;
                flex-wrap: wrap;
            }

            ::slotted(profile-card) {
                transition: all 0.5s ease-in-out;
            }

            ::slotted(profile-card:hover) {
                transform: scale(1.05);
                background: white;
                box-shadow: 0 2px 9px 1px rgba(0, 0, 0, 0.2);
                border-radius: 3px;
            }
            
        </style>
        <slot></slot>
        `
    }
}
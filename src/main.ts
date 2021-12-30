import { LitElement, html, customElement, css, property } from 'lit-element';
import { env } from './environment/environment';
import './shop/main'
@customElement('comp-main')
export class CompMain extends LitElement {

    static styles = css`
    :host {
        display: flex;
    }
    `;

    @property({ type: String }) message: string = 'Welcome to LitElement';

    render() {
        return html`
        <div>
            <main-contents></main-contents>
        </div>
        `;
    }
}
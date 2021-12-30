import { css, customElement, html, LitElement, property,query} from "lit-element";
import { styleMap } from 'lit-html/directives/style-map.js';

@customElement('motion-carousel1')
export class SecondSlider extends LitElement {

  static styles = css`
    .slider {
      padding: 0;
      margin: 0;
      overflow: hidden;
      position: relative;
      height: 100px;
      width: 100px;
    }
    ul {
      padding: 0;
      margin: 0;
      position: relative;
      width: 100px;
      height: 100px;
    }

    li {
      padding: 0;
      margin: 0;
      position: relative;
      display: block;
      float: left;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  `

  protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
      var b = this.renderRoot.querySelector('ul')
      var abc = b?.animate([
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(0px)', offset: 0.85}, 
        { transform: 'translateX(-100px)' }
      ], { 
        duration: 2000,
      });

      abc!.onfinish = function() {
        var removeItem = b!.removeChild(b?.firstElementChild!);
        b?.appendChild(removeItem)
        abc?.play();
      }
  }




render () {
  return html`
    <div class="slider">
    <ul id="this" style="width: 400px; height: 100px;">
      <li id="abc" style="background-image: url('https://img.lovepik.com/element/40097/3987.png_1200.png'); width: 100px; height: 100px">1</li>
      <li style="background-image: url('https://img.lovepik.com/element/40097/3987.png_1200.png'); width: 100px; height: 100px">2</li>
      <li style="background-image: url('https://img.lovepik.com/element/40097/3987.png_1200.png'); width: 100px; height: 100px">3</li>
      <li style="background-image: url('https://img.lovepik.com/element/40097/3987.png_1200.png'); width: 100px; height: 100px">4</li>
    </ul>
  </div>
  `
}
}
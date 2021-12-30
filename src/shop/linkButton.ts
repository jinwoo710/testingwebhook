import { css, customElement, html, LitElement, property } from "lit-element";


@customElement('link-button')
export class LinkButton extends LitElement {

  @property({ type: String }) title = ''
  @property() iconColor = ''


  static styles = css`
    .container {
      display: flex;
      width: 378px;
      height: 120px;
      border-radius: 4px;
      background-color: #FFFFFF;
      align-items: center;
      border: 1px solid #D3D5DB;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }

    .icon {
      width: 52px;
      height: 52px;
      margin: 0 30px 0 42px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .textBox {
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
    }
    `
  render() {
    return html`
    <style>
      .icon{
        background-color: ${this.iconColor}
      }
    </style>
    <button class="container" onClick="location.href='/'">
      <div class="icon"> </div>
      <div class="textBox">
      <span class="title">
      ${this.title}
    </span>
    <span>
      바로가기
    </span>
      </div>
      
    </button>
    `
  }

}
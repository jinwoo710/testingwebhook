import { css, customElement, html, LitElement } from "lit-element";
import "./linkButton";
import "./slider"
import "./secondSlider"
import "./thridSlider"

@customElement('main-contents')
export class Main extends LitElement {

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-width: 1200px;
      background-color: blue;
    }

    .header {
      width: 100%;
      height: 358px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: yellow;
    }

    .title {
      font-size: 36px;
      font-weight: bold;
      color: #0F4665;
      font-family: 'Roboto', sans-serif;
    }

    .titleExplanation {
      margin: 16px 0;
      color: #424242;
    }

    .links {
      width: 100%;
      height: 106px;
      position: relative;
      justify-content: center;
      background-color: #F4F4F5;
    }

    .linkButtons {
      width: 1200px;
      height: fit-content;
      position: relative;
      bottom: 60px;
      display: flex;
      justify-content: space-between;
      margin: auto;
    }

    .products {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 55px 0;
      background-color: #FFFFFF;
    }

    .productTitle {
      font-weight: 600;
      font-size: 20px;
      border-bottom: 4px solid #E17C2F;
      margin-bottom: 15px;
    }

    .productExplanation {
      font-size: 16px;
      font-weight: 400;
    }

    .slider {
      width: 1194px;
      height: 336px;
      border: 1px solid #D3D5DB;
      margin: 38px 0;
    }

    .carousel {
      height: 250px;
      width: 80%;
      position: relative;
    }

    .carousel .switchLeft,
    .carousel .switchRight {
      color: white;
      font-weight: bold;
      height: 100%;
      width: 45px;
      line-height: 250px;
      font-size: 25px;
      text-align: center;
      top: 0;
      z-index: 3;
    }

    .carousel .switchLeft {
      position: absolute;
      left: -50px;
    }

    .carousel .switchRight {
      position: absolute;
      right: -50px;
    }
    
  `

  render() {
    return html`
        <div class="header">
          <span class="title">HUMAN BRAIN</span>
          <span class="title">RESEARCHING CONSULTING</span>
          <span class="titleExplanation">휴브알앤씨는 인간의 뇌와 마음에 관련된 연구, 출판 및 자문을 제공하는 전문기관입니다.</span>
        </div>
        <div class="links">
          <div class="linkButtons">
            <link-button iconColor="red" title="이용 가이드"></link-button>
            <link-button title="워크샵 신청"></link-button>
            <link-button title="검사 시스템"></link-button>
          </div>
        </div>
        <div class="products">
          <span class="productTitle">
            제품구매
          </span>
          <span class="productExplanation">휴브알엔씨의 다양한 심리검사 도구 및 서비스를 구매해보세요.</span>
          <third-slider></third-slider>
          <motion-carousel1></motion-carousel1>
          <motion-carousel></motion-carousel>


          </div>
    `
  }
  
}
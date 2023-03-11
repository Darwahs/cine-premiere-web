<template>
  <div class="app">
    <div class="div-main" id="div-main">
      <div class="index-header">
        <h1 class="index-header_title">
          <a class="index-header_title_link" v-on:click="loadMainPage">Cine Premiere</a>
        </h1>
        <div class="index-header_menu">
          <nav class="index-header_menu_options">
            <ul class="index-header_menu_options_list">
              <li class="index-header_menu_options_list_option option-margin-right">
                <span class="option-text" v-on:click="loadMoviesPage">Películas</span>
                <span class="option-border-bottom"></span>
              </li>
              <li class="index-header_menu_options_list_option option-margin-right">
                <span class="option-text" v-on:click="loadRatesPage">Tarifas</span>
                <span class="option-border-bottom"></span>
              </li>
              <li class="index-header_menu_options_list_option option-margin-right">
                <span class="option-text" v-on:click="loadFoodPage">Comidas</span>
                <span class="option-border-bottom"></span>
              </li>
              <li class="index-header_menu_options_list_option">
                <span class="option-text" v-on:click="loadContactUsPage">Contáctenos</span>
                <span class="option-border-bottom"></span>
              </li>
            </ul>
          </nav>
        </div>

        <div class="index-header_div-one">
          <button type="button" class="index-header_div-one_button">
            <span id="text-btn-loggin">Iniciar Sesión</span>
            <span id="background-btn-loggin"></span>
          </button>
          <h5 class="index-header_div-one_subtitle">Registrarse</h5>
        </div>

        <div class="index-header_div-two">
          <div class="index-header_div-two_hambuger-menu" v-on:click="seeActionHamburguerMenu">
            <span class="hamburger-menu margin-bottom"></span>
            <span class="hamburger-menu margin-bottom"></span>
            <span class="hamburger-menu"></span>
          </div>
          <div class="index-header_div-two_dynamic-width" v-on:click="hiddenActionHamburguerMenu"></div>
        </div>
      </div>

      <div class="index-header_div-three">
          <div class="index-header_div-three_sub-menu">
            <div class="index-header_div-three_sub-menu_buttons">
              <button class="index-header_div-three_sub-menu_buttons_button">Iniciar Sesión</button>
              <button class="index-header_div-three_sub-menu_buttons_button">Registrarse</button>
          </div>
          <ul class="index-header_div-three_sub-menu_options">
            <hr class="line" />
            <li class="index-header_div-three_sub-menu_option">
              <a v-on:click="loadMoviesPage">Películas</a>
            </li>
            <hr class="line" />
            <li class="index-header_div-three_sub-menu_option">
              <a v-on:click="loadRatesPage">Tarifas</a>
            </li>
            <hr class="line" />
            <li class="index-header_div-three_sub-menu_option">
              <a v-on:click="loadFoodPage">Comidas</a>
            </li>
            <hr class="line" />
            <li class="index-header_div-three_sub-menu_option">
              <a v-on:click="loadContactUsPage">Contáctenos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div  class="main-component">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
        name: 'App',

        data: function()
        {
          return {
            answer: true,
          }
        },

        methods:
        {
          loadMainPage: function()
          {
            this.$router.push({name: "mainPage"});
          },

          loadTestPage: function()
          {
            this.$router.push({name: "testPage"});
          },

          loadMoviesPage: function()
          {
            this.$router.push({name:"movies"});
          },

          loadRatesPage: function()
          {
            this.$router.push({name: "rates"});
          },

          loadFoodPage: function()
          {
            this.$router.push({name: "food"});
          },

          loadContactUsPage: function()
          {
            this.$router.push({name: "contactUs"});
          },

          seeActionHamburguerMenu()
          {
            const div_hamburguer_menu = document.querySelector('.index-header_div-two_hambuger-menu');
            const div_dynamic_width = document.querySelector('.index-header_div-two_dynamic-width');
            const lines_menu = document.querySelectorAll('.hamburger-menu');

            div_dynamic_width.style.display='block';
            div_hamburguer_menu.style.cursor='default';
            lines_menu[1].style.transition='.4s ease';
            lines_menu[1].style.left='-80px';
            lines_menu[1].style.opacity='0';
            lines_menu[0].style.transition='.4s ease';
            lines_menu[0].style.transformOrigin='top left';
            lines_menu[0].style.transform='rotate(50deg)';
            lines_menu[2].style.transition='.4s ease';
            lines_menu[2].style.transformOrigin='bottom left';
            lines_menu[2].style.transform='rotate(-50deg)';

            this.answer = true;
            this.subMenuHamburger(this.answer);
          },

          hiddenActionHamburguerMenu()
          {
            const div_hamburguer_menu = document.querySelector('.index-header_div-two_hambuger-menu');
            const div_dynamic_width = document.querySelector('.index-header_div-two_dynamic-width');
            const lines_menu = document.querySelectorAll('.hamburger-menu');
            
            div_dynamic_width.style.display='none';
            div_hamburguer_menu.style.cursor='pointer';
            lines_menu[1].style.transition='.4s ease';
            lines_menu[1].style.left='0';
            lines_menu[1].style.opacity='1';
            lines_menu[0].style.transition='.4s ease';
            lines_menu[0].style.transform='none';
            lines_menu[2].style.transition='.4s ease';
            lines_menu[2].style.transform='none';

            this.answer = false;
            this.subMenuHamburger(this.answer);
          },

          subMenuHamburger(date)
          {
            const sub_menu_hamburger = document.querySelector('.index-header_div-three');

            if(date)
            {
              sub_menu_hamburger.style.transition='.4s ease';
              sub_menu_hamburger.style.right='0';
            }

            else
            {
              sub_menu_hamburger.style.transition='.4s ease';
              sub_menu_hamburger.style.right='-80vw';
            }
          },
        },

        created: function()
        {
          this.loadMainPage();
          // this.loadTestPage();
        }
    }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap");

  #app
  {
    overflow: hidden;
  }

  .app
  {
    position: relative;
    height: 100%;
    width: 100%;
  }

  body
  {
    margin: 0;
    padding: 0;
    background-image: url(https://www.ucicinemas.pt/Content/img/dolby_bg.jpg);
    background-attachment: fixed;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
    background-position: absolute;
  }

  .main-component
  {
    position: relative;
    height: 84vh;
    width: 100%;
    box-sizing: border-box;
  }

  /* -------------------------- Header ----------------------- */
  .index-header
  {
      position: relative;
      height: 15vh;
      width: 100%;
      background: rgba(0,0,0,.7);
      box-shadow: 3px 6px 20px black;
      display: flex;
      align-items: center;
      z-index: 2;
  }

  .index-header_title
  {
      position: absolute;
      margin: 0;
      display: inline-block;
      color: #3BC7FF;
      font-size: 8dvh;
      margin-left: 2dvw;
      font-family: 'Yanone Kaffeesatz', sans-serif;
      letter-spacing: 1px;
  }

  .index-header_title_link
  {
      text-decoration: none;
      cursor: pointer;
  }

  .index-header_title_link:visited
  {
      color: inherit;
  }

  /* ----------------- Menu ---------------- */
  .index-header_menu
  {
      position: absolute;
      width: 36.4dvw;
      padding: 0 0 1.7dvw;
      left: 0;
      right: 0;
      bottom: 0.25dvh;
      margin: auto;
      overflow: hidden;
  }

  .index-header_menu_options
  {
      display: flex;
      align-items: center;
  }

  .index-header_menu_options_list
  {
      list-style: none;
      padding: 0;
      margin: 0;
      cursor: default;
  }

  .index-header_menu_options_list_option
  {
      position: relative;
      color: #F6F6F6;
      font-family: 'Yanone Kaffeesatz', sans-serif;
      font-weight: bold;
      font-size: 2.1dvw;
      padding: 0 10px;
      border-bottom: 1.7px solid transparent;
      border-radius: 8px;
      display: inline-block;
  }

  .option-margin-right
  {
      margin-inline-end: 3dvw;
  }

  .option-text
  {
      position: relative;
      height: 100%;
      width: 100%;
      cursor: pointer;
      z-index: 1;
  }

  .option-border-bottom
  {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      bottom: -6vh;
      transition: ease .2s;
      border-bottom: .15dvw solid #3BC7FF;
      border-radius: .4dvw;
  }

  .option-text:hover
  {
      color: white;
      text-shadow: 0 0 1.8px #F6F6F6;
  }

  .option-text:hover ~ .option-border-bottom
  {
      bottom: -5px;
      transition: ease .2s;
  }
  /* --------------------------------------- */

  /* -------------------- Button Login ----------------------- */
  .index-header_div-one
  {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      height: 10.6dvh;
      width: 10dvw;
      margin: auto;
      margin-right: 2dvw;
      z-index: 1;
  }

  .index-header_div-one_button
  {
      position: absolute;
      width: inherit;
      padding: .8dvh 0;
      right: 0;
      box-sizing: border-box;
      background: #3BC7FF;
      color: white;
      font-size: 1.5dvw;
      font-weight: bold;
      font-family: 'Yanone Kaffeesatz', sans-serif;
      letter-spacing: 1px;
      border: 3px outset white;
      border-radius: 2dvw;
      cursor: pointer;
      overflow: hidden;
  }

  .index-header_div-one_button:hover
  {
      color: #FFFFFF;
  }

  #text-btn-loggin
  {
      position: relative;
      z-index: 1;
  }

  #background-btn-loggin
  {
      position: absolute;
      height: 5.5dvh;
      width: inherit;
      left: -1px;
      top: -11.9dvh;
      border-left: 10dvw solid #31EE79;
      border-bottom: 3dvw solid transparent;
      transition: ease .4s;
  }

  .index-header_div-one_button:hover #background-btn-loggin
  {
      top: -.3dvh;
      transition: ease .4s;
  }

  .index-header_div-one_button:active
  {
      border: 3px inset white;
  }
  /* --------------------------------------------------------- */

  /* ------------------ Subtitulo "Registro" ----------------- */
  .index-header_div-one_subtitle
  {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 80%;
      font-size: 1.6dvw;
      font-family: 'Yanone Kaffeesatz', sans-serif;
      color: #3BC7FF;
      cursor: pointer;
      transition: ease .4s;
      text-align: center;
      margin: auto;
  }

  .index-header_div-one_subtitle:hover
  {
      color: white;
      transition: ease .4s;
  }
  /* --------------------------------------------------------- */

  /* --------------------- Hamburger Menu -------------------- */
  div.index-header_div-two
  {
    position: absolute;
    width: 120px;
    height: 72px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    margin-right: 2dvw;
    overflow: hidden;
    display: none;
  }

  div.index-header_div-two_hambuger-menu
  {
    position: absolute;
    height: inherit;
    width: 68%;
    right: 0;
    cursor: pointer;
  }

  div.index-header_div-two_dynamic-width
  {
    position: absolute;
    height: inherit;
    width: 55%;
    right: 0;
    left: -2.8px;
    margin: auto;
    cursor: pointer;
    display: none;
    /* background: rgba(139, 0, 0, .6); */
  }

  div.index-header_div-two_hambuger-menu span.hamburger-menu
  {
    position: absolute;
    width: 100%;
    height: 15px;
    background: white;
    transition: .4s ease;
  }

  div.index-header_div-two_hambuger-menu span.hamburger-menu:nth-child(2)
  {
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    transition: .4s ease;
  }

  div.index-header_div-two_hambuger-menu span.hamburger-menu:last-child
  {
    bottom: 0;
    transition: .4s ease;
  }
  /* --------------------------------------------------------- */

  /* ----------------- Hamburger Menu Submenu ---------------- */
  div.index-header_div-three
  {
    position: absolute;
    width: 55vw;
    top: 15vh;
    right: 0;
    background: rgb(39, 39, 39);
    right: -80vw;
    z-index: 1;
  }

  /* div.index-header_div-three div.index-header_div-three-menu
  {
    position: relative;
    height: inherit;
  } */

  div.index-header_div-three div.index-header_div-three_sub-menu
  {
    position: relative;
    text-align: center;
  }

  div.index-header_div-three div.index-header_div-three_sub-menu_buttons
  {
    position: relative;
    width: 85%;
    margin: auto;
    margin-top: 6dvh;
    margin-bottom: 6dvh;
  }

  div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button
  {
    display: block;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    width: 100%;
    padding: 1.3dvw 0;
    font-size: 6dvw;
    border-radius: 5dvw;
    border: 4px outset white;
    background: rgb(68, 65, 65);
    color: white;
    letter-spacing: 1px;
    box-sizing: border-box;
  }

  div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button:active
  {
    border: 4px inset white;
  }

  div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button:first-child
  {
    color: #3BC7FF;
    margin-bottom: 20px;
  }

  div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button:first-child:active
  {
    color: white;
  }

  div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button:last-child
  {
    background: #3BC7FF;
  }

  div.index-header_div-three ul.index-header_div-three_sub-menu_options
  {
    list-style-type: none;
    width: 85%;
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 6.5dvw;
    margin: auto;
  }

  div.index-header_div-three ul.index-header_div-three_sub-menu_options a:active
  {
    color: rgb(185, 185, 185);
  }

  ul.index-header_div-three_sub-menu_options hr.line
  {
    margin: 0;
  }

  ul.index-header_div-three_sub-menu_options hr.line:last-child
  {
    margin-bottom: 0;
  }

  ul.index-header_div-three_sub-menu_options li.index-header_div-three_sub-menu_option
  {
    position: relative;
    width: 100%;
    height: 10dvh;
  }

  ul.index-header_div-three_sub-menu_options li.index-header_div-three_sub-menu_option a
  {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* --------------------------------------------------------- */

  /* -------------------------------- Responsive Design --------------------------------- */
  @media screen and (max-width: 913px) and (max-height: 1369px)
  {
    body
    {
      background-size: auto 100%;
    }

    .index-header_title
    {
      margin-left: 4dvw;
    }
  }

  /* -------------------- Title ------------------- */
  @media screen and (max-width: 821px) and (max-height: 1181px)
  {
    .index-header
    {
      height: 14vh;
    }

    .index-header_title
    {
      font-size: 7dvh;
    }
  }

  @media screen and (max-width: 413px) and (max-height: 916px)
  {
    .index-header
    {
      height: 12vh;
    }
  }

  @media screen and (max-width: 415px)
  {
    .index-header
    {
      height: 13vh;
    }

    .index-header_title
    {
      font-size: 6.3dvh;
    }
  }

  @media screen and (max-width: 388px)
  {
    .index-header_title
    {
      font-size: 6dvh;
    }
  }

  @media screen and (max-width: 281px)
  {
    .index-header_title
    {
      font-size: 5.5dvh;
    }
  }
  /* ---------------------------------------------- */

  /* -------------------- Menu -------------------- */
  @media screen and (max-width: 3841px)
  {
    .index-header_menu
    {
      width: 34.2dvw;
    }
  }

  @media screen and (max-width: 3755px)
  {
    .index-header_menu
    {
      width: 34.3dvw;
    }
  }

  @media screen and (max-width: 3588px)
  {
    .index-header_menu
    {
      width: 34.4dvw;
    }
  }

  @media screen and (max-width: 3433px)
  {
    .index-header_menu
    {
      width: 34.5dvw;
    }
  }

  @media screen and (max-width: 3292px)
  {
    .index-header_menu
    {
      width: 34.6dvw;
    }
  }

  @media screen and (max-width: 3162px)
  {
    .index-header_menu
    {
      width: 34.7dvw;
    }
  }

  @media screen and (max-width: 3042px)
  {
    .index-header_menu
    {
      width: 34.8dvw;
    }
  }

  @media screen and (max-width: 2930px)
  {
    .index-header_menu
    {
      width: 34.9dvw;
    }
  }

  @media screen and (max-width: 2824px)
  {
    .index-header_menu
    {
      width: 35dvw;
    }
  }

  @media screen and (max-width: 2730px)
  {
    .index-header_menu
    {
      width: 35.1dvw;
    }
  }

  @media screen and (max-width: 2639px)
  {
    .index-header_menu
    {
      width: 35.2dvw;
    }
  }

  @media screen and (max-width: 2556px)
  {
    .index-header_menu
    {
      width: 35.3dvw;
    }
  }

  @media screen and (max-width: 2476px)
  {
    .index-header_menu
    {
      width: 35.4dvw;
    }
  }

  @media screen and (max-width: 2403px)
  {
    .index-header_menu
    {
      width: 35.5dvw;
    }
  }

  @media screen and (max-width: 2332px)
  {
    .index-header_menu
    {
      width: 35.6dvw;
    }
  }

  @media screen and (max-width: 2265px)
  {
    .index-header_menu
    {
      width: 35.7dvw;
    }
  }

  @media screen and (max-width: 2203px)
  {
    .index-header_menu
    {
      width: 35.8dvw;
    }
  }

  @media screen and (max-width: 2144px)
  {
    .index-header_menu
    {
      width: 35.9dvw;
    }
  }

  @media screen and (max-width: 2089px)
  {
    .index-header_menu
    {
      width: 36dvw;
    }
  }

  @media screen and (max-width: 2034px)
  {
    .index-header_menu
    {
      width: 36.1dvw;
    }
  }

  @media screen and (max-width: 1984px)
  {
    .index-header_menu
    {
      width: 36.2dvw;
    }
  }

  @media screen and (max-width: 1936px)
  {
    .index-header_menu
    {
      width: 36.3dvw;
    }
  }

  @media screen and (max-width: 1890px)
  {
    .index-header_menu
    {
      width: 36.4dvw;
    }
  }

  @media screen and (max-width: 1848px)
  {
    .index-header_menu
    {
      width: 36.5dvw;
    }
  }

  @media screen and (max-width: 1804px)
  {
    .index-header_menu
    {
      width: 36.6dvw;
    }
  }

  @media screen and (max-width: 1764px)
  {
    .index-header_menu
    {
      width: 36.7dvw;
    }
  }

  @media screen and (max-width: 1728px)
  {
    .index-header_menu
    {
      width: 36.8dvw;
    }
  }

  @media screen and (max-width: 1690px)
  {
    .index-header_menu
    {
      width: 36.9dvw;
    }
  }

  @media screen and (max-width: 1656px)
  {
    .index-header_menu
    {
      width: 37dvw;
    }
  }

  @media screen and (max-width: 1623px)
  {
    .index-header_menu
    {
      width: 37.1dvw;
    }
  }

  @media screen and (max-width: 1590px)
  {
    .index-header_menu
    {
      width: 37.2dvw;
    }
  }

  @media screen and (max-width: 1559px)
  {
    .index-header_menu
    {
      width: 37.3dvw;
    }
  }

  @media screen and (max-width: 1529px)
  {
    .index-header_menu
    {
      width: 37.4dvw;
    }
  }

  @media screen and (max-width: 1501px)
  {
    .index-header_menu
    {
      width: 37.5dvw;
    }
  }

  @media screen and (max-width: 1474px)
  {
    .index-header_menu
    {
      width: 37.6dvw;
    }
  }

  @media screen and (max-width: 1446px)
  {
    .index-header_menu
    {
      width: 37.7dvw;
    }
  }

  @media screen and (max-width: 1420px)
  {
    .index-header_menu
    {
      width: 37.8dvw;
    }
  }

  @media screen and (max-width: 1396px)
  {
    .index-header_menu
    {
      width: 37.9dvw;
    }
  }

  @media screen and (max-width: 1372px)
  {
    .index-header_menu
    {
      width: 38dvw;
    }
  }

  @media screen and (max-width: 1348px)
  {
    .index-header_menu
    {
      width: 38.1dvw;
    }
  }

  @media screen and (max-width: 1326px)
  {
    .index-header_menu
    {
      width: 38.2dvw;
    }
  }

  @media screen and (max-width: 1304px)
  {
    .index-header_menu
    {
      width: 38.3dvw;
    }
  }

  @media screen and (max-width: 1284px)
  {
    .index-header_menu
    {
      width: 38.4dvw;
    }
  }

  @media screen and (max-width: 1264px)
  {
    .index-header_menu
    {
      width: 38.5dvw;
    }
  }

  @media screen and (max-width: 1244px)
  {
    .index-header_menu
    {
      width: 38.6dvw;
    }
  }

  @media screen and (max-width: 1225px)
  {
    .index-header_menu
    {
      width: 38.7dvw;
    }
  }

  @media screen and (max-width: 1206px)
  {
    .index-header_menu
    {
      width: 38.8dvw;
    }
  }

  @media screen and (max-width: 1189px)
  {
    .index-header_menu
    {
      width: 38.9dvw;
    }
  }

  @media screen and (max-width: 1170px)
  {
    .index-header_menu
    {
      width: 39dvw;
    }
  }

  @media screen and (max-width: 1154px)
  {
    .index-header_menu
    {
      width: 39.1dvw;
    }
  }

  @media screen and (max-width: 1138px)
  {
    .index-header_menu
    {
      width: 39.2dvw;
    }
  }

  @media screen and (max-width: 1122px)
  {
    .index-header_menu
    {
      width: 39.3dvw;
    }
  }

  @media screen and (max-width: 1106px)
  {
    .index-header_menu
    {
      width: 39.4dvw;
    }
  }

  @media screen and (max-width: 1091px)
  {
    .index-header_menu
    {
      width: 39.5dvw;
    }
  }

  @media screen and (max-width: 1077px)
  {
    .index-header_menu
    {
      width: 39.6dvw;
    }
  }

  @media screen and (max-width: 1063px)
  {
    .index-header_menu
    {
      width: 39.7dvw;
    }
  }

  @media screen and (max-width: 1049px)
  {
    .index-header_menu
    {
      width: 39.8dvw;
    }
  }

  @media screen and (max-width: 1035px)
  {
    .index-header_menu
    {
      width: 39.9dvw;
    }
  }

  @media screen and (max-width: 1022px)
  {
    .index-header_menu
    {
      width: 40dvw;
    }
  }

  @media screen and (max-width: 1009px)
  {
    .index-header_menu
    {
      width: 40.1dvw;
    }
  }

  @media screen and (max-width: 996px)
  {
    .index-header_menu
    {
      width: 40.2dvw;
    }
  }
  /* --------------------------------------------------------- */

  /* --------------------- Hamburger Menu -------------------- */
  @media screen and (max-width: 913px) and (max-height: 1369px)
  {
    .index-header_menu
    {
      display: none;
    }

    .index-header_div-one
    {
      display: none;
    }

    div.index-header_div-two
    {
      display: block;
      width: 122.5px;
      margin-right: 4dvw;
    }

    div.index-header_div-two_dynamic-width
    {
      left: 0;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 13px;
    }
  }

  @media screen and (max-width: 821px) and (max-height: 1181px)
  {
    div.index-header_div-two
    {
      width: 84px;
      height: 51px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: -1px;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 10px;
    }
  }

  @media screen and (max-width: 768px) and (max-height: 1024px)
  {
    div.index-header_div-two
    {
      width: 87px;
      height: 52px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: -1.4px;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 10px;
    }
  }

  @media screen and (max-width: 541px)
  {
    div.index-header_div-two
    {
      width: 51px;
      height: 30px;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 5.6px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: 0;
    }
  }

  @media screen and (max-width: 415px)
  {
    div.index-header_div-two
    {
      width: 49px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: -1.6px;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 6.5px;
    }
  }

  @media screen and (max-width: 394px)
  {
    div.index-header_div-two
    {
      width: 50px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: -.1;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 6px;
    }
  }

  @media screen and (max-width: 394px)
  {
    div.index-header_div-two_dynamic-width
    {
      left: 0;
    }
  }

  @media screen and (max-width: 388px)
  {
    div.index-header_div-two
    {
      width: 46px;
      height: 28px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: -.9px;
    }
  }

  @media screen and (max-width: 376px)
  {
    div.index-header_div-two
    {
      width: 43px;
      height: 26px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: .5px;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 4.8px;
    }
  }

  @media screen and (max-width: 361px)
  {
    div.index-header_div-two
    {
      width: 43px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: -.5px;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 5.2px;
    }
  }

  @media screen and (max-width: 281px)
  {
    div.index-header_div-two
    {
      width: 37.5px;
      height: 22px;
    }

    div.index-header_div-two_dynamic-width
    {
      left: -.4px;
    }

    div.index-header_div-two_hambuger-menu span.hamburger-menu
    {
      height: 4.3px;
    }
  }
  /* --------------------------------------------------------- */

  /* --------------------- Hamburger Menu -------------------- */
  @media screen and (max-width: 821px) and (max-height: 1180px)
  {
    div.index-header_div-three
    {
      top: 14vh;
    }
  }

  @media screen and (max-width: 415px) and (max-height: 897px)
  {
    div.index-header_div-three
    {
      top: 13vh;
    }
  }

  @media screen and (max-width: 413px) and (max-height: 916px)
  {
    div.index-header_div-three
    {
      top: 13vh;
    }
  }
  /* --------------------------------------------------------- */
</style>

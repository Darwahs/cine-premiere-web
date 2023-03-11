<template>
    <section>
        <div class="main-section-div">
            <div class="main-section-div_div">
                <div class="main-section-div_slider" v-for="image in images">
                    <img class="main-section-div_slider_img"
                        :src="image.url"
                    />
                    <div class="main-section-div_slider_div">
                        <h2 class="main-section-div_slider_div_title"></h2>
                    </div>
                </div>
                <button class="main-section_div_btn-slider" id="btn-left" v-on:click="prevImageBtn">&#60</button>
                <button class="main-section_div_btn-slider" id="btn-right" v-on:click="nextImageBtn">&#62</button>
            </div>
        </div>
    </section>
</template>

<script>
    import {ref} from 'vue'

    export default
    {
        name: "mainPage",

        data()
        {
            return {
                counter: 0,
            }
        },

        setup()
        {
            const images = ref([
                {url: require('@/Images/Catalogo.jpg')},
                {url: require('@/Images/Estrenos.jpg')},
                {url: require('@/Images/Familia-Y-Cine.jpg')},
                {url: require('@/Images/Promos.png')},
                {url: require('@/Images/Promo-Cumple.jpg')},
            ]);

            return {images};
        },

        methods:
        {
            createElementsSlider()
            {
                const div_titles_imgs = document.querySelectorAll('.main-section-div_slider_div_title');

                const titles_imgs = ["Cartelera Cine Premiere", "Estrenos proximamente...", "Conoce nuestros planes familiares",
                "Promociones Premiere", "Vive tu cumpleaños de película"];

                for(let x=0; x<div_titles_imgs.length; x++)
                {
                    div_titles_imgs[x].textContent = titles_imgs[x];
                }
            },

            nextImage()
            {
                const array_images = document.querySelectorAll('.main-section-div_slider');
                array_images[this.counter].style.visibility='visible';
                array_images[this.counter].style.opacity='1';

                const nextAuto = (() =>
                {
                    array_images[this.counter].style.transition="1.8s ease";
                    array_images[this.counter].style.visibility='hidden';
                    array_images[this.counter].style.opacity='0';
                    this.counter++;
                    if(this.counter > 4)
                    {
                        this.counter = 0;
                    }
                    array_images[this.counter].style.transition="1s ease";
                    array_images[this.counter].style.visibility='visible';
                    array_images[this.counter].style.opacity='1';
                });

                let interval = setInterval(() => nextAuto(), 8000);

                const div_slider = document.querySelector('.main-section-div_div');
                const btns_slider = document.querySelectorAll('.main-section_div_btn-slider');
                
                div_slider.addEventListener('mouseenter', () =>
                {
                    clearInterval(interval);

                    for(let button of btns_slider)
                    {
                        button.style.opacity='1';
                    }
                });

                div_slider.addEventListener('mouseleave', () =>
                {
                    interval = setInterval(() => nextAuto(), 8000);

                    for(let button of btns_slider)
                    {
                        button.style.opacity='0';
                    }
                });

                const div_slider_second = document.querySelectorAll('.main-section-div_slider');
                const div_title = document.querySelectorAll('.main-section-div_slider_div');

                for(let x=0; x<div_slider_second.length; x++)
                {
                    div_slider_second[x].addEventListener('mouseover', () =>
                    {
                        div_title[x].style.transition='.4s ease';
                        div_title[x].style.background='rgba(59, 199, 255, .95)';
                    });

                    div_slider_second[x].addEventListener('mouseout', () =>
                    {
                        div_title[x].style.transition='.4s ease';
                        div_title[x].style.background='rgba(6, 6, 6, 0.9)';
                    });
                }
            },

            nextImageBtn()
            {
                const array_images = document.querySelectorAll('.main-section-div_slider');
                array_images[this.counter].style.transition='none';
                array_images[this.counter].style.visibility='hidden';
                array_images[this.counter].style.opacity='0';
                this.counter++;
                if(this.counter > 4)
                {
                    this.counter = 0;
                }
                array_images[this.counter].style.transition='none';
                array_images[this.counter].style.visibility='visible';
                array_images[this.counter].style.opacity='1';
            },

            prevImageBtn()
            {
                const array_images = document.querySelectorAll('.main-section-div_slider');
                array_images[this.counter].style.transition='none';
                array_images[this.counter].style.visibility='hidden';
                array_images[this.counter].style.opacity='0';
                this.counter--;
                if(this.counter < 0)
                {
                    this.counter = array_images.length-1;
                }
                array_images[this.counter].style.transition='none';
                array_images[this.counter].style.visibility='visible';
                array_images[this.counter].style.opacity='1';
            },
        },

        created()
        {
        },

        mounted() // Mounted es declarada para ejecutar funciones por intervalos tiempo
        {
            this.createElementsSlider();
            this.nextImage();
        },
    }
</script>

<style>
    .main-section-div
    {
        position: absolute;
        height: 53vh;
        width: 50vw;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        border: 5px double #3BC7FF;
    }

    .main-section-div_div
    {
        position: absolute;
        height: inherit;
        width: inherit;
    }

    .main-section-div_slider
    {
        position: absolute;
        width: inherit;
        height: inherit;
        visibility: hidden;
        opacity: 0;
        cursor: pointer;
    }

    .main-section-div_slider_img
    {
        position: absolute;
        width: inherit;
        height: inherit;
    }

    .main-section-div_slider_div
    {
        position: absolute;
        bottom: 0;
        height: 23%;
        width: inherit;
        border-top: 1px solid white;
        background: rgba(6, 6, 6, 0.9);
    }

    .main-section-div_slider_div_title
    {
        color: white;
        margin: 0;
        margin-top: 1.5dvh;
        margin-left: 1.5dvw;
        font-size: 2.5dvw;
    }

    /* -------------------- Buttons -------------------- */
    .main-section_div_btn-slider
    {
        position: absolute;
        height: 30px;
        width: 30px;
        top: 0;
        bottom: 0;
        margin: auto;
        background: rgba(0, 0, 0, .4);
        color: rgba(250, 250, 250, .8);
        font-weight: bold;
        border-radius: 50%;
        font-size: 1.5dvw;
        border: 1.5px inset gray;
        cursor: pointer;
        transition: .4s ease;
        opacity: 0;
    }

    .main-section_div_btn-slider:hover
    {
        background: rgb(0, 0, 0);
        color: white;
        transition: .4s ease;
    }

    .main-section_div_btn-slider:active
    {
        border: 1.5px outset gray;
    }

    #btn-left
    {
        margin-left: 10px;
    }

    #btn-right
    {
        right: 0;
        margin-right: 10px;
    }
    /* ------------------------------------------------- */


/* -------------------------------- Responsive Design --------------------------------- */

    /* ------------------------ Slider ------------------------- */
    @media screen and (max-width: 1281px) and (max-height: 801px)
    {
        .main-section-div
        {
            height: 320px;
            width: 43vw;
        }
    }

    @media screen and (max-width: 1025px) and (max-height: 601px)
    {
        .main-section-div
        {
            height: 310px;
            width: 48vw;
        }
    }

    @media screen and (max-width: 913px) and (max-height: 1369px)
    {
        .main-section-div
        {
            height: 400px;
            width: 85%;
            margin-top: 80px;
        }

        .main-section-div_div
        {
            width: 100%;
        }

        .main-section-div_slider_div_title
        {
            font-size: 4.5dvw;
        }
    }

    @media screen and (max-width: 541px) and (max-height: 721px)
    {
        .main-section-div
        {
            height: 43vh;
            width: 90%;
            margin-top: 50px;
        }
    }

    @media screen and (max-width: 415px) and (max-height: 897px)
    {
        .main-section-div
        {
            height: 28vh;
            width: 93%;
            margin-top: 50px;
        }
    }

    @media screen and (max-width: 413px) and (max-height: 916px)
    {
        .main-section-div
        {
            height: 28vh;
            width: 93%;
            margin-top: 50px;
        }
    }

    @media screen and (max-width: 376px) and (max-height: 668px)
    {
        .main-section-div
        {
            height: 30vh;
            width: 93%;
            margin-top: 40px;
        }
    }

    @media screen and (max-width: 281px) and (max-height: 654px)
    {
        .main-section-div
        {
            height: 26vh;
            margin-top: 35px;
        }
    }
    /* --------------------------------------------------------- */
    
    /* -------------- buttons logind and register -------------- */
    @media screen and (max-width: 415px) and (max-height: 897px)
    {
        div.index-header_div-three
        {
            width: 70vw;
        }

        div.index-header_div-three div.index-header_div-three_sub-menu_buttons
        {
            margin-top: 5.5dvh;
            margin-bottom: 5dvh;
        }

        div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button
        {
            padding: 1.8dvw 0;
            border-radius: 7dvw;
            font-size: 8dvw;
        }

        div.index-header_div-three ul.index-header_div-three_sub-menu_options
        {
            font-size: 8dvw;
        }
    }

    @media screen and (max-width: 413px) and (max-height: 916px)
    {
        div.index-header_div-three
        {
            width: 75vw;
        }

        div.index-header_div-three div.index-header_div-three_sub-menu_buttons
        {
            margin-top: 5.5dvh;
            margin-bottom: 5dvh;
        }

        div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button
        {
            padding: 1.8dvw 0;
            border-radius: 7dvw;
            font-size: 8dvw;
        }

        div.index-header_div-three ul.index-header_div-three_sub-menu_options
        {
            font-size: 8dvw;
        }
    }

    @media screen and (max-width: 376px) and (max-height: 668px)
    {
        div.index-header_div-three
        {
            width: 65vw;
        }

        div.index-header_div-three div.index-header_div-three_sub-menu_buttons
        {
            margin-top: 6.5dvh;
            margin-bottom: 6dvh;
        }

        div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button
        {
            padding: 1.5dvw 0;
            font-size: 7.3dvw;
        }

        div.index-header_div-three ul.index-header_div-three_sub-menu_options
        {
            font-size: 7.3dvw;
        }
    }

    @media screen and (max-width: 281px) and (max-height: 654px)
    {
        div.index-header_div-three
        {
            width: 75vw;
        }

        div.index-header_div-three div.index-header_div-three_sub-menu_buttons
        {
            margin-top: 5.5dvh;
            margin-bottom: 5dvh;
        }

        div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button
        {
            padding: 1.8dvw 0;
            border-radius: 7dvw;
            font-size: 8.5dvw;
            border: 3px outset white;
        }

        div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button:active
        {
            border: 3px inset white;
        }

        div.index-header_div-three_sub-menu_buttons button.index-header_div-three_sub-menu_buttons_button:first-child
        {
            margin-bottom: 10px;
        }

        div.index-header_div-three ul.index-header_div-three_sub-menu_options
        {
            font-size: 8.5dvw
        }

        ul.index-header_div-three_sub-menu_options li.index-header_div-three_sub-menu_option
        {
            height: 9.5dvh;
        }
    }
    /* --------------------------------------------------------- */
</style>
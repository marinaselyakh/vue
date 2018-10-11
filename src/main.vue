<template>
  <div id="slider">
    <div class="attach">
      <div class="slider_case">
        <v-slider v-bind="options">
          <div class="item"><h1>
            <span>Agency</span><br>
            Freebie psd download
          </h1>
            <p>
              Maecenas suscipit imperdiet nisi ac hendrerit. Nam congue felis ac massa rutrum
              pulvinar.
              Donec sodales eros sed efficitur mattis. Integer tincidunt, felis a placerat maximus,
              eros
              nulla dapibus dui, at facilisis enim odio at velit. Aenean dictum eleifend mi sit amet
              luctus.
            </p></div>
          <div class="item">Your Content</div>
          <div class="item">Your Content</div>
          <div class="item">Your Content</div>
          <div class="item">Your Content</div>
        </v-slider>
      </div>

    </div>
  </div>
</template>

<script>
  import slider from './slider.vue'
  export default {
    name: 'main',

    data () {
      return {
        options: {
          items: 1,
          margin: 20,
          nav: false,
          dots: true,
          loop: true,
          timing: 'ease',
          offset: 1,
          prevNav: 'Туда',
          nextNav: 'Сюда',
          speed:800,
          sibling: true,
          responsive : {
            0: {
              items: 1
            },
            768: {
              items: 1
            },
            999: {
              items: 1
            }
          }
        }
      }
    },
    components: {
      'v-slider': slider,
    }
  }
</script>



<template>
  <div class='bloc'>
    <p class='content'>{{ joke.value }}</p>
    <div v-if='joke.answer.length > 0' v-bind:class='[this.isMasked ? "" : "disable-mask" ]' class='answer content' v-on:click='toggleMask'>
      <div class='answer-mask'>
        <p>Réponse</p>
      </div>
      <p>{{ joke.answer }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isMasked: true
    }
  },
  props: {
    joke: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleMask () {
      this.isMasked = !this.isMasked
    }
  }
}
</script>

<style scoped>
  .bloc{
    max-width: 65vw;
  }

  .content{
    text-align: center;
    font-size: 42px;
    color: white;
    font-weight: 300;
    font-style: italic;
  }

  .answer{
    margin: 20px auto 0 auto;
    max-width: max-content;
    padding: 7px 20px;
    position: relative;
    color: transparent;
    transition: all ease .2s;
  }

  .answer-mask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    border: dashed 3px rgba(162, 60, 60, 0.5);
    font-size: 24px;
    opacity: 1;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .answer-mask:hover{
    opacity: 0;
  }

  .answer:hover{
    color: white;
  }

  .disable-mask .answer-mask{
    opacity: 0;
  }

  .disable-mask.answer{
    color: white;
  }

  .answer-mask p{
    color: rgba(162, 60, 60, 0.76);
  }

  @media screen and (max-width: 768px){
    .content{
      font-size: 26px;
    }

    .bloc{
      overflow: scroll;
      max-height: 60vh;
    }

    .answer-mask{
      font-size: 18px;
    }
  }
</style>

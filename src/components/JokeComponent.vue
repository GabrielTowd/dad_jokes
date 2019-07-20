<template>
  <div>
    <p class="content">{{ joke.value }}</p>
    <div v-if='joke.answer.length > 0' class="answer content">
      <div class="answer-mask">
        <p>Réponse</p>
      </div>
      {{ joke.answer }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    joke: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .content{
    text-align: center;
    font-size: 42px;
    color: white;
    font-family: 'Open Sans';
    font-weight: 300;
    font-style: italic;
  }

  .answer{
    margin: 20px auto 0 auto;
    width: max-content;
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
  }

  .answer-mask:hover{
    opacity: 0;
  }

  .answer:hover{
    color: white;
  }

  .answer-mask p{
    color: rgba(162, 60, 60, 0.76);
    text-align: center;
    line-height: 290%;
  }
</style>

<template>
  <div class="card">
    <div class="card__img"><img :src="cardImage" /></div>
    <div class="card__content">
      <div class="card__title">{{ cardTitle }}</div>
      <div class="card__subtitle">{{ cardSub }}</div>
      <div class="card__body">{{ cardText }}</div>
      <footer class="card__footer">
        <div v-if="user !== 'no'" class="card__user">
          <div class="card__user-img"><img :src="imageUser" /></div>
          <div class="card__user-name">
            <a target="_blank" :href="linkuser"> {{ user }}</a>
          </div>
        </div>
        <div class="card__button">
          <a target="_blank" :href="cardlink" :title="cardTitle" class="button--ghost--tertiary button--small">Ver página</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardImage: {
      required: true,
      type: String
    },
    cardTitle: {
      required: true,
      type: String
    },
    cardSub: {
      required: true,
      type: String
    },
    cardText: {
      required: true,
      type: String
    },
    cardlink: {
      required: true,
      type: String
    },
    user: {
      required: true,
      type: String
    },
    imageUser: {
      required: true,
      type: String
    },
    linkuser: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>

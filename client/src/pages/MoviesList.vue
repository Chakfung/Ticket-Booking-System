<template>
  <div id="movies-list">
    <div class="movies-container">
      <div
        @click="navigateToDetail(index)"
        :key="index"
        v-for="(i, index) in 18"
        class="movie-box"
      >
        <img src="@/assets/images/m1.png" alt="" />
        <div class="name">Kuru Otlar</div>
        <div class="time">2024.3.30 20:30</div>
        <div class="price">$80</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: []
    }
  },
  methods: {
    navigateToDetail(index) {
      this.$router.push({ name: 'Detail Page', params: { movieId: index } })
    },
    async fetch() {
      const res = await this.$http.get('/movie')
      this.movies = res.data
    }
  },
  mounted() {
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
#movies-list {
  max-height: 839px;
  .movies-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    .movie-box {
      background: $brand-primary;
      color: #fff;
      height: 420px;
      width: 230px;
      box-shadow: 0 2px 5px 2px rgba(darken($brand-primary, 40%), 0.75);
      img {
        width: 100%;
      }
    }
  }
}
</style>

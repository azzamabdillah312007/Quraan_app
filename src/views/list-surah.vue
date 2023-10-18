<script>
export default {
  data() {
    return {
      nilai: 0,
      dataFetch: [],
    };
  },
  methods: {
    async getData() {
      const raw = await fetch("https://equran.id/api/v2/surat");
      const data = await raw.json();
      this.dataFetch = data.data;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<template>
  <header>
    <div class="title">
      <i class="ri-book-open-fill"></i>
      <h2>Qur`an App</h2>
    </div>
    <ul>
      <li><router-link to="/">surah</router-link></li>
    </ul>
  </header>

  <!-- opening and search -->
  <section id="opening">
    <div class="title">
      <h1>Halaman surah</h1>
      <span>Assalamualaikum Warahmatullahi Wabarakatuh</span>
      <p>ألسلام عليكم ورحمة الله وبركاته</p>
    </div>
  </section>
  <!-- list JUZ and SURAH -->

  <section id="list">
    <div class="isi">
      <a href="">Juz</a>
      <a href="">Surah</a>
      <a href="">Audio</a>
    </div>
  </section>
  <!-- bagian surah -->

  <section id="surah">
    <div class="isisurah">
      <div class="isi" v-for="(surah, index) in dataFetch" :key="index">
        <div class="name">
          <p>{{ surah.namaLatin }}</p>
          <p>jumlah ayat : {{ surah.jumlahAyat }}</p>
        </div>
        <div class="baca">
          <router-link :to="'/detail/' + surah.nomor">Baca</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- bagian style -->
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

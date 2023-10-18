<script>
export default {
  data() {
    return {
      detailSurah: [],
    };
  },
  methods: {
    async getDetail() {
      const raw = await fetch(
        `https://equran.id/api/v2/surat/${this.$route.params.id}`
      );
      const data = await raw.json();
      this.detailSurah = data.data;
    },
  },
  mounted() {
    this.getDetail();
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
      <li><router-link to="/">Kembali</router-link></li>
    </ul>
  </header>
  <div id="detailsurah">
    <div class="judul">
      <span>surah :{{ detailSurah.namaLatin }}</span>
      <span> surah ke:{{ detailSurah.nomor }}</span>
    </div>
    <div class="bismillah">
      <p>﷽</p>
    </div>
    <div v-for="ayat in detailSurah.ayat" :key="ayat.nomorAyat">
      <div class="arab">
        <p>{{ ayat.teksArab }}</p>
      </div>
      <div class="indonesia">
        <p>{{ ayat.teksIndonesia }}</p>
      </div>
    </div>
  </div>
</template>

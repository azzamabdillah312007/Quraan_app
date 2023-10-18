
<script>
    export default{
      data(){
        return{
          formValues:{
            name:'',
            profileSumary:'',
            country:'',
            jobLocation :[]
          }
        }
      },methods:{
      },
    }
</script>

  <template>
    <div>
      <pre>
        {{ JSON.stringify(formValues, null , 2) }}
      </pre>
    </div>
      <form action="">
        <div>
          <label for="name">Name</label>
          <br>
          <input type="text" id="name" v-model="formValues.name">
        </div>

        <br><br>
        <div>
          <label for="profile">profile sumary</label>
          <textarea name="" id="profile" v-model="formValues.profileSumary"></textarea>
        </div>

        <div>
          <label for="country">country</label>
          <select id="country" v-model="formValues.country">
            <option value="indonesia">indonesia</option>
            <option value="england">england</option>
            <option value="germany">germany</option>
            <option value="france">france</option>
          </select>
        </div>

        <div>
          <label for="job-location">job location</label>
          <select id="job-location" multiple v-model="formValues.jobLocation">
            <option value="indonesia">indonesia</option>
            <option value="england">england</option>
            <option value="germany">germany</option>
            <option value="france">france</option>
          </select>
        </div>
      </form>
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

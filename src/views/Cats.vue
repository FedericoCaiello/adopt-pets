<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
      <template slot="name" slot-scope="data"> <!-- errore -->
        <route-link :to="'/pets/${data.index}'">{{
          data.value
        }}</route-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'

export default {
  data () {
    return {
      cats
    }
  }
}
</script>

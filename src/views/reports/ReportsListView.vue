<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Izlash"
              single-line
              hide-details
              outlined
              dense
            />
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="reportsTableHeaders" :items="statistics" :search="search">
              <template v-slot:[`item.timestamp`]="{ item }">
                {{ new Date(item.timestamp).toLocaleString() }}
              </template>
            </v-data-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click.prevent="downloadReport" color="primary"> Yuklab olish </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { createDateFilter } from 'vue-date-fns'
import locale from 'date-fns/locale/uz'
export default {
  name: 'ReportsView',
  filters: {
    date: createDateFilter('dd MMMM yyyy HH:mm', { locale }),
  },
  methods: {
    downloadReport() {
      this.$store.dispatch('office/downloadReport')
    },
  },
  created() {
    this.$store.dispatch('office/fetchStatistics')
  },
  computed: {
    ...mapGetters('office', ['statistics']),
  },
  data() {
    return {
      search: null,
      reportsTableHeaders: [
        { text: '#', value: 'id', divider: true },
        { text: 'Hodim', value: 'username', divider: true },
        { text: 'Departament', value: 'department_name', divider: true },
        { text: 'Lavozim', value: 'position_name', divider: true },
        { text: 'Faoliyat turi', value: 'task_name', divider: true },
        { text: 'Natija', value: 'result', divider: true },
        { text: 'Sarflagan vaqti', value: 'time', divider: true },
        { text: 'Qo`shilgan sanasi', value: 'timestamp', divider: true },
      ],
    }
  },
}
</script>

<style scoped></style>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat color="grey lighten-4">
          <v-card-actions>
            <v-stepper v-model="step" vertical width="100%">
              <v-stepper-step :complete="step > 1" step="1"> Departmentni tanlang </v-stepper-step>

              <v-stepper-content step="1">
                <v-card flat>
                  <v-card-text>
                    <v-select
                      v-model="department"
                      outlined
                      placeholder="Departmentni tanlang"
                      :items="departments"
                      item-text="name"
                      item-value="id"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="secondary" outlined @click.prevent="backToChooseOfficeType">
                      Ofis turini tanlashga qaytish
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-step :complete="step > 2" step="2"> Lavozimni tanlang </v-stepper-step>

              <v-stepper-content step="2">
                <v-card flat>
                  <v-card-text>
                    <v-select
                      v-model="position"
                      outlined
                      placeholder="Lavozimni tanlang"
                      :items="departmentPositions"
                      item-text="name"
                      item-value="id"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="secondary" outlined @click.prevent="backToChooseDepartment">
                      Departament tanlashga qaytish
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-step :complete="step > 3" step="3">
                Lavozim majburiyatlari formasini to'ldiring
              </v-stepper-step>

              <v-stepper-content step="3">
                <v-form @submit.prevent="sendApplication" v-model="valid" ref="form">
                  <v-card flat>
                    <v-card-text>
                      <v-row v-for="task in completedTasks" :key="task.id">
                        <v-col cols="12" md="6">
                          <v-autocomplete
                            v-model="task.task_id"
                            :items="positionTasks"
                            :rules="requiredRules"
                            item-text="name"
                            item-value="id"
                            outlined
                            dense
                            placeholder="Majburiyat nomi"
                            hint="Majburiyat nomini tanlang"
                            required
                          />
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-textarea
                            v-model="task.result"
                            :rules="requiredRules"
                            outlined
                            dense
                            placeholder="Qo'shimcha ma'lumot"
                            hint="Qo'shimcha ma'lumotni kiriting"
                            required
                            rows="1"
                            auto-grow
                          />
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-text-field
                            type="number"
                            v-model="task.time"
                            :rules="requiredRules"
                            outlined
                            dense
                            placeholder="Sarflangan vaqt"
                            hint="Sarflangan vaqtini kiriting"
                            required
                          />
                        </v-col>
                        <v-col cols="12" md="1">
                          <v-btn
                            v-if="completedTasks.length > 1"
                            @click.prevent="removeTask(task)"
                            icon
                            color="error"
                            class="ml-5"
                          >
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-col>
                        <v-divider v-if="completedTasks.length > 1" />
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-btn
                            v-if="positionTasks.length > completedTasks.length"
                            color="primary"
                            outlined
                            @click.prevent="addTask"
                          >
                            Qo'shish
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        class="mt-6"
                        color="secondary"
                        outlined
                        @click.prevent="backToChoosePosition"
                      >
                        Lavozim tanlashga qaytish
                      </v-btn>
                      <v-btn
                        class="mt-6"
                        color="primary"
                        type="submit"
                        @click.prevent="sendApplication"
                        :disabled="!valid"
                      >
                        Arizani jo'natish
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-stepper-content>
            </v-stepper>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="status" :type="status">
      {{ message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OfficeView',
  data() {
    return {
      valid: false,
      step: 1,
      department: null,
      position: null,
      completedTasks: [{ task_id: null, result: null, time: null }],
      requiredRules: [(v) => !!v || "To'ldirilishi kerak"],
      status: null,
      message: null,
    }
  },
  watch: {
    department(departmentId) {
      if (departmentId !== null) {
        this.$store
          .dispatch('office/fetchDepartmentPositions', {
            departmentId,
          })
          .then(() => {
            this.step = 2
          })
      }
    },
    position(positionId) {
      if (positionId !== null) {
        this.$store
          .dispatch('office/fetchPositionTasks', {
            positionId,
          })
          .then(() => {
            this.step = 3
          })
      }
    },
  },
  computed: {
    ...mapGetters('office', ['departments', 'departmentPositions', 'positionTasks']),
  },
  created() {
    this.$store.dispatch('office/fetchDepartments', {
      officeType: this.$store.state.office.officeType,
    })
  },
  methods: {
    sendApplication() {
      this.$store
        .dispatch('office/sendApplication', {
          tasks: this.completedTasks,
        })
        .then((response) => {
          if (response.result === 'OK') {
            this.status = 'success'
            this.message = "Ariza muvaffaqiyatli jo'natildi"
            this.$refs.form.reset()
          }
        })
    },
    addTask() {
      this.completedTasks.push({ task_id: null, result: null, time: null })
    },
    backToChooseOfficeType() {
      location.reload()
    },
    backToChooseDepartment() {
      this.department = null
      this.step = 1
    },
    backToChoosePosition() {
      this.completedTasks = [{ task_id: null, result: null, time: null }]
      this.$refs.form.reset()
      this.position = null
      this.step = 2
    },
    removeTask(task) {
      this.completedTasks = this.completedTasks.splice(this.completedTasks.indexOf(task), 1)
    },
  },
}
</script>

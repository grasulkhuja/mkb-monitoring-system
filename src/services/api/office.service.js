import axios from '@/libs/axios'

const OfficeService = {
  getDepartments: async (officeType) => {
    let data = null
    if (officeType === 'front') {
      const response = await axios.get('/departments/1')
      data = response.data
    }
    if (officeType === 'back') {
      const response = await axios.get('/departments/0')
      data = response.data
    }
    return data
  },
  getDepartmentPositions: async (departmentId) => {
    const { data } = await axios.get(`/positions/${departmentId}`)
    return data
  },
  getPositionTasks: async (positionId) => {
    const { data } = await axios.get(`/tasks/${positionId}`)
    return data
  },
  sendApplication: async (application) => {
    const { data } = await axios.post('/reports', application)
    return data
  },
}

export default OfficeService

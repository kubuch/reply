import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo.1crmcloud.com',
  },
  env:{
    login: 'admin',
    password: 'admin',
    firstName: 'Peter',
    lastName: 'Griffin'
  },
})
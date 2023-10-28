import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    pageTitles: {
      home: 'Home',
      login: 'Login',
      signup: 'Sign Up',
    },
    nav: {
      admin: 'Administration',
      company: 'Company',
      branches: 'Branches',
      serviceTypes: 'Service Types',
      users: 'Users',
      bookings: 'Bookings'
    }
  },
  pt: {
    pageTitles: {
      home: 'Home',
      login : 'Login',
      signup : 'Cadastre-se',
    },
    nav: {
      admin: 'Administração',
      company: 'Empresa',
      branches: 'Unidades',
      serviceTypes: 'Tipos de Serviço',
      users: 'Usuários',
      bookings: 'Reservas'
    }
  }
}

const i18n = createI18n({
  legacy: false, // necessary for composition API
  locale: navigator.language,
  fallbackLocale: 'en',
  messages,
  globalInjection: true
})

export default i18n

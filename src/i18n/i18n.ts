import { createI18n } from "vue-i18n"

const messages = {
  en: {
    pageTitles: {
      home: "Home",
      login: "Login",
      signup: "Sign Up",
    },
    nav: {
      admin: "Administration",
      company: "Company",
      branches: "Branches",
      serviceTypes: "Service Types",
      users: "Users",
      bookings: "Bookings"
    },
    login: {
      welcomeBack: "Welcome Back",
      password: "Password",
      forgotPassword: "Forgot password?"
    },
    messages: {
      pageNotFound: "Page Not Found",
      sorryWeCouldNotFindThePage: "Sorry, we couldn't find the page."
    },
    buttons : {
      goBack : "Go Back",
      goToHome: "Go to Home"
    }
  },
  pt: {
    pageTitles: {
      home: "Início",
      login : "Login",
      signup : "Cadastre-se",
    },
    nav: {
      admin: "Administração",
      company: "Empresa",
      branches: "Unidades",
      serviceTypes: "Tipos de Serviço",
      users: "Usuários",
      bookings: "Reservas"
    },
    login: {
      welcomeBack: "Bem-vindo(a) de Volta",
      password: "Senha",
      forgotPassword: "Esqueceu a senha?"
    },
    messages: {
      pageNotFound: "Página Não Encontrada",
      sorryWeCouldNotFindThePage: "Desculpe, mas a página que você solicitou não foi encontrada."
    },
    buttons : {
      goBack : "Voltar",
      goToHome: "Ir à Home"
    }
  }
}

const i18n = createI18n({
  legacy: false, // necessary for composition API
  locale: navigator.language,
  fallbackLocale: "en",
  messages,
  globalInjection: true
})

export default i18n

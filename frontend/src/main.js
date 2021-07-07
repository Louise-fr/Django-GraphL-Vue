import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'


const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  httpEndpoint: 'http://localhost:8000/graphql',
  wsEndpoint: null,
})


let app = createApp(App)
app.use(router)
app.use(gql)
app.use(apolloProvider)
app.mount('#app')


  

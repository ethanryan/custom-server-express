const express = require('express')
const next = require('next')
// const ENVIRONMENT = process.env.ENVIRONMENT || 'development'
const ENVIRONMENT = process.env.NODE_ENV || 'development'
// const dev = process.env.NODE_ENV !== 'production' // NOTE: dev is not production
const hostname = 'localhost'
// const PORT = process.env.PORT || 3000
const PORT = 3000


// when using middleware `hostname` and `port` must be provided below
const app = next({ dev: ENVIRONMENT === 'development', hostname, port: PORT })
const handle = app.getRequestHandler()


  return app.prepare().then(() => {
    const server = express()

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    const serverListening = server.listen(PORT, (error) => {
      if (error) {
        console.error(error)
      }

      console.info(`Bootstraping Thrusters w/ Configurations - `, process.env)
      console.info(`Running in ${ENVIRONMENT} mode @ http://${hostname}:${PORT}`)

      console.log(
        `\n\n\nEXAMPLE app is now running...\n\nEnvironment:\t\t\t ${
          ENVIRONMENT === 'development' ? 'local or development' : ENVIRONMENT
        }`
      )

      console.log(`\n\n\n**********************************`)
      console.log(`\n\nREADY TO ROCK! \nSee you at port ${PORT} :)`)
      console.log(`\n\n**********************************\n\n\n\n`)
    })

    return serverListening
  })
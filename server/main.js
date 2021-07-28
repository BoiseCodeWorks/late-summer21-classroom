import express from 'express'
import Startup from './Startup'
import DbContext from './db/DbConfig'
import { logger } from './utils/Logger'

// create server & socketServer
const app = express()
const port = process.env.PORT || 3000

// Establish Socket
Startup.ConfigureGlobalMiddleware(app)
Startup.ConfigureRoutes(app)

// Connect to AtlasDB
DbContext.connect()

// Start Server
app.listen(port, () => {
  logger.log('Server running on port:', port)
})

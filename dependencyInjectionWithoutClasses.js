// Dependency Injection without classes

'use strict'

import db from 'unicorn-db-vendor'
import App from './app'
// import UserManager from './user-manager'
import { makeCreateUser } from './user-manager'

const connection = new db.DatabaseConnection({
  host: 'database.app.com',
  port: 2121
})

// const userManager = new UserManager(connection)
const createUser = makeCreateUser(connection)

const app = new App(createUser)
app.start()

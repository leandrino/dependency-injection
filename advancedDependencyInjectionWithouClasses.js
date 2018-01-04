  'use strict'

import db from 'unicorn-db-vendor'
import App from './app'
import {
  makeCreateUser,
  makeDeleteUser,
  makeBanUser
} from './user-manager-adv.js';

const connection = new db.DatabaseConnection({
  host: 'database.app.com',
  port: 2121
})

// const {
//   createUser,
//   deleteUser,
//   updateUser,
//   banUser
// } = makeUsersUtils({ connection, mailService })

const createUser = makeCreateUser(connection)
const deleteUser = makeDeleteUser(connection)
const banUser = makeBanUser(connection, mailService)

const app = new App(createUser)
app.start()

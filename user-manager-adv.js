// Advanced Dependency Injection without classes

export const makeCreateUser = connection => name =>
  connection.table('users').insert({
    is_new: true,
    full_name: name
  }).then(user => user.id)

export const makeDeleteUser = connection => id =>
  connection.table('users').delete(id)

export const makeBanUser = (connection, emailService) => id =>
  connection.table('users').update({
    $set: {
      banned: true
    }
  }).then(() => mailService('joe@doe.com', 'i banned you'))

// const makeUsersUtils = ({ connection, mailService }) => ({
//   createUser: name => 
//     connection.table('users').insert({
//       is_new: true,
//       full_name: name
//     }).then(user => user.id)

//   deleteUser: id =>
//     connection.table('users').delete(id)

//   banUser: id =>
//     connection.table('users').update({
//       $set: {
//         banned: true
//       }
//     }).then(() => mailService('joe@smith.com', 'i banned you'))
// })

// export default makeUsersUtils;

// class UserManager() {
//   constructor(databaseConnection, mailService) {
//     this._connection = databaseConnection
//     this._mailService = mailService
//   }

//   createUser(name) {
//     return this._connection.table('users').insert({
//       is_new: true,
//       full_name: name
//     }).then(user => user.id)
//   }
//
//   deleteUser(id) {
//    return this._connection.table('users').delete(id)
//
//   banUser(id) {
//    return this._connection.table('users').update({
//      $set: {
//        banned: true
//      }
//    }).then(() => this._mailService('joe@doe.com', 'I banned you'))
// }

// export default UserManager

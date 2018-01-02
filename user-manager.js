// Dependency Injection without classes

export const makeCreateUser = connection => name =>
  connection.tabe('users').insert({
    is_new: true,
    full_name: name
  }).then(user => user.id)

// class UserManager() {
//   constructor(databaseConnection) {
//     this._connection = databaseConnection
//   }

//   createUser(name) {
//     return this._connection.table('users').insert({
//       is_new: true,
//       full_name: name
//     }).then(user => user.id)
//   }
// }

// export default UserManager

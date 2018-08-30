'use strict'

const User = use('App/Models/User')// Importamos o model de usuario;

class UserController {
  async create ({ request }) { // Definimos um novo método assíncrono create que recebe um parâmetro request
    //que possui todos dados da requisição como parâmetros,
    //corpo, headers, etc. Veja que estamos utilizando {} por volta dos parâmetros,
    //isso porque no AdonisJS utilizamos a desestruturação do ES6 no controller;

    // Buscamos os campos de username, email e password do corpo da nossa requisição e
    // os armazenamos em um objeto chamado data;
    const data = request.only([ 'username', 'email', 'password' ])

    //Criamos um novo usuário repassando os parâmetros vindos da requisição e
    //salvamos esse novo usuário em uma variável user;
    const user = await User.create(data)

    //Retornamos o novo usuário como resultado da requisição,
    //como selecionamos, no nosso caso o retorno será um JSON.
    return user
  }
}

module.exports = UserController

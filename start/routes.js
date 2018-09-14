'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

/**
 * Pronto, acabamos de criar uma rota que aceita o método POST
 * no endereço /users e chama o método create no controller UserController,
 */
Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

/**
 * Antes de continuarmos vamos criar as rotas para
 * cada um desses métodos index, show, store, update, destroy no arquivo start/routes.js. Ao invés de criar uma rota para
 * cada método o Adonis nos oferece um helper chamado resource
 * que pode ser usado da seguinte forma:
 */

 Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')

  /**
   * Nesse caso estamos informando para o Adonis
   * criar todas as rotas de listagem, exibição, criação, edição e remoção de imóveis em um único
   * comando. O método apiOnly() garante as rotas create e edit que deletamos
   * anteriormente não tenham rota,
   * já o middleware auth vai garantir que usuários não autenticados
   * não possam utilizar essas rotas.
   */

  Route.post('properties/:id/images', 'ImageController.store')
  .middleware('auth')

  Route.get('images/:path', 'ImageController.show')

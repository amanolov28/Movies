import homeHandler from '../Controls/homeHandler.js'
import registerHandler from '../Controls/registerHandler.js'
import loginHandler from '../Controls/loginHandler.js'
import logoutHandler from '../Controls/logoutHandler.js'
import createHendler from '../Controls/createHandler.js'
import detailsHandler from '../Controls/detailsHandler.js'
import editHandler from '../Controls/editHandler.js'

(() => {
  var app = Sammy('#container', function () {
    // include a plugin
    this.use('Handlebars', 'hbs');
  
    // define a 'route'
    this.get('#/', homeHandler);
    this.get('#/registration', registerHandler)
    this.post('#/registration', () => false)
    this.get('#/login', loginHandler)
    this.post('#/login', () => false)
    this.get('#/logout', logoutHandler)
    this.get('#/addmovie', createHendler)
    this.post('#/addmovie', () => false)
    this.get('#/details/:id', detailsHandler)
    this.get('#/edit/:id', editHandler)
    this.post('#/edit/:id', () => false)
    
  });
  // start the application
  app.run('#/');
})()


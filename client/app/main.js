import ValuesController from './Controllers/ValuesController.js'

class App {
  valuesController = new ValuesController();
}

// @ts-ignore
window.app = new App()

// Bootstrapping the application
// Important: Don't confuse => this is not the Bootstrap framework file

import 'bootstrap'
import '../sass/style.scss'

// Make jQuery available in the global scope
window['jQuery'] = window['$'] = require('jquery')
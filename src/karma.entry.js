// Make Angular, its testing utilities, and any peer dependencies
// that would normally be provided by the consuming app available
// to Karma.
//
// Note: inclusion order matters here.
import 'jquery';
import 'angular';
import 'angular-mocks';

// Load up all the test files and run them through webpack so
// html and js imports get transformed by the same loaders
// we use at runtime.
const context = require.context('./', true, /\.test\.js$/);
context.keys().forEach(context);

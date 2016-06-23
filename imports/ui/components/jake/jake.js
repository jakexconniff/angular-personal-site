import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './jake.html';
import { name as PostsList } from '../postsList/postsList';
import { name as PostDetails } from '../postDetails/postDetails';
import { name as Navigation } from '../navigation/navigation';
import { name as About } from '../about/about';

class Jake {}

const name = 'jake';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  PostsList,
  PostDetails,
  Navigation,
  About,
  'accounts.ui'
]).component(name, {
  template,
  controllerAs: name,
  controller: Jake
})
  .config(config)
  .run(run);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');
}

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('home');
    }
  });
}

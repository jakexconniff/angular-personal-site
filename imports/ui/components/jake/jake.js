import angular from 'angular';
import ngAnimate from 'angular-animate';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import template from './jake.html';
import { name as PostsList } from '../postsList/postsList';
import { name as PostDetails } from '../postDetails/postDetails';
import { name as Navigation } from '../navigation/navigation';
import { name as Auth } from '../auth/auth';
import { name as About } from '../about/about';
import { name as Experience } from '../experience/experience';

class Jake {}

const name = 'jake';

// create a module
export default angular.module(name, [
  angularMeteor,
  'ngAnimate',
  ngMaterial,
  uiRouter,
  PostsList,
  PostDetails,
  Navigation,
  Auth,
  About,
  Experience,
  'accounts.ui'
]).component(name, {
  template,
  controllerAs: name,
  controller: Jake
})
  .config(config)
  .run(run);

function config($locationProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');

    const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';

    $mdIconProvider
      .iconSet('social',
        iconPath + 'svg-sprite-social.svg')
      .iconSet('action',
        iconPath + 'svg-sprite-action.svg')
      .iconSet('communication',
        iconPath + 'svg-sprite-communication.svg')
      .iconSet('content',
        iconPath + 'svg-sprite-content.svg')
      .iconSet('toggle',
        iconPath + 'svg-sprite-toggle.svg')
      .iconSet('navigation',
        iconPath + 'svg-sprite-navigation.svg')
      .iconSet('image',
        iconPath + 'svg-sprite-image.svg')
      .defaultIconSet(
        iconPath + 'svg-sprite-google.svg');

        $mdThemingProvider.theme('default')
          .primaryPalette('indigo')
          .accentPalette('deep-purple');

  }

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('home');
    }
  });
}

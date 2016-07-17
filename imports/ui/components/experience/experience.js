import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './experience.html';

class Experience {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.animInRight = function($el) {
      $el.removeClass('not-visible');
      $el.addClass('animate-entrance-right');
    }

    this.animOutRight = function($el) {
      $el.addClass('not-visible');
      $el.removeClass('animate-entrance-right');
    }
  }
}

const name = "experience";

export default angular.module(name, [
  angularMeteor,
  uiRouter,
]).component(name, {
  template,
  controllerAs: name,
  controller: Experience
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
  .state('experience', {
    url: '/experience',
    template: '<experience flex></experience>'
  });
}

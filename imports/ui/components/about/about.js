import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './about.html';

class About {
    constructor($scope, $reactive) {
      'ngInject';

      $reactive(this).attach($scope);

      this.termClicked = '';
    }asdasd

    clickTerm(term) {
        this.termClicked = term;
        console.log(this.termClicked);
    }

    termCheck(term) {
      console.log(this.termClicked);
      console.log(term);
      return this.termClicked == term;
    }
}

const name = 'about';

export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: About
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about flex></about>'
    });
}

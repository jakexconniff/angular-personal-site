import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './about.html';

import { Skills } from '../../../api/posts/index';

class About {
    constructor($scope, $reactive) {
      'ngInject';

      $reactive(this).attach($scope);

      this.termClicked = '';

      this.subscribe('skills');

      this.helpers({
        skills() {
          return Skills.find({});
        }
      });
    }
    testFunction(rating) {
      console.log(rating);
      let stars = '';
      for (var i = 0; i < rating; i++) {
        console.log("tick");
        if (i - rating > 1) {
        } else {
        }
      }
      console.log(stars);
      return stars;
    }

    clickTerm(term) {

      console.log(term);
      if (this.termClicked == term) {
        this.termClicked = '';
      }
      else {
        this.termClicked = term;
      }
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

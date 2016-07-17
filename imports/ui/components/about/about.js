import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './about.html';

import { Skills } from '../../../api/posts/index';
import { Languages } from '../../../api/posts/index';

class About {
    constructor($scope, $reactive) {
      'ngInject';

      $reactive(this).attach($scope);

      this.skillClicked = '';
      this.languageClicked = '';

      this.animInRight = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animate-entrance-right');
      }

      this.animOutRight = function($el) {
        $el.addClass('not-visible');
        $el.removeClass('animate-entrance-right');
      }

      this.subscribe('skills');
      this.subscribe('languages');

      this.helpers({
        skills() {
          return Skills.find({});
        },
        languages() {
          return Languages.find({});
        }
      });
    }

    clickTerm(term, type) {
      if (type == 'language') {
        this.skillClicked = '';
        if (this.languageClicked == term) {
          this.languageClicked = '';
        }
        else {
          this.languageClicked = term;
        }
      }
      if (type == 'skill') {
        this.languageClicked = '';
        if (this.skillClicked == term) {
          this.skillClicked = '';
        }
        else {
          this.skillClicked = term;
        }
      }

      /* if (this.skillClicked == term) {
        this.skillClicked = '';
      }
      else {
        this.skillClicked = term;
      } */
    }

    termCheck(term) {
      console.log(this.skillClicked);
      console.log(term);
      return this.skillClicked == term;
    }
}

const name = 'about';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
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

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './postAddToast.html';
import { name as PostAdd } from '../postAdd/postAdd';
import { name as PostAddButton } from '../postAddButton/postAddButton';

class PostAddToast {
  constructor($scope, $reactive, $mdToast) {
    'ngInject';

    $reactive(this).attach($scope);

    console.log("inside the constructor:");
    console.log($mdToast);

    this.helpers({
      testHelper() {
        console.log("We out here.");
      },

    })
  }
  postToast() {
    console.log("Hello");
  }
}

const name = 'postAddToast';

export default angular.module(name, [
  angularMeteor,
  PostAdd,
  PostAddButton
]).component(name, {
  template,
  controllerAs: name,
  controller: PostAddToast
})

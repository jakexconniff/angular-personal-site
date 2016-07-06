import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navigation.html';


class Navigation {
    constructor($scope, $reactive) {
      'ngInject';

      $reactive(this).attach($scope);

      this.menuToggle = false;

      this.openMenu = function($mdOpenMenu, ev) {
        console.log($mdOpenMenu(ev));
         $mdOpenMenu(ev);
       };
    }
}


const name = 'navigation';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: Navigation
});

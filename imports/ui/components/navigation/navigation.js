import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navigation.html';


class Navigation {
    constructor($scope, $reactive, $state) {
      'ngInject';

      $reactive(this).attach($scope);

      this.menuToggle = false;

      this.openMenu = function($mdOpenMenu, ev) {
         $mdOpenMenu(ev);
       };
       console.log($state);
    }

    setActiveNav(item) {
      var sushi = document.getElementsByClassName('nav-item');
      for (i=0; i<sushi.length; i++) {
        console.log(sushi[i]);
        sushi[i].className += ' .active-nav';
      }
      console.log(sushi);
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

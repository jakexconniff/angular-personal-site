import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './postsSort.html';

class PostsSort {
  constructor() {
    this.changed();
  }

  changed() {
    this.onChange({
      sort: {
        [this.property]: parseInt(this.order)
      }
    });
  }
}

const name = 'postsSort';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    onChange: '&',
    property: '@',
    order: '@'
  },
  controllerAs: name,
  controller: PostsSort
});

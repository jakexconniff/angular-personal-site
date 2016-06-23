import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './postRemove.html';
import { Posts } from '../../../api/posts/index';

class PostRemove {
  remove() {
    if (this.post) {
      Posts.remove(this.post._id);
    }
  }
}

const name = 'postRemove';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    post: '<'
  },
  controllerAs: name,
  controller: PostRemove
});

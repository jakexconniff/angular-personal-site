import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './postRemove.html';
import { Posts } from '../../../api/posts/index';

class PostRemove {
  remove() {
    if (this.post) {
      console.log(this.post.owner + " " + Meteor.userId());
      Meteor.call('removePost', this.post, Meteor.userId());
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

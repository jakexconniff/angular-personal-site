import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './postDetails.html';
import { Posts } from '../../../api/posts/index';

class PostDetails {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.postId = $stateParams.postId;

    this.subscribe('posts');
    this.subscribe('users');

    this.helpers({
      post() {
        return Posts.findOne({
          _id: $stateParams.postId
        });
      },
      users() {
        return Meteor.users.find({});
      },
      isLoggedIn() {
        return !!Meteor.userId();
      },
      currentUserId() {
        return Meteor.userId();
      }
    });
  }
  isOwner(post) {
    if (post) {
      return this.isLoggedIn && post.owner === this.currentUserId;
    }
  }

  save() {
    Meteor.call('updatePost', this.post);
  }
}

const name = 'postDetails';

export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: PostDetails
})
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('postDetails', {
    url: '/posts/:postId',
    template: '<post-details></post-details>',
    resolve: {
      currentUser($q) {
        if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
  });
}

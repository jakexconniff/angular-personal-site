import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './postsList.html';
import { Posts } from '../../../api/posts/index';
import { name as PostsSort } from '../postsSort/postsSort';
import { name as PostAdd } from '../postAdd/postAdd';
import { name as PostRemove } from '../postRemove/postRemove';
import { name as PostAddButton } from '../postAddButton/postAddButton';
import { name as PostAddToast } from '../postAddToast/postAddToast';

class PostsList {
  constructor($scope, $reactive, $mdToast) {
    'ngInject';

    $reactive(this).attach($scope);

    this.perPage = 9;
    this.page = 1;
    this.sort = {
      name: 1
    };
    this.searchText = '';

    this.subscribe('posts', () => [{
      limit: parseInt(this.perPage),
      skip: parseInt((this.getReactively('page') - 1 ) * this.perPage ),
      sort: this.getReactively('sort')
    }, this.getReactively('searchText')
    ]);

    this.subscribe('users');


    this.helpers({
      posts() {
        return Posts.find({}, {
          sort: this.getReactively('sort')
        });
      },
      postsCount() {
        return Counts.get('numberOfPosts');
      },
      isLoggedIn() {
        return !!Meteor.userId();
      },
      currentUserId() {
        return Meteor.userId();
      }
    });
}

    // Test this as a helper.
    isOwner(post) {
      return this.isLoggedIn && post.owner === this.currentUserId;
    }

    pageChanged(newPage) {
      this.page = newPage;
    }

    sortChanged(sort) {
      this.sort = sort;
    }
}

const name = 'postsList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  PostAdd,
  PostRemove,
  utilsPagination,
  PostsSort,
  PostAddButton,
  PostAddToast
]).component(name, {
  template,
  controllerAs: name,
  controller: PostsList
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<posts-list flex></posts-list>'
    });
}

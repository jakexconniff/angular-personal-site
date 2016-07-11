import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './postAdd.html';
import { Posts } from '../../../api/posts/index';
import { PostsList } from '../postsList/postsList';

class PostAdd {
  constructor($mdToast) {
    'ngInject';
    this.post = {};

    this.showToast = function() {
      $mdToast.showSimple('You have made a post!');
    }
  }

  submit() {
    this.post.owner = Meteor.user()._id;
    this.post.ownerEmail = Meteor.user().emails[0].address;
    this.post.public = true; // This is a hack. Must change publish function to not restrict on "public".
    Meteor.call('addPost', this.post);

    if(this.done) {
      this.done();
      this.showToast();
    }

    this.reset();
  }

  reset() {
    this.post = {};
  }
}

const name = 'postAdd';

export default angular.module(name, [
  angularMeteor
])
.component(name, {
  template,
  bindings: {
    done: '&?'
  },
  controllerAs: name,
  controller: PostAdd
})
.controller('ToastCtrl', function($scope, $animate, $mdToast, $mdDialog) {
  'ngInject';
  this.showToaster = function() {
    $mdToast.show({
      position: 'bottom left',
      template: '<post-add-toast></post-add-toast>'
    });
  }

	$scope.disableHide = function () {
		$mdToast.updateContent({
			position: 'bottom right left',
			hideDelay: false
		});
	};
});

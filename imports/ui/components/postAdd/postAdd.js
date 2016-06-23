import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './postAdd.html';
import { Posts } from '../../../api/posts/index';

class PostAdd {
  constructor() {
    this.post = {};
  }

  submit() {
    this.post.owner = Meteor.user()._id;
    this.post.ownerEmail = Meteor.user().emails[0].address;
    this.post.public = true; // This is a hack. Must change publish function to not restrict on "public".
    console.log(this.post);
    Posts.insert(this.post);
    this.reset();
  }

  reset() {
    this.post = {};
  }
}

const name = 'postAdd';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: PostAdd
});

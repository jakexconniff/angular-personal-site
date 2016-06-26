import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Posts } from './collection';

export function addPost(post) {
  Posts.insert(post);
}

export function removePost(postId, userId) {
  check (postId, String);
  check (userId, String);

  if (!this.userId) {
    throw new Meteor.Error(400, 'You have to log in!');
  }
}

export function updatePost(post) {
  Posts.update({_id: post._id}, {$set: { name: post.name, description: post.description } },
      (error) => {
        if (error) {
          console.log('Oops, unable to update the post.');
        } else {
          console.log("Updated post!");
        }
      });

}

Meteor.methods({
  addPost,
  removePost,
  updatePost
});

import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Posts } from './collection';
import { Skills } from './collection';
import { Languages } from './collection';

if (Meteor.isServer) {

  Meteor.publish('posts', function(options, searchString) {
    const selector = {
      $or: [{
        $and: [{
          public: true
        }, {
          public: {
            $exists: true
          }
        }]
      }, {
        // when logged in user is the owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };

    if (typeof searchString === 'string' && searchString.length) {
      selector.name = {
        $regex: `.*${searchString}.*`,
        $options: 'i'
      };
    }

    Counts.publish(this, 'numberOfPosts', Posts.find(selector), {
      noReady: true
    });

    return Posts.find(selector, options);
  });

  Meteor.publish('skills', function() {
    return Skills.find();
  });

  Meteor.publish('languages', function() {
    return Languages.find();
  })
}

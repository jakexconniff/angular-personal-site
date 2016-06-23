import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';

Meteor.startup(() => {
  console.log(Posts.find().count());
  if (Posts.find().count() === 0) {
    const posts = [{
      'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'
    }, {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }, {
      'name': 'Savage lounging',
      'description': 'Leisure suit required. And only fiercest manners.'
    }];

    posts.forEach((post) => {
      Posts.insert(post)
    });
  }
});

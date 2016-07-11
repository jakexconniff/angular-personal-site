import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';
import { Skills } from '../api/posts';

Meteor.startup(() => {
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
  
  if (Skills.find().count() === 0) {
    const skills = [{
      'name': 'JavaScript',
      'description': 'I know how 2 JavaScript quite well. All I\'ve ever loved is JavaScript! My one true fleeky bae.',
      'rating': 5
    }, {
      'name': 'HTML',
      'description': 'How to Meet Ladies. I would put 10/10 if there were 10 stars!',
      'rating': 5
    }, {
      'name': 'CSS',
      'description': 'CSS stands for Cross Site Scripting. It is meant to allow you to hack enemy computers for world domination!!!!',
      'rating': 4.5
    }, {
      'name': 'C++',
      'description': 'I once got a grade of C++ in my English class. The teacher said it was so mediocre that it was worth two plusses.',
      'rating': 3
    }

  ];

    skills.forEach((skill) => {
      Skills.insert(skill)
    });
  }
});

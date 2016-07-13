import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

export const Skills = new Mongo.Collection('skills');
export const Languages = new Mongo.Collection('languages');

var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

/**
 * Release Model
 * ==========
 */

var Release = new keystone.List('Release', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
  //inherits: keystone.List('PublishableObject')
});

Release.add({
  title: { type: String, required: true },
  linerNotes: { type: Types.Html, wysiwyg: true, height: 300 },
  image: { type: Types.CloudinaryImage },
  year: { type: Date }
});

Release.relationship({ path: 'recordings', ref: 'Recording', refPath: 'releases' });

transform.toJSON(Release);
Release.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Release.register();
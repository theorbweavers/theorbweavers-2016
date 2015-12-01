var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

/**
 * Release Model
 * ==========
 */

var Release = new keystone.List('Release', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true }
});

Release.add({
  title: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
  liner_notes: { type: Types.Html, wysiwyg: true, height: 300 },
  image: { type: Types.CloudinaryImage },
  year: { type: Date }
});

Release.relationship({ path: 'recordings', ref: 'Recording', refPath: 'releases' });

transform.toJSON(Release);

Release.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Release.register();
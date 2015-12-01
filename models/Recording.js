var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;


/**
 * Recording Model
 * ==========
 */

var Recording = new keystone.List('Recording', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
  sortable: true,
  sortContext: 'Release:recordings'
});

Recording.add({
  title: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
  lyrics: { type: Types.Html, wysiwyg: true, height: 300 },
  image: { type: Types.CloudinaryImage },
  composers: { type: String },
  year: { type: Date },
  releases: { type: Types.Relationship, ref: 'Release', many: true }
});


transform.toJSON(Recording);
Recording.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Recording.register();

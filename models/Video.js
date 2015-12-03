var media = require('./Media.js');
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Video = new keystone.List('Video', {
  autokey: { from: 'name', path: 'key' },
  inherits: media.Media
});

Video.add({
  name: { type: String, required: true },
  video: { type: Types.Embedly, from: 'path' },
  description: { type: String }
});

Video.register();
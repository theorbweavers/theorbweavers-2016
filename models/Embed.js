var media = require('./Media.js');
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Embed = new keystone.List('Embed', {
  autokey: { from: 'name', path: 'key' },
  inherits: media.Media
});

Embed.add({
  embedLocation: { type: String },
  embed: { type: Types.Embedly, from: 'embedLocation' },
  description: { type: Types.Html, wysiwyg: true }
});

Embed.register();
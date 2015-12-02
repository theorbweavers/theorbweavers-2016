var keystone = require('keystone');
var Types = keystone.Field.Types;


var Video = new keystone.List('Video', {
  autokey: { from: 'name', path: 'key' }
});

Video.add({
  name: { type: String, required: true },
  video: { type: Types.CloudinaryImage },
  description: { type: String }
});

Video.register();
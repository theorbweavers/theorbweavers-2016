var keystone = require('keystone');
var Types = keystone.Field.Types;

var Image = new keystone.List('Image', {
	autokey: { from: 'name', path: 'key' },
  //inherits: keystone.List('Media')
});

Image.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
  description: { type: String }
});

Image.register();
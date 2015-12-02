var keystone = require('keystone');
var Types = keystone.Field.Types;

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key' },
  //inherits: keystone.List('Media')
});

Gallery.add({
	name: { type: String, required: true },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages }
});

Gallery.track = true;
Gallery.register();

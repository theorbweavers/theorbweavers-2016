var keystone = require('keystone');
var Types = keystone.Field.Types;


var Media = new keystone.List('Media', {
  autokey: { from: 'name', path: 'key' }
});

Media.add({
  name: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now,  },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  thumbnail: { type: Types.CloudinaryImage },
  description: { type: String }
});
Media.track = true;
Media.register();

var Image = new keystone.List('Image', {
  autokey: { from: 'name', path: 'key' },
  inherits: Media
});
Image.add({
  name: { type: String, required: true },
  image: { type: Types.CloudinaryImage },
  description: { type: String }
});
Image.register();

var Video = new keystone.List('Video', {
  autokey: { from: 'name', path: 'key' },
  inherits: Media
});
Video.add({
  name: { type: String, required: true },
  video: { type: Types.CloudinaryImage },
  description: { type: String }
});
Video.register();
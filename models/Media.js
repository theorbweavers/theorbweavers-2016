var keystone = require('keystone');
var Types = keystone.Field.Types;


var Media = new keystone.List('Media', {
  autokey: { from: 'name', path: 'key' }
});

Media.add({
  name: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  publishedDate: { type: Date, default: Date.now, dependsOn: {state: 'published'} },
  thumbnail: { type: Types.CloudinaryImage },
  description: { type: String }
});
Media.track = true;
Media.register();

exports.Media = Media;
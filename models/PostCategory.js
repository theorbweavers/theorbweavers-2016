var keystone = require('keystone');
var transform = require('model-transform');

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true,
  sortContext: 'Post:categories'
});

PostCategory.add({
	name: { type: String, required: true },
});

PostCategory.relationship({ ref: 'Post', refPath: 'categories' });

transform.toJSON(PostCategory);
PostCategory.register();

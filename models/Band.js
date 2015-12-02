var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Band = new keystone.List('Band', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Band.add({
	name: { type: String, required: true, index: true },
	website: { type: Types.Url, index: true },
	github: { type: String, size: 'small', index: true },
	twitter: { type: String, size: 'small', index: true },
});

Band.relationship({ ref: 'People', path: 'people', refPath: 'band' });

transform.toJSON(Band);
Band.defaultColumns = 'name, website, github, twitter';
Band.register();

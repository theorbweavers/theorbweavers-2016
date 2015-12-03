exports.options = {

	'name': 'The Orbweavers',
	'brand': 'The Orbweavers',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'cloudinary config': 'cloudinary://333779167276662:_8jbSi9FB3sWYrfimcl8VKh34rI@keystone-demo',
	'embedly api key': '95cc4bf6b99a4d8e80ce3f84c89adade',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '&#34;fF-ELbvoJ|P6:$&lt;;3c-Cen8OJJy[W1&amp;i@O.M)-%&lt;&gt;QTiTvC93&lt;n;R@!vD@A6N=7',
	'wysiwyg images': true,
	'wysiwyg cloudinary images': true,
	'wysiwyg additional buttons': ' emoticons media ',
	'wysiwyg additional plugins': 'autolink, contextmenu, emoticons, media, wordcount',

};

exports.locals = {
	env: process.NODE_ENV,
};

exports.nav = {
	'people': ['users', 'bands', 'people'],
	'content': ['posts', 'post-categories', 'events'],
	'media': ['galleries', 'videos', 'images', 'embeds'],
	'discography': ['releases', 'recordings'],
	'test-schemas': ['autocreates', 'field-tests'],
};

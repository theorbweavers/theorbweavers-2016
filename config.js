exports.options = {

	'name': 'The Orbweavers',
	'brand': 'The Orbweavers',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'cloudinary config': 'cloudinary://333779167276662:_8jbSi9FB3sWYrfimcl8VKh34rI@keystone-demo',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '&#34;fF-ELbvoJ|P6:$&lt;;3c-Cen8OJJy[W1&amp;i@O.M)-%&lt;&gt;QTiTvC93&lt;n;R@!vD@A6N=7',

};

exports.locals = {
	env: process.NODE_ENV,
};

exports.nav = {
	'people': ['users', 'companies', 'contacts'],
	'content': ['posts', 'post-categories', 'events', 'jobs', 'galleries'],
	'discography': ['releases', 'recordings'],
	'test-schemas': ['autocreates', 'field-tests'],
};

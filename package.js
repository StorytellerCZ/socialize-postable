/* global Package */
Package.describe({
    name: 'socialize:postable',
    summary: 'A package to create models which can be posted upon',
    version: '2.0.0',
    git: 'https://github.com/copleykj/socialize-postable.git',
});

Package.onUse(function _(api) {
    api.versionsFrom(['2.8.1', '3.0-rc.0']);

    api.use('ecmascript');

    api.use([
        'socialize:commentable@2.0.0',
    ]);

    api.mainModule('./server/server.js', 'server');
    api.mainModule('./common/common.js', 'client');
});

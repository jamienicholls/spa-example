import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';

const plugins = [];
plugins.push(Inert);

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost'
    });

    await server.register(plugins);

    // Client
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '../client/build',
                redirectToSlash: true,
                index: true,
            },
        }
    });

    // API Routes
    server.route({
        method: 'GET',
        path: '/hello-world',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/array',
        handler: (request, h) => {
            const array = ['one', 'two', 'three', 'four']
            return array;
        }
    });

    server.route({
        method: 'GET',
        path: '/object',
        handler: (request, h) => {
            const object = {
                title: 'Object One',
                description: 'BBsadhjA Afhd jf dsjfakjsf asdjafjkhasdjfhwaerj f jkd sadfjklhajkrf asdlkjfhjawklrrwjkf fdsjfasjkdfhlaskdfasdjk',
                tags: ['example', 'object', 'api']
            }
            return object;
        }
    });

    server.route({
        method: 'GET',
        path: '/object-array',
        handler: (request, h) => {
            const objectArray = [
                {
                    id: 1,
                    title: 'Object One',
                    description: 'BBsadhjA Afhd jf dsjfakjsf asdjafjkhasdjfhwaerj f jkd sadfjklhajkrf asdlkjfhjawklrrwjkf fdsjfasjkdfhlaskdfasdjk',
                    tags: ['example', 'object', 'api']
                },
                {
                    id: 2,
                    title: 'Object Two',
                    description: 'BBsadhjA Afhd jf dsjfakjsf asdjafjkhasdjfhwaerj f jkd sadfjklhajkrf asdlkjfhjawklrrwjkf fdsjfasjkdfhlaskdfasdjk',
                    tags: ['example', 'object', 'api']
                },
                {
                    id: 3,
                    title: 'Object Three',
                    description: 'BBsadhjA Afhd jf dsjfakjsf asdjafjkhasdjfhwaerj f jkd sadfjklhajkrf asdlkjfhjawklrrwjkf fdsjfasjkdfhlaskdfasdjk',
                    tags: ['example', 'object', 'api']
                },
                {
                    id: 4,
                    title: 'Object Four',
                    description: 'BBsadhjA Afhd jf dsjfakjsf asdjafjkhasdjfhwaerj f jkd sadfjklhajkrf asdlkjfhjawklrrwjkf fdsjfasjkdfhlaskdfasdjk',
                    tags: ['example', 'object', 'api']
                },
                {
                    id: 5,
                    title: 'Object Five',
                    description: 'BBsadhjA Afhd jf dsjfakjsf asdjafjkhasdjfhwaerj f jkd sadfjklhajkrf asdlkjfhjawklrrwjkf fdsjfasjkdfhlaskdfasdjk',
                    tags: ['example', 'object', 'api']
                },
                {
                    id: 6,
                    title: 'Object Six',
                    description: 'BBsadhjA Afhd jf dsjfakjsf asdjafjkhasdjfhwaerj f jkd sadfjklhajkrf asdlkjfhjawklrrwjkf fdsjfasjkdfhlaskdfasdjk',
                    tags: ['example', 'object', 'api']
                },
                {
                    id: 7,
                    title: 'Object Seven',
                    description: 'BBsadhjA Afhd jf dsjfakjsf asdjafjkhasdjfhwaerj f jkd sadfjklhajkrf asdlkjfhjawklrrwjkf fdsjfasjkdfhlaskdfasdjk',
                    tags: ['example', 'object', 'api']
                }
            ];
            return objectArray;
        }
    });


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
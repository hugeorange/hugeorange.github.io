/**
 * Tag list page generator
 */
module.exports = function (hexo) {
    hexo.extend.generator.register('about', function (locals) {
        return {
            path: 'about/',
            layout: ['about'],
            data: Object.assign({}, locals, {
                __about: true
            })
        };
    });
}
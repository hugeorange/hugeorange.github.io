/**
 * Tag list page generator
 */
module.exports = function (hexo) {
    hexo.extend.generator.register('tool', function (locals) {
        return {
            path: 'tool/',
            layout: ['tool'],
            data: Object.assign({}, locals, {
                __tool: true
            })
        };
    });
}
module.exports = {
    'devServer': {
        'open': true,
        'proxy': {
            '/api': {
                target: 'http://m.nubia.com'
            }
        }
    }
}
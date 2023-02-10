module.exports = {
    loginRequest: {
        userName: {
            type: 'string',
            required: true,
            description: '用户名',
            example: 'admin'
        },
        passWord: {
            type: 'string',
            required: true,
            description: '密码',
            example: '123456',
        }
    }
}
module.exports = {
  articleAddRequest: {
    title: {
      type: 'string',
      required: true,
      description: '文章标题',
      example: '',
    },
    content: {
      type: 'string',
      required: true,
      description: '文章内容',
      example: '',
    },
  },
  articleDeleteRequest: {
    id: {
      type: 'string',
      required: true,
      description: '文章数据id',
      example: '',
    },
  },
  articleModifyRequest: {
    id: {
      type: 'string',
      required: true,
      description: '文章数据id',
      example: '',
    },
    title: {
      type: 'string',
      required: true,
      description: '文章标题',
      example: '',
    },
    content: {
      type: 'string',
      required: true,
      description: '文章内容',
      example: '',
    },
  },
  articleQueryRequest: {
  },
};


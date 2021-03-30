const req = require('../libs/req');

module.exports = async (path, args = {}) => {
  const {
    data: {
      response: {
        header: { resultCode, resultMsg },
        body: {
          items: { item },
          numOfRows,
          pageNo,
          totalCount,
        },
      },
    },
  } = await req.get(path, { params: { ...args } });

  if (path === '/abandonmentPublic')
    return { resultCode, resultMsg, item, numOfRows, pageNo, totalCount };
  else return { resultCode, resultMsg, item };
};

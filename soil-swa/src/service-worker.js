// filepath: soil-swa/api/captureData.js
module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: { message: "Data captured successfully!" }
  };
};
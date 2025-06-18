const crypto = require("crypto");
const axios = require("axios");

const createMomoPayment = async (orderId, amount, orderInfo) => {
  const endpoint = 'https://test-payment.momo.vn/v2/gateway/api/create';
  const partnerCode = process.env.MOMO_PARTNER_CODE;
  const accessKey = process.env.MOMO_ACCESS_KEY;
  const secretKey = process.env.MOMO_SECRET_KEY;

  const requestId = `${partnerCode}-${Date.now()}`;
  const redirectUrl = process.env.MOMO_REDIRECT_URL;
  const ipnUrl = process.env.MOMO_IPN_URL;
  const extraData = '';

  const rawSignature = 
    `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}` +
    `&orderId=${orderId}&orderInfo=${orderInfo}` +
    `&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}` +
    `&requestId=${requestId}&requestType=captureWallet`;

  const signature = crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');

  const requestBody = {
    partnerCode,
    accessKey,
    requestId,
    amount: String(amount),
    orderId,
    orderInfo,
    redirectUrl,
    ipnUrl,
    extraData,
    requestType: 'captureWallet',
    signature,
    lang: 'vi',
  };

  const response = await axios.post(endpoint, requestBody);
  return response.data;
};


module.exports = createMomoPayment;

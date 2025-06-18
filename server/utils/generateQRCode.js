const QRCode = require('qrcode');

const generateQRCode = async (orderId, amount) => {
  const rawData = `ORDER_ID:${orderId}|AMOUNT:${amount}`; // Nội dung QR (tuỳ chỉnh theo yêu cầu Momo/bank)
  const qrCodeUrl = await QRCode.toDataURL(rawData);
  return { qrCodeUrl, rawData };
};

module.exports = generateQRCode;

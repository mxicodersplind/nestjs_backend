/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config({ debug: false });
var api = require('../../../node_modules/clicksend/api.js');
export async function sendSMS(message: string, to: string) {
  var smsMessage = new api.SmsMessage();

  smsMessage.from = 'Moleculus';
  smsMessage.to = to;
  smsMessage.body = message;

  const username = process.env.CLICKSEND_USERNAME;
  const password = process.env.CLICKSEND_API_KEY;
  var smsApi = new api.SMSApi(username, password);

  var smsCollection = new api.SmsMessageCollection();
  smsCollection.messages = [smsMessage];
  try {
    const reponse = await smsApi.smsSendPost(smsCollection);
    return reponse.body;
  } catch (e) {
    return e;
  }

  //   await smsApi
  //     .smsSendPost(smsCollection)
  //     .then(function (response) {
  //       console.log(response.body);
  //       x = response.body;
  //       return response.body;
  //     })
  //     .catch(function (err) {
  //       console.error(err.body);
  //       x = err.body;
  //       return err.body;
  //     });

  //   return x;
}

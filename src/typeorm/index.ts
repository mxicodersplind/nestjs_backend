/* eslint-disable prettier/prettier */
import { Coin } from './Coin';
import { moleculus_country } from './Moleculus_Country';
import { moleculus_indextoken } from './Moleculus_Indextoken';
import { molecululus_pages } from './Moleculus_Pages';
import { moleculus_settings } from './Moleculus_Settings';
import { moleculus_sip_transaction } from './Moleculus_Sip_Transcation';
import { moleculus_state } from './Moleculus_State';
import { moleculus_users } from './Moleculus_User';
import { moleculus_user_address } from './Moleculus_User_Address';
import { moleculus_user_kyc } from './Moleculus_User_Kyc';
import { moleculus_user_notification } from './Moleculus_User_Notification';
import { molecular_user_sip } from './Moleculus_User_Sip';
import { moleculus_user_wallet } from './Moleculus_User_wallet';
import { moleculus_order_history } from './Moleculus_Order_History';

const entities = [
    moleculus_users,
    Coin,
    moleculus_user_address,
    moleculus_country,
    molecular_user_sip,
    moleculus_state,
    moleculus_sip_transaction,
    moleculus_user_kyc,
    moleculus_user_notification,
    moleculus_settings,
    molecululus_pages,
    moleculus_user_wallet,
    moleculus_indextoken,
    moleculus_order_history
];

export {
    moleculus_users,
    Coin,
    moleculus_user_address,
    moleculus_country,
    moleculus_state,
    molecular_user_sip,
    moleculus_sip_transaction,
    moleculus_user_kyc,
    moleculus_settings,
    moleculus_user_notification,
    molecululus_pages,
    moleculus_user_wallet,
    moleculus_indextoken,
    moleculus_order_history
};

export default entities;

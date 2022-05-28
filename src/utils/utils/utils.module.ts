/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { moleculus_country } from '../../typeorm/Moleculus_Country';
import { moleculus_sip_transaction } from '../../typeorm/Moleculus_Sip_Transcation';
import { moleculus_state } from '../../typeorm/Moleculus_State';
import { molecular_user_sip } from '../../typeorm/Moleculus_User_Sip';
import { CountryController } from '../controllers/Country.controller';
import { StateController } from '../controllers/StateControllers';
import { CountryService } from '../services/Country.service';
import { StateService } from '../services/State.service';



@Module({
    imports: [
        TypeOrmModule.forFeature([moleculus_country, moleculus_state, molecular_user_sip, moleculus_sip_transaction]),
    ],
    controllers: [CountryController, StateController],
    providers: [{
        provide: 'COUNTRY_SERVICE',
        useClass: CountryService,
    }, {
        provide: 'STATE_SERVICE',
        useClass: StateService,
    }
    ]
})
export class UtilsModule { }

/* eslint-disable*/ /*prettier/prettier */
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

require('dotenv').config({ debug: false });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: 'Extremly*34%$gh_Secret98$%^"_Secret_k967@45./:9878',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 0.05,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
  console.log(
    `Server is running on PORT: 3000 in ${process.env.NODE_ENV} mode`,
  );
}
bootstrap();

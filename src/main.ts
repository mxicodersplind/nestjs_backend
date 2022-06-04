/* eslint-disable*/ /*prettier/prettier */
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

require('dotenv').config({ debug: false });

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  app.use(
    session({
      name: 'The_session_ID',
      secret: `${process.env.SESSION_SECRET}`,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 0.05,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(PORT);
  console.log(
    `Server is running on PORT: ${PORT} in ${process.env.NODE_ENV} mode`,
  );
}
bootstrap();

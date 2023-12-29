import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global pipes
  app.useGlobalPipes(new ValidationPipe({

    // accept only the speicified fields
    whitelist: true,

  }),)
  await app.listen(8000);
}
bootstrap();

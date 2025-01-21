import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { generateOpenApi } from '@ts-rest/open-api';
import { contract } from '@bitpanda-demo/contracts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  const document = generateOpenApi(contract, {
    info: {
      title: 'Bitpanda Demo | API',
      version: '0.0.1',
    },
  });

  SwaggerModule.setup('docs', app, document);
  const port = process.env.PORT || 8080;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();

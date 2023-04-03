import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('Your API Description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const username = 'your-username';
  const apiName = 'your-api-name';
  const apiKey = 'f4808476-41b6-4203-89cf-8483f75bdbb0';
  const url = `https://api.swaggerhub.com/apis/${username}/${apiName}`;

  const response = await axios.put(url, JSON.stringify(document), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  });

  console.log(response.status, response.statusText);

  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Swaggerfolio')
    .setDescription('Get my bio')
    .setVersion('1.0')
    // .addTag('bio')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string,
    ) => methodKey,
    ignoreGlobalPrefix: true,
    deepScanRoutes: true,
  };

  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3005);
}
bootstrap();

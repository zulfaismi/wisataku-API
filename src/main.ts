import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';

async function bootstrap() {
 const app = await NestFactory.create(AppModule, {
  snapshot: true,
});

  // Pasang global validation pipe untuk DTO
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Konfigurasi Swagger / OpenAPI
  const config = new DocumentBuilder()
    .setTitle('WisataKu API')
    .setDescription('Dokumentasi REST API untuk Layanan WisataKu')
    .setVersion('1.0')
    .addTag('destinasi')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  // Swagger UI Endpoint
  SwaggerModule.setup('api/docs', app, document);

  // Langkah 5: Simpan spesifikasi OpenAPI ke file openapi.json
  fs.writeFileSync('./openapi.json', JSON.stringify(document, null, 2));

  await app.listen(3000);
}
bootstrap();
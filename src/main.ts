import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcPMMicroserviceOptions } from './grpc-config/grpc-pm-microservice.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice(grpcPMMicroserviceOptions);
  await app.startAllMicroservices();

  await app.listen(3003);
}
bootstrap();

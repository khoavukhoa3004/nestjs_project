import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyModuleModule } from './my-module/my-module.module';
import { MyControllerController } from './my-controller/my-controller.controller';
import { MyServiceService } from './my-service/my-service.service';
import { MyResourceModule } from './my-resource/my-resource.module';

@Module({
  imports: [MyModuleModule, MyResourceModule],
  controllers: [AppController, MyControllerController],
  providers: [AppService, MyServiceService],
})
export class AppModule {}

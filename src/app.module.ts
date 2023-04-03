import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyModuleModule } from './my-module/my-module.module';
import { MyControllerController } from './my-controller/my-controller.controller';
import { MyServiceService } from './my-service/my-service.service';
import { MyResourceModule } from './my-resource/my-resource.module';
import { RunsModule } from './runs/runs.module';

@Module({
  imports: [MyModuleModule, MyResourceModule, RunsModule],
  controllers: [AppController, MyControllerController],
  providers: [AppService, MyServiceService],
})
export class AppModule {}

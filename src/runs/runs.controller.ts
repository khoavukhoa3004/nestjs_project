import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RunsService } from './runs.service';

@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Get()
  getAllRuns() {
    return this.runsService.getAllRuns();
  }

  @Get(':id')
  getRun(@Param('id') id: string) {
    return this.runsService.getRun(id);
  }

  @Post()
  createRun(
    @Body('time') time: number,
    @Body('description') description: string,
  ) {
    return this.runsService.createRun(description, time);
  }

  @Delete(':id')
  deleteRun(@Param('id') id: string) {
    return this.runsService.deleteRun(id);
  }
}

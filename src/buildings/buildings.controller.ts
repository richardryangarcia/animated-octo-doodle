import { Controller, Get, HttpCode, UseGuards, Param } from '@nestjs/common';
import { BuildingDetailsDto } from './buildings.dto';
import { BuildingsService } from './buildings.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('buildings')
@UseGuards(AuthGuard())
export class BuildingsController {
    constructor(private buildingsService: BuildingsService) {}

    @Get('/:id')
    @HttpCode(200)
    userBookings(@Param('id') buildingId ): Promise<BuildingDetailsDto> {
      return this.buildingsService.getBuildingDetails(buildingId);
    }
}

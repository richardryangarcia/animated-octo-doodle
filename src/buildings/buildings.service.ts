import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BuildingDetailsDto } from './buildings.dto';
import { BuildingsRepository } from './buildings.repository';

@Injectable()
export class BuildingsService {
    constructor(
        @InjectRepository(BuildingsRepository)
        private buildingsRepository: BuildingsRepository,
      ) {}

    async getBuildingDetails(id: number): Promise<BuildingDetailsDto> {
        const details = new BuildingDetailsDto();
        let building;
        try {
            building = await this.buildingsRepository.findOne(id, { relations: ["rooms", "buildingHours", "events"] })
        } catch (e) {
            throw new Error("No Building found with matching ID")
        }

        details.rooms = building.rooms;
        details.hours = building.hours;
        details.events = building.events;
        
        return details
    } 
}

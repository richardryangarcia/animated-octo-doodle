import { Rooms } from '../rooms/rooms.entity';
import { Events } from '../events/events.entity';
import { BuildingHours } from './buildingHours.entity';

export class BuildingDetailsDto {
    rooms: Rooms[];
    events: Events[];
    hours: BuildingHours[];
}
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Buildings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}

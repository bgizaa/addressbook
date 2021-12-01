import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
  // @PrimaryGeneratedColumn()
  // id: number;

  @PrimaryColumn()
  phoneNumber: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  emailAddress: string;
}
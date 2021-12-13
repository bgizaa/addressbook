import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryColumn()
  phoneNumber: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  emailAddress: string;
}

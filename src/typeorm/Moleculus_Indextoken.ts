/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class moleculus_indextoken {
  @PrimaryColumn({
    type: 'bigint',
  })
  token_id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  token_name: string;
  @Column({
    type: 'varchar',
    length: 255,
  })
  token_code: string;
  @Column({
    type: 'varchar',
    length: 255,
  })
  token_contract_address: string;
  @Column({
    type: 'text',
  })
  token_contract_abi: string;
  @Column({
    type: 'varchar',
    length: 255,
  })
  token_price: string;
  @Column({
    type: 'varchar',
    length: 255,
  })
  token_price_24h: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  token_marketcap: string;

  @Column({
    type: 'timestamptz',
  })
  created_datetime: Date;

  @Column({
    type: 'varchar',
    length: 255,
  })
  created_ip: string;

  @Column({
    type: 'timestamptz',
  })
  modified_datetime: Date;

  @Column({
    type: 'varchar',
    length: 255,
  })
  modified_ip: string;
}

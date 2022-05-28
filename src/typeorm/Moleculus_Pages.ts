/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn } from "typeorm";


@Entity()
export class molecululus_pages {

    @PrimaryColumn({
    })
    pagetitle_id: number;
}
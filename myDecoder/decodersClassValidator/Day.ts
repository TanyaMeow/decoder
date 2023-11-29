import {DayInterface} from "../../interface/reservationInterface";
import {IsString} from "class-validator";

export class Day implements DayInterface {
    @IsString()
    from: string;

    @IsString()
    to: string;
}
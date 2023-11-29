import {
    DayInterface,
    ScheduleInterface
} from "../../interface/reservationInterface";

export class Schedule implements ScheduleInterface {
    friday: DayInterface[];
    monday: DayInterface[];
    saturday: DayInterface[];
    sunday: DayInterface[];
    thursday: DayInterface[];
    tuesday: DayInterface[];
    wednesday: DayInterface[];
}
import fs from "node:fs";

import {
    ReservationInterface,
    ScheduleInterface,
    UserDetailsInterface
} from "../interface/reservationInterface";
import Decoder, {
    array,
    boolean,
    field,
    number,
    string,
    succeed
} from "jsonous";
import {
    isNullable,
    scheduleDecoder,
    userDetailsDecoders
} from "../myDecoder/decoderJsonous/decoders";

import {
    IsArray,
    IsBoolean,
    IsEmpty,
    IsNumber,
    IsString,
    validate
} from "class-validator";

const reservation: string = fs.readFileSync("./reservation.json", 'utf8');

class Reservation implements ReservationInterface {
    @IsString()
    address: string;

    @IsArray()
    attributes: [];

    @IsString()
    buildingCode: string;

    @IsString()
    buildingId: string;

    @IsString()
    buildingName: string;

    @IsString()
    cancelationAtTime: string;

    @IsEmpty()
    comment: null;

    @IsString()
    companyCode: string;

    @IsString()
    floorCode: string;

    @IsString()
    floorId: string;

    @IsString()
    floorName: string;

    @IsString()
    from: string;

    @IsArray()
    guests: [];

    @IsString()
    id: string;

    @IsBoolean()
    isCancelled: boolean;

    @IsBoolean()
    isCompleted: boolean;

    @IsBoolean()
    isFinished: boolean;

    @IsEmpty()
    maxBookingLength: null;


    schedule: ScheduleInterface;

    @IsString()
    station: string;

    @IsNumber()
    status: number;

    @IsString()
    title: string;

    @IsString()
    to: string;


    userDetails: UserDetailsInterface;

    @IsString()
    userId: string;

    @IsString()
    userName: string;

    @IsString()
    workplaceId: string;

    @IsString()
    workplaceName: string;

    @IsNumber()
    workplaceType: number;
}

const reservationDecoder: Decoder<ReservationInterface> = succeed(new Reservation())
    .assign("userName", field("userName", string))
    .assign("userDetails", field("userDetails", userDetailsDecoders))
    .assign("workplaceName", field("workplaceName", string))
    .assign("comment", field("comment", isNullable(succeed(null), null)))
    .assign("attributes", field("attributes", array(string)))
    .assign("from", field("from", string))
    .assign("to", field("to", string))
    .assign("cancelationAtTime", field("cancelationAtTime", string))
    .assign("schedule", field("schedule", scheduleDecoder))
    .assign("maxBookingLength", field("maxBookingLength", isNullable(succeed(null), null)))
    .assign("id", field("id", string))
    .assign("userId", field("userId", string))
    .assign("workplaceId", field("workplaceId", string))
    .assign("workplaceType", field("workplaceType", number))
    .assign("title", field("title", string))
    .assign("status", field("status", number))
    .assign("station", field("station", string))
    .assign("address", field("address", string))
    .assign("guests", field("guests", array(string)))
    .assign("floorId", field("floorId", string))
    .assign("floorName", field("floorName", string))
    .assign("floorCode", field("floorCode", string))
    .assign("buildingId", field("buildingId", string))
    .assign("buildingName", field("buildingName", string))
    .assign("buildingCode", field("buildingCode", string))
    .assign("companyCode", field("companyCode", string))
    .assign("isCompleted", field("isCompleted", boolean))
    .assign("isFinished", field("isFinished", boolean))
    .assign("isCancelled", field("isCancelled", boolean))

const reserve = reservationDecoder.decodeJson(reservation).value;
validate(reserve).then(errors => {
    if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
    } else {
        console.log('validation succeed');
    }
});
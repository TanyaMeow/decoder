import fs from "node:fs";

import {FullInfoInterface} from "../interface/fullInfoInterface";
import Decoder, {
    array,
    boolean,
    field,
    number,
    string,
    succeed
} from "jsonous";
import {isNullable} from "../myDecoder/decoderJsonous/decoders";

import {
    IsEmail,
    IsString,
    IsPhoneNumber,
    IsEmpty,
    IsNumber,
    IsBoolean,
    ArrayNotEmpty,
    validate
} from 'class-validator';

const fullInfo: string = fs.readFileSync("./full-info.json", 'utf8');

class FullInfo implements FullInfoInterface{
    @IsString()
    id: string;

    @IsString()
    shortName: string;

    @IsString()
    lastName: string;

    @IsString()
    firstName: string;

    @IsString()
    patronymic: string;

    @ArrayNotEmpty()
    permissionsIds: string[];

    @IsString()
    roleId: string;

    @IsString()
    roleName: string;

    @IsBoolean()
    copyMessagesToEmail: boolean;

    @IsBoolean()
    copyNotificationsToEmail: boolean;

    @IsString()
    companyId: string;

    @IsEmpty()
    departmentId: null;

    @IsString()
    companyName: string;

    @IsString()
    departmentName: string;

    @IsPhoneNumber()
    phone: string;

    @IsString()
    phoneCountryCode: string;

    @IsEmail()
    email: string;

    @IsEmpty()
    position: null;

    @IsBoolean()
    isAdmin: boolean;

    @IsString()
    avatar: string;

    @IsNumber()
    preferredLanguage: number;
}

const fullInfoDecoder: Decoder<FullInfoInterface> = succeed(new FullInfo())
    .assign("id", field("id", string))
    .assign("shortName", field("shortName", string))
    .assign("lastName", field("lastName", string))
    .assign("firstName", field("firstName", string))
    .assign("patronymic", field("patronymic", string))
    .assign("permissionsIds", field("permissionsIds", array(string)))
    .assign("roleId", field("roleId", string))
    .assign("roleName", field("roleName", string))
    .assign("copyMessagesToEmail", field("copyMessagesToEmail", boolean))
    .assign("copyNotificationsToEmail", field("copyNotificationsToEmail", boolean))
    .assign("companyId", field("companyId", string))
    .assign("departmentId", field("departmentId", isNullable(succeed(null), null)))
    .assign("companyName", field("companyName", string))
    .assign("departmentName", field("departmentName", string))
    .assign("phone", field("phone", string))
    .assign("phoneCountryCode", field("phoneCountryCode", string))
    .assign("email", field("email", string))
    .assign("position", field("position", isNullable(succeed(null), null)))
    .assign("isAdmin", field("isAdmin", boolean))
    .assign("avatar", field("avatar", string))
    .assign("preferredLanguage", field("preferredLanguage", number))

const info = fullInfoDecoder.decodeJson(fullInfo).value;
validate(info).then(errors => {
    if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
    } else {
        console.log('validation succeed');
    }
});
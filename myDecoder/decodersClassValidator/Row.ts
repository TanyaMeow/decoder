import {RowInterface} from "../../interface/buildingsInterface";
import {
    IsBoolean,
    IsNumber,
    IsString
} from "class-validator";

export class Row implements RowInterface {
    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    code: string;

    @IsString()
    companyId: string;

    @IsString()
    companyName: string;

    @IsString()
    contacts: string;

    @IsString()
    description: string;

    @IsString()
    id: string;

    @IsNumber()
    index: number;

    @IsBoolean()
    isFavorite: boolean;

    @IsBoolean()
    isPreferred: boolean;

    @IsNumber()
    latitude: number;

    @IsNumber()
    longitude: number;

    @IsString()
    name: string;

    @IsString()
    path: string;

    @IsString()
    station: string;

    @IsNumber()
    timeZoneShift: number;

    @IsBoolean()
    whitelistEnabled: boolean;
}
import {UserDetailsInterface} from "../../interface/reservationInterface";
import {
    IsEmpty,
    IsNumber,
    IsString
} from "class-validator";

export class UserDetails implements UserDetailsInterface {
    @IsString()
    avatar: string;

    @IsString()
    departmentName: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    phoneCountryCode: string;

    @IsEmpty()
    position: null;

    @IsNumber()
    preferredLanguage: number;
}
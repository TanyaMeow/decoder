import Decoder, {
    array,
    boolean,
    field,
    number,
    string,
    succeed
} from "jsonous";
import {
    DayInterface,
    ScheduleInterface,
    UserDetailsInterface
} from "../../interface/reservationInterface";
import {ok} from "resulty";
import {RowInterface} from "../../interface/buildingsInterface";
import {UserDetails} from "../decodersClassValidator/UserDetails";
import {Schedule} from "../decodersClassValidator/Schedule";
import {Row} from "../decodersClassValidator/Row";
import {Day} from "../decodersClassValidator/Day";

export const userDetailsDecoders: Decoder<UserDetailsInterface> = succeed(new UserDetails())
    .assign("email", field("email", string))
    .assign("phone", field("phone", string))
    .assign("phoneCountryCode", field("phoneCountryCode", string))
    .assign("position", field("position", isNullable(succeed(null), null)))
    .assign("departmentName", field("departmentName", string))
    .assign("avatar", field("avatar", string))
    .assign("preferredLanguage", field("preferredLanguage", number))

export const dayDecoders: Decoder<DayInterface[]> = array(succeed(new Day())
    .assign("from", field("from", string))
    .assign("to", field("to", string))
)

export const scheduleDecoder: Decoder<ScheduleInterface> = succeed(new Schedule())
    .assign("monday", field("monday", dayDecoders))
    .assign("tuesday", field("tuesday", dayDecoders))
    .assign("wednesday", field("wednesday", dayDecoders))
    .assign("thursday", field("thursday", dayDecoders))
    .assign("friday", field("friday", dayDecoders))
    .assign("saturday", field("saturday", dayDecoders))
    .assign("sunday", field("sunday", dayDecoders))

export function isNullable<T>(decoder: Decoder<T>, defaultValue: T | null = null) {
    return new Decoder<T | null>((value) => {
        return decoder.decodeAny(value).cata({
            Ok: (value) => ok<string, T>(value),
            Err: () => ok<string, T | null>(defaultValue),
        });
    });
}

export const rowDecoders: Decoder<RowInterface[]> = array(succeed(new Row())
    .assign("companyName", field("companyName", string))
    .assign("isPreferred", field("isPreferred", boolean))
    .assign("id", field("id", string))
    .assign("name", field("name", string))
    .assign("companyId", field("companyId", string))
    .assign("timeZoneShift", field("timeZoneShift", number))
    .assign("description", field("description", string))
    .assign("path", field("path", string))
    .assign("contacts", field("contacts", string))
    .assign("station", field("station", string))
    .assign("address", field("address", string))
    .assign("city", field("city", string))
    .assign("latitude", field("latitude", number))
    .assign("longitude", field("longitude", number))
    .assign("isFavorite", field("isFavorite", boolean))
    .assign("index", field("index", number))
    .assign("code", field("code", string))
    .assign("whitelistEnabled", field("whitelistEnabled", boolean))
)
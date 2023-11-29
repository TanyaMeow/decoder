import fs from "node:fs";

import {
    BuildingsInterface,
    RowInterface
} from "../interface/buildingsInterface";
import Decoder, {
    field,
    number,
    succeed
} from "jsonous";
import {rowDecoders} from "../myDecoder/decoderJsonous/decoders";

import {
    ArrayNotEmpty,
    IsNumber,
    validate
} from "class-validator";

const buildings: string = fs.readFileSync("./buildings.json", 'utf8');

class Buildings implements BuildingsInterface {
    @ArrayNotEmpty()
    rows: RowInterface[];

    @IsNumber()
    totalCount: number;
}

const buildingsDecoder: Decoder<BuildingsInterface> = succeed(new Buildings())
    .assign("rows", field("rows", rowDecoders))
    .assign("totalCount", field("totalCount", number))

const build = buildingsDecoder.decodeJson(buildings).value;
validate(build).then(errors => {
    if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
    } else {
        console.log('validation succeed');
    }
});
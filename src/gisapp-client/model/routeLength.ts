/**
 * GIS Calc
 * Sample GIS Calc
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class RouteLength {
    'length': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RouteLength.attributeTypeMap;
    }
}

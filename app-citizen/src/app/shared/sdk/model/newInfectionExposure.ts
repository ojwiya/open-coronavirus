/**
 * coronavirus-server
 * coronavirus-server
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (Schema options: { title: \'NewInfectionExposure\', exclude: [ \'id\' ] })
 */
export interface NewInfectionExposure { 
  [key: string]: object | any;


    patientId: string;
    rssi: number;
    timestampFrom: number;
    timestampTo: number;
    anonymizedInfectedUuid: string;
}


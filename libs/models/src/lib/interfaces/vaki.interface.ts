// CUSTOM INTERFACES
import { CountryInterface } from "./country.interface";

export interface VakiInterface {
    description: string;
    start_date: number;
    close_date: number;
    name: string;
    summary: string;
    url: string;
    photo?: string;
    video?: string;
    country: CountryInterface['isoCode'];
}
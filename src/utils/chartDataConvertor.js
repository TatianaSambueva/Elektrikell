import moment from "moment";
import { mwTokw } from "./priceFormats";

export default function chartDataConvertor(priceData) {
    return priceData.map((data) => ({
        ...data,
        price: mwTokw(data.price),
        hour: moment.unix(data.timestamp).format("HH"),
    }));
}
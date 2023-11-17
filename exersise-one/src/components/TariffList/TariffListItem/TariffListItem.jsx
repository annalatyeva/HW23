import Info from "./TariffListItemParts/Info";
import Price from "./TariffListItemParts/Price";
import Speed from "./TariffListItemParts/Speed";
import Title from "./TariffListItemParts/Title";
import {TariffListData} from "../TariffListData.js";


function TariffListItem() {
    return (
        <div>
                <Title></Title>
                <Price></Price>
                <Speed></Speed>
                <Info></Info>
        </div>
    );
}

export default TariffListItem;
function TariffListItem(props) {
    const {title, price, speed, fistBlockBackground, secondBlockBackground, selected} = props;
    return (
        <div className="TariffListItem">
            {selected 
            ? <div className={`title selected ${fistBlockBackground}`}>{title}</div>
            : <div className={`title ${fistBlockBackground}`}>{title}</div>} 
            
            <div className={`price-box ${secondBlockBackground}`}>
                <p>руб</p>
                <p className="price">{price}</p>
                <p>/мес</p>
            </div>
            <div className="speed">{speed}</div>
            <div className="info">Объем включенного трафика не ограничен</div>
        </div>
    );
}

export default TariffListItem;
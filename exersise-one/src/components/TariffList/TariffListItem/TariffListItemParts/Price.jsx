function Price(props) {
    return (
        <div>
            <p>руб</p>
            <p>{props.price}</p>
            <p>/мес</p>
        </div>
    );
}

export default Price;
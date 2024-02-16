
import { useEffect, useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from './constants';
import Badge from 'react-bootstrap/Badge';
import { getCurrentPrice } from '../services/apiService';
import { mwTokw, addTax } from '../utils/priceFormats';
import { ERROR_MESSAGE } from './constants';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePrice, setErrorMessage } from '../services/stateService';
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";


function Info() {
    const dispatch = useDispatch();

    const { values } = useContext(ElectricPriceContext);
    console.log('values.averagePrice', values.averagePrice);
    const [currentPrice, setCurrentPrice] = useState(0);
    const activePrice = useSelector((state) => state.main.activePrice);

    const averagePrice = values.averagePrice;
    const lowThreshold = averagePrice * 0.6;
    const highThreshold = averagePrice * 1.4;

    useEffect(() => {
        (async () => {
            try {
                const { data, success } = await getCurrentPrice();

                if (!success) throw new Error();

                setCurrentPrice(addTax(mwTokw(data[0].price), "ee"));
            }
            catch {
                dispatch(setErrorMessage(ERROR_MESSAGE));
            }
        })();
    }, [dispatch]);


    return (
        <>
            <Col>
                <div>The current price of electricity is</div>
                {currentPrice <= lowThreshold && <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>}
                {currentPrice > lowThreshold && currentPrice <= highThreshold && <Badge bg={BADGES[2].name}>{BADGES[2].id}</Badge>}
                {currentPrice > highThreshold && <Badge bg={BADGES[1].name}>{BADGES[1].id}</Badge>}
            </Col>

            <Col>
                <ButtonGroup>

                    {PRICE_BUTTONS.map(({ name, id }) => (
                        <Button
                            key={id}
                            active={activePrice === id}
                            onClick={() => dispatch(setActivePrice(id))}
                            variant="secondary"
                        >
                            {name}
                        </Button>
                    ))}
                </ButtonGroup>
            </Col>
            <Col className='text-end'>
                <h2>{currentPrice}</h2>
                <div>Cent / kilowatt-hour</div>
            </Col>
        </>
    );
}

export default Info;
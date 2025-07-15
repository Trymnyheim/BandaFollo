import { useContext } from 'react';
import { HolidayContext } from '../utils/HolidayContext';
import Card from 'react-bootstrap/Card'

function HolidayBanner() {

    const {
        isChristmas, isEaster, isSummer,
        setIsChristmas, setIsEaster, setIsSummer }
        = useContext(HolidayContext);

    return (
        <>
            {isChristmas &&
                <Card style={{backgroundColor: 'rgba(168, 202, 171, 1)', maxWidth: '600px', margin: '12px auto'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px'}}>
                        <img style={{ width: '100%', maxWidth: '500px'}} src='/images/decor/christmas-greeting.png' />
                    </div>
                </Card>
            }
            {isEaster && 
                <Card style={{backgroundColor: 'rgba(197, 202, 168, 1)', margin: '12px'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px'}}>
                        <img style={{ width: '100%', maxWidth: '500px'}} src='/images/decor/easter-greeting.png' />
                    </div>
                </Card>
            }
            {isSummer && 
                <Card style={{backgroundColor: 'rgba(124, 158, 111, 1)', margin: '12px auto', maxWidth: '500px'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px'}}>
                        <img style={{ width: '100%', maxWidth: '500px'}} src='/images/decor/summer-greeting.png' />
                    </div>
                </Card>
            }
        </>
    )
}

export default HolidayBanner;
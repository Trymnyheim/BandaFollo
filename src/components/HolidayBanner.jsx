import { useContext } from 'react';
import { HolidayContext } from '../utils/HolidayContext';
import Card from 'react-bootstrap/Card'

function HolidayBanner() {

    const { isChristmas, isEaster, isSummer, setIsChristmas, setIsEaster, setIsSummer }
        = useContext(HolidayContext);

    const imgContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '48px'
    }
    const cardStyle = {
        maxWidth: '600px',
        margin: '12px auto'
    }
    const imageStyle = {
        width: '100%',
        maxWidth: '500px'
    }

    return (
        <>
            {isChristmas &&
                <Card style={{...cardStyle, backgroundColor: 'rgba(168, 202, 171, 1)'}}>
                    <div style={imgContainerStyle}>
                        <img src='/images/decor/christmas-greeting.png' style={imageStyle}  />
                    </div>
                </Card>
            }
            {isEaster && 
                <Card style={{...cardStyle, backgroundColor: 'rgba(197, 202, 168, 1)'}}>
                    <div style={imgContainerStyle}>
                        <img src='/images/decor/easter-greeting.png' style={imageStyle} />
                    </div>
                </Card>
            }
            {isSummer && 
                <Card style={{...cardStyle, backgroundColor: 'rgba(124, 158, 111, 1)'}}>
                    <div style={imgContainerStyle}>
                        <img src='/images/decor/summer-greeting.png' style={imageStyle} />
                    </div>
                </Card>
            }
        </>
    )
}

export default HolidayBanner;
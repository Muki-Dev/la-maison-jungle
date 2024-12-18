import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

function CareScale({scaleValue,careType}){
    const range = [1,2,3];
    const scaleType = careType === 'light' ? (<img src={sun} alt='sun-icon' />) : (<img src={water} alt='water-icon' />)
    return(
        <div>
            {
                range.map((rangeElem) => (
                    rangeElem >= scaleValue ? <span>{scaleType}</span> : null
                ))
            }
        </div>
    )
}

export default CareScale

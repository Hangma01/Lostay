import React from 'react'

import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function HotelGrid(props) {


    return (
        <div className='hotel--grid--container'>
            <div className='HotelGrid'>

                {props.hotels.map((hotel, index) => (



                    //1029JIP key재설정: key={hotel.id} -> key={index}
                    <div className='HotelRow' key={index}>
                        <div className='HotelCol'>
                            <Link className='link_to_roomList' to={`../roomList/${hotel.hotelNo}?checkInDate=${props.check_in}&checkOutDate=${props.check_out}&peopleMax=${props.member}`} >
                                <img src={'../' + hotel.hotelThumbnail} alt='호텔이미지' className='HotelImg ms-2 me-2' />
                            </Link>

                            <div className='d-flex flex-column w-100 justify-content-between'>
                                <div className='HotelInfo'>
                                    <div className='HotelRank'>{hotel.hotelRating}</div>
                                    <Link className='link_to_roomList' to={`../roomList/${hotel.hotelNo}?checkInDate=${props.check_in}&checkOutDate=${props.check_out}&peopleMax=${props.member}`} >
                                        <span className='HotelName'>{hotel.hotelName}</span>
                                    </Link>
                                    <div className='HotelAddrAttr mb-1'>
                                        <span className='me-1'>{hotel.hotelAdress.split(" ")[0] + " " + hotel.hotelAdress.split(" ")[1]}</span>
                                        <span>&middot;</span>
                                        <span className='ms-1'>{hotel.hotelTouristAttraction.split(",")[0]}</span>
                                    </div>
                                    <div className='StarDiv'>
                                        <div className='Star justify-content-evenly'>
                                            <FaStar className='StarIcon' />
                                            <div className='StarNum me-2'>{hotel.reviewRating === null ? '0' : hotel.reviewRating.toFixed(1)}</div>
                                        </div>
                                        <span className='StarCount'>{hotel.totalReviewCount}명 평가</span>
                                    </div>
                                </div>
                                <div className='HotelPrice me-2'>
                                    {hotel.roomDiscount > 0 ? (
                                        <>
                                            <div className='RealPrice'>{hotel.roomPrice.toLocaleString()}원</div>
                                            <div className='HotelDiscount'>
                                                <div className='Discount'>{hotel.roomDiscount}%</div>
                                                <div className='DiscountPrice'>{hotel.roomDcPrice.toLocaleString()}원<span id='bak'>/1박 ~</span></div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='HotelDiscount'>
                                                <div className='Discount' style={{ visibility: 'hidden' }}>{hotel.roomDiscount}%</div>
                                                <div className='DiscountPrice'>{hotel.roomDcPrice.toLocaleString()}원<span id='bak'>/1박 ~</span></div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='RowLine'></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

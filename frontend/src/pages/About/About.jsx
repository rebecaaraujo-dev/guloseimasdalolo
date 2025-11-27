import './About.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react'

const About = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCS42YO33GiN1fAyTRkMar8q31VDG7oaEE"
    })

    const position = {
        lat:-22.944842,
        lng: -43.648431,
    }

    return (
        <div className="content">
            <div className="about">
                <h1>Sobre nós</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate at soluta animi. Minus corrupti ex magnam itaque perferendis in laborum consectetur, incidunt, cupiditate consequuntur similique? Pariatur inventore optio velit.</p>
            </div>
            <div className="contato" id='contato'>
                <h1>Contato</h1>
                <p>+55 21 </p>
                <div className='mapa'>
                    {
                        isLoaded ? (
                            <GoogleMap
                              mapContainerStyle={{width: '30%', height:'50%'}}
                              center={position}
                              zoom={15}>
                                <Marker position={position} options={{
                                    label: {
                                        text: "Guloseimas da Lolô",
                                        className:"map-marker",
                                    }
                                }}/>
                            </GoogleMap>
                        ) : <></>
                    }
                </div>

            </div>
        </div>
    )
}

export default About;
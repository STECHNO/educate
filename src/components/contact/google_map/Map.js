import React from 'react'
import GoogleMapReact from 'google-map-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Map() {
    return (
        <Container fluid>
            <Row>
                <div style={{ height: '485px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCNRUS7PxGBj5g5UuM8T6RVW0e5VPoSEUg' }}
                        defaultCenter={{ lat: 48.8738761, lng: 2.294501 }}
                        defaultZoom={11}
                    >
                    </GoogleMapReact>
                </div>
            </Row>
        </Container>
    )
}

export default Map;

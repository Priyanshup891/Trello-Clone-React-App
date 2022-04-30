import React from 'react'
import {  MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';




const position = [42.461788, 14.216090]
const ponte=[42.46689,14.22499]
function Mappa(){   
      return (
          <div id="where" className='relative'>
            <div className='relative h-[20vh] bg-zinc-800 z-50'>
                <h2 className=' text-center text-zinc-100 text-4xl font-bold py-5'>Where To Find Us</h2>
                <div className='bg-zinc-100 rounded-md shadow-xl flex flex-wrap gap-5 text-center
                justify-evenly py-5 px-5 items-center w-[70%] m-auto z-10 '>
                    <div className='text-center'> 
                        <h5 className=' text-zinc-600'>Location</h5>
                        <p className='font-semibold text-xl'>Pescara</p>
                    </div>
                    
                    <div className='text-center'>
                        <h5 className=' text-zinc-600'>TimeZone</h5>
                        <p className='font-semibold text-xl'>UTC+1</p>
                    </div>
                    
                    <div className='text-center'>
                        <h5 className=' text-zinc-600'>Latitude</h5>
                        <p className='font-semibold text-xl'>42.461788</p>
                    </div>
                    
                    <div className='text-center'>
                        <h5 className=' text-zinc-600'>Longitude</h5>
                        <p className='font-semibold text-xl'>14.216090</p>
                    </div>

                </div>
            </div>
            <MapContainer className='z-0 relative' center={position} zoom={13} scrollWheelZoom={false} style={{ height: "80vh"}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                    className="Marker-cluster-large "
                    position={ponte} 
                    icon={L.divIcon({
                        className: "mymarker",
                        html: "<div style='font-size:3em;'>&#127924;</div>",
                    })
                }>
                <Popup>
                        Ponte del Mare.
                </Popup>
                </Marker>
            </MapContainer>
      </div>
      )
    
}
export default Mappa;


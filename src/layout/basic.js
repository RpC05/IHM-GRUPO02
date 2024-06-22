import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header />
                <div className="container-fluid">
                    <div className="row py-5">
 
                            <svg version="1" xmlns="http://www.w3.org/2000/svg" width="356.25" height="356.25" viewBox="-10 0 376.25 356.25">
                                <defs>
                                    <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" class="stop-0" />
                                        <stop offset="100%" class="stop-100" />
                                    </linearGradient>
                                </defs>
                                <g transform="translate(178.1250,178.1250)">
                                    <g>
                                        <circle cx="0" cy="0" r="137.01923076923077" class="RadarChart__scale"></circle>
                                        <circle cx="0" cy="0" r="114.18269230769232" class="RadarChart__scale"></circle>
                                        <circle cx="0" cy="0" r="91.34615384615384" class="RadarChart__scale"></circle>
                                        <circle cx="0" cy="0" r="68.50961538461539" class="RadarChart__scale"></circle>
                                        <circle cx="0" cy="0" r="45.67307692307692" class="RadarChart__scale"></circle>
                                        <circle cx="0" cy="0" r="22.83653846153846" class="RadarChart__scale"></circle>
                                    </g>
                                    <g>
                                        <polyline points="0.0000,0.0000 0.0000,-137.0192" class="RadarChart__axis"></polyline>
                                        <polyline points="0.0000,0.0000 96.8872,-96.8872" class="RadarChart__axis"></polyline>
                                        <polyline points="0.0000,0.0000 137.0192,0.0000" class="RadarChart__axis"></polyline>
                                        <polyline points="0.0000,0.0000 96.8872,96.8872" class="RadarChart__axis"></polyline>
                                        <polyline points="0.0000,0.0000 0.0000,137.0192" class="RadarChart__axis"></polyline>
                                        <polyline points="0.0000,0.0000 -96.8872,96.8872" class="RadarChart__axis"></polyline>
                                        <polyline points="0.0000,0.0000 -137.0192,0.0000" class="RadarChart__axis"></polyline>
                                        <polyline points="0.0000,0.0000 -96.8872,-96.8872" class="RadarChart__axis"></polyline>
                                    </g>
                                    <g>
                                        <path d="M0.0000,-112.9355L73.3842,-73.3842L130.5039,0.0000L94.3461,94.3461L0.0000,137.0192L-74.8192,74.8192L-73.2197,0.0000L-90.7562,-90.7562z"
                                            class="RadarChart__shape"></path>
                                    </g>
                                    <g>
                                        <text x="0.0000" y="-169.2188" dy="6" text-anchor="middle" class="RadarChart__captions">Diseño</text>
                                        <text x="119.6557" y="-119.6557" dy="6" text-anchor="middle" class="RadarChart__captions">Pantalla</text>
                                        <text x="169.2188" y="0.0000" dy="6" text-anchor="middle" class="RadarChart__captions">Rendimiento</text>
                                        <text x="119.6557" y="119.6557" dy="6" text-anchor="middle" class="RadarChart__captions">Cámaras</text>
                                        <text x="0.0000" y="169.2188" dy="6" text-anchor="middle" class="RadarChart__captions">Sistema operativo</text>
                                        <text x="-119.6557" y="119.6557" dy="6" text-anchor="middle" class="RadarChart__captions">Batería</text>
                                        <text x="-169.2188" y="0.0000" dy="6" text-anchor="middle" class="RadarChart__captions">Audio</text>
                                        <text x="-119.6557" y="-119.6557" dy="6" text-anchor="middle" class="RadarChart__captions">Otros</text>
                                    </g>
                                    <g>
                                        <circle cx="6.915305407567002e-15" cy="-112.93550781142297" class="RadarChart__dot"></circle>
                                        <circle cx="73.38418786887542" cy="-73.3841878688754" class="RadarChart__dot"></circle>
                                        <circle cx="130.50394546493843" cy="0" class="RadarChart__dot"></circle>
                                        <circle cx="94.34614789946859" cy="94.34614789946858" class="RadarChart__dot"></circle>
                                        <circle cx="8.39000811915855e-15" cy="137.01923076923077" class="RadarChart__dot"></circle>
                                        <circle cx="-74.81921550839533" cy="74.81921550839535" class="RadarChart__dot"></circle>
                                        <circle cx="-73.21965144230771" cy="8.966821177350702e-15" class="RadarChart__dot"></circle>
                                        <circle cx="-90.75619356043451" cy="-90.75619356043448" class="RadarChart__dot"></circle>
                                    </g>
                                </g>
                            </svg> 

                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer />
            </StrictMode>
        </>
    );
}

export default Basic;
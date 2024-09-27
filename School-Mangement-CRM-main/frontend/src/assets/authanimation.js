import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const AuthAnimation = () => {
    return (
        <div style={{ width: '500px', height: '500px' }}>
            <Player
                autoplay
                loop
                src="https://lottie.host/7d8c8e32-59fe-4fb8-afcb-7e47a6bc2c80/Vnsv5JCqU4.json"
                style={{ height: '100%', width: '100%' }}
            >
            </Player>
        </div>
    );
};


export default AuthAnimation;
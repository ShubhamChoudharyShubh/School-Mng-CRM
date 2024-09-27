import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieAnimation = () => {
    return (
        <div style={{ width: '500px', height: '500px' }}>
            <Player
                autoplay
                loop
                src="https://lottie.host/147d4403-4f14-4a9f-969c-1d7c54ebfcb2/SSXpQrM0QK.json"
                style={{ height: '100%', width: '100%' }}
                rel="preload"
            >
            </Player>
        </div>
    );
};


export default LottieAnimation;
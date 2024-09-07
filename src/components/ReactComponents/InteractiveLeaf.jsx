import React, { useState, useEffect } from 'react';

const InteractiveLeaf = ({imgUrl, pattern, height, width}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMauseMove = (e) => {
            switch (pattern) {
                case 'default':
                    setPosition({
                        x: -e.clientX * 0.02,
                        y: -e.clientY * 0.02
                    });
                break;
                case 'circular':
                    const centerX = window.innerWidth / 2;
                    const centerY = window.innerHeight / 2;
                    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
                    const radius = 30; // Ajusta el radio para un movimiento más suave
                    const smoothness = 0.01;
                    setPosition((prevPosition) => ({
                        x: prevPosition.x + (radius * Math.cos(angle) - prevPosition.x) * smoothness,
                        y: prevPosition.y + (radius * Math.sin(angle) - prevPosition.y) * smoothness
                    }));
                break;
                case 'default2':
                    setPosition({
                        x: e.clientX * 0.02,
                        y: e.clientY * 0.02
                    });
                break;
            }
        };

        window.addEventListener('mousemove', handleMauseMove);

        return () => {
            window.removeEventListener('mousemove', handleMauseMove);
        };
    }, []);

    return (
        <div className={`absolute animate-zoomIn ${height} ${width}`} style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: 'transform 0.3s ease-out',
            left: '50%',
            top: '50%',
        }}>
            <img src={imgUrl} alt="Leaf" className='w-full h-full object-contain'/>
        </div>
    );
};

export default InteractiveLeaf;

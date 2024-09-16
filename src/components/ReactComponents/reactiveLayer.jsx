const ReactiveLayer = ({ bgImage, bottleImage }) => {
    return (
        <div className="relative w-80 h-80 overflow-visible hover:scale-105 transition-all duration-300">
            <img 
                src={bgImage} 
                alt="bg" 
                className="absolute bottom-[-15px] left-8"
                style={{
                    width: '70%',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain'
                }}
            />
            <img 
                src={bottleImage} 
                alt="bottle" 
                className="absolute bottom-0 right-0 hover:-translate-y-2 transition-all duration-300"
                style={{ 
                    width: 'auto', 
                    height: 'auto', 
                    maxWidth: '100%',
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease-in-out'
                }} 
            />
        </div>
        
    );
};

const ReactiveText = ({ text, text_2 }) => {
    return (
        <div 
            className="flex items-center justify-center rounded-full mt-5 lg:ml-32 md:ml-16"
            style={{
                backgroundColor: 'rgb(254, 254, 222)',
                width: '150px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
                position: 'relative',
                zIndex: 1,
                paddingLeft: '90px',
                paddingRight: '90px',
                paddingTop: '8px',
                paddingBottom: '8px'
            }}  
        >
            <p className="text-center">
                <span 
                    style={{ 
                        fontSize: '1.5rem',
                        fontWeight: 'bold', 
                        marginRight: '7px'
                    }}
                >
                    {text}
                </span> 
                <span 
                    style={{ 
                        fontFamily: 'Satisfy, cursive', 
                        fontWeight: 'bold', 
                        fontSize: '1.5rem'
                    }}
                >
                    {text_2}
                </span>
            </p>
        </div>
    );
};


export { ReactiveLayer, ReactiveText };

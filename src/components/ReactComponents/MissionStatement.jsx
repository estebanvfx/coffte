import React, { useEffect } from 'react';
import { Coffee, Leaf, Users, Star, Heart } from 'lucide-react';

const MissionStatement = () => {

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className="bg-gradient-to-b from-yellow-100 to-green-100 p-8 shadow-lg font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
                
                <p className="text-lg text-gray-900 mb-6">
                    En Refrescos Naturales COFFTE, inspiramos un estilo de vida saludable y sostenible, 
                    ofreciendo bebidas refrescantes y deliciosas, elaboradas con ingredientes naturales 
                    de alta calidad, que promueven el bienestar y la felicidad de nuestros consumidores.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nos comprometemos a:</h3>
                
                <ul className="space-y-4">
                    {[
                    { icon: <Coffee className="text-brown-500" />, text: "Ofrecer productos innovadores y auténticos, libres de aditivos artificiales." },
                    { icon: <Leaf className="text-green-500" />, text: "Fomentar prácticas sostenibles en nuestra cadena de suministro y operaciones." },
                    { icon: <Users className="text-blue-500" />, text: "Apoyar a comunidades locales y agricultores sostenibles." },
                    { icon: <Star className="text-yellow-500" />, text: "Brindar excelencia en servicio y calidad, superando las expectativas de nuestros clientes." },
                    { icon: <Heart className="text-red-500" />, text: "Promover una cultura de inclusión, diversidad y respeto en nuestro equipo." },
                    ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        {item.icon}
                        <span className="text-gray-900">{item.text}</span>
                    </li>
                    ))}
                </ul>
                
                <p className="mt-6 text-lg font-semibold text-gray-900">
                    Nuestro objetivo es ser líderes en el mercado de refrescos naturales, siendo referentes 
                    en sostenibilidad y bienestar, y hacer la diferencia en la vida de las personas.
                </p>
            </div>
        </div>
    );
};

export default MissionStatement;

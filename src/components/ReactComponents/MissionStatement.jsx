import React, { useEffect } from 'react';
import { Coffee, Leaf, Users, Star, Heart } from 'lucide-react';
import '@fontsource/poppins/700.css';
import { FaLeaf } from "react-icons/fa";


const MissionStatement = () => {

    return (
        <section className="font-[Poppins] bg-gradient-to-b from-[#fefede] to-green-100">
            <span className='px-44 flex items-center justify-center gap-3'><hr className='w-[50%] border-green-900' /> <FaLeaf className='text-green-950 text-5xl' />  <hr className='w-[50%] border-green-900' /></span>
            <div className="px-80 py-20">
                <h2 className="text-5xl font-bold text-[#1e1e20] mb-6 uppercase">Nuestra Misión</h2>
                
                <p className="text-lg text-[#1e1e20] mb-6">
                    En Refrescos Naturales Coffté, inspiramos un estilo de vida saludable y sostenible, 
                    ofreciendo bebidas refrescantes y deliciosas, elaboradas con ingredientes naturales 
                    de alta calidad, que promueven el bienestar y la felicidad de nuestros consumidores.
                </p>
                
                <h3 className="text-2xl font-semibold text-[#1e1e20] mb-4">Nos comprometemos a:</h3>
                
                <ul className="space-y-4 pl-10">
                    {[
                    { icon: <Coffee className="text-brown-500" />, text: "Ofrecer productos innovadores y auténticos, libres de aditivos artificiales." },
                    { icon: <Leaf className="text-green-500" />, text: "Fomentar prácticas sostenibles en nuestra cadena de suministro y operaciones." },
                    { icon: <Users className="text-blue-500" />, text: "Apoyar a comunidades locales y agricultores sostenibles." },
                    { icon: <Star className="text-yellow-500" />, text: "Brindar excelencia en servicio y calidad, superando las expectativas de nuestros clientes." },
                    { icon: <Heart className="text-red-500" />, text: "Promover una cultura de inclusión, diversidad y respeto en nuestro equipo." },
                    ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        {item.icon}
                        <span className="text-[#1e1e20]">{item.text}</span>
                    </li>
                    ))}
                </ul>
                
                <p className="mt-6 text-lg font-semibold text-[#1e1e20]">
                    Nuestro objetivo es ser líderes en el mercado de refrescos naturales, siendo referentes 
                    en sostenibilidad y bienestar, y hacer la diferencia en la vida de las personas.
                </p>
            </div>
        </section>
    );
};

export default MissionStatement;

import React, { useEffect } from 'react';
import { Coffee, Leaf, Users, Star, Heart } from 'lucide-react';

const MissionStatement = () => {
    return (
        <section className="font-[Poppins] bg-gradient-to-b from-[#fefede] to-yellow-100">
            <span className='px-4 md:px-20 lg:px-44 flex items-center justify-center gap-3'>
                <hr className='w-[50%] border-green-900' />  
                <hr className='w-[50%] border-green-900' />
            </span>
            
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 py-8 md:py-12 lg:py-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1e20] mb-4 lg:mb-6 uppercase">
                    Nuestra Misión
                </h2>
                
                <p className="text-base md:text-lg text-[#1e1e20] mb-4 lg:mb-6">
                Ser líderes en la industria de refrescos naturales, ofreciendo productos innovadores, 
                saludables y sostenibles que deleiten a nuestros consumidores y contribuyan al bienestar del planeta.
                </p>
                
                <h3 className="text-xl md:text-2xl font-semibold text-[#1e1e20] mb-3 lg:mb-4">
                    Nos comprometemos a:
                </h3>
                
                <ul className="space-y-3 md:space-y-4 pl-4 md:pl-10">
                    {[
                        { icon: <Coffee className="text-brown-500 text-3xl sm:text-4xl md:text-2xl" />, text: "Ofrecer productos de alta calidad, elaborados con ingredientes naturales y orgánicos." },
                        { icon: <Leaf className="text-green-500 text-3xl sm:text-4xl md:text-2xl" />, text: "Fomentar una cultura de sostenibilidad, reduciendo nuestro impacto ambiental y promoviendo prácticas responsables." },
                        { icon: <Users className="text-blue-500 text-3xl sm:text-4xl md:text-2xl" />, text: "Innovar constantemente, desarrollando nuevos productos y sabores que satisfagan las necesidades y preferencias de nuestros consumidores." },
                        { icon: <Star className="text-yellow-500 text-3xl sm:text-4xl md:text-2xl" />, text: "Establecer relaciones sólidas con nuestros proveedores, clientes y comunidades, basadas en la confianza, el respeto y la colaboración." },
                        { icon: <Heart className="text-red-500 text-3xl sm:text-4xl md:text-2xl" />, text: "Contribuir al bienestar y la salud de nuestras comunidades, a través de programas de responsabilidad social y educación nutricional." },
                    ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-3 text-sm md:text-base">
                            {item.icon}
                            <span className="text-[#1e1e20]">{item.text}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-6 text-lg font-semibold text-[#1e1e20]">
                En COFFTE, nos comprometemos a ser una empresa responsable, innovadora y comprometida con el medio ambiente y la sociedad.
                </p>
            </div>
        </section>
    );
};

export default MissionStatement;

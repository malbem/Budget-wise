import React, { useEffect, useState } from 'react';


const Team: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<{ name: string; image: string, link: string }[]>([]);
 
    useEffect(() => {
        const members = [
            { name: 'Isaac Huston', image: './images/Foto.png', link: 'https://github.com/malbem' },
            { name: 'Victor Nascimento', image: './images/Foto.png', link: 'https://github.com/victornascimentodiniz' },
            { name: 'Gabriel Rodrigues', image: './images/Foto.png', link: 'https://github.com/Gabrew' },
            { name: 'Lucas Vinicius', image: './images/Foto.png', link: 'https://github.com/LUC4SLIM4' },
            { name: 'Victor Augusto', image: './images/Foto.png', link: 'https://github.com/victormatosx' }
        ];
 
        // Embaralhar a ordem dos membros
        const shuffledMembers = shuffleArray(members);

        setTeamMembers(shuffledMembers);
    }, []);

    // Função de embaralhamento de array
    const shuffleArray = (array: any[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    return (
        <section className='pb-14'  id='Team'>
            <div className="flex flex-col items-center py-[100px]">
                <h2 className="text-center mb-4 text-6xl font-bold pb-10">Nossa Equipe</h2>
                <p className=' px-10 pb-10 text-xl max-w-[1000px] opacity-70 ' >Na Budget Wise, nossa equipe também compartilha a paixão pela tecnologia e está empenhada em oferecer o melhor atendimento ao cliente. Com anos de experiência em fornecer soluções orçamentárias eficientes, estamos constantemente buscando maneiras de aprimorar nossos serviços e garantir a satisfação de nossos clientes. Venha nos conhecer e descubra como podemos ajudá-lo a encontrar o melhor orçamento para o seu projeto. Estamos ansiosos para ajudá-lo!</p>

                <div className="flex justify-center flex-wrap gap-4">
                    {teamMembers.map((member, index) => (
                        <a href={member.link}>
                            <div className=" hover:cursor-pointer hover:scale-110 p-5 flex flex-col items-center animate animate-fadeIn" key={index}>
                            {/* Inverter:  dark:brightness-100 dark:invert-[100] */}
                            <img className="rounded-lg max-w-[150px] h-auto dark:filter" src={member.image} alt={`Imagem ${index + 1}`} />
                                <p className="text-center text-xs mt-2">{member.name}</p>

                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

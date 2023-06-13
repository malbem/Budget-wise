import React, { useEffect, useState } from 'react';

const Team: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<{ name: string; image: string }[]>([]);

    useEffect(() => {
        const members = [
            { name: 'Isaac Huston', image: './images/Foto.png' },
            { name: 'Victor Nascimento', image: './images/Foto.png' },
            { name: 'Gabriel Rodrigues', image: './images/Foto.png' },
            { name: 'Lucas Vinicius', image: './images/Foto.png' },
            { name: 'Victor Augusto', image: './images/Foto.png' }
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
        <section>
            <div className="flex flex-col items-center">
                <h2 className="text-center mb-4 text-6xl font-bold pb-10">Nossa Equipe</h2>
                <div className="flex justify-center flex-wrap gap-4">
                    {teamMembers.map((member, index) => (
                        <div className="p-5 flex flex-col items-center animate animate-fadeIn" key={index}>
                            <img className="border rounded-full max-w-[150px] h-auto" src={member.image} alt={`Imagem ${index + 1}`} />
                            <p className="text-center text-xs mt-2">{member.name}</p>
                            <p className="text-center text-xxs">Subtítulo fictício</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

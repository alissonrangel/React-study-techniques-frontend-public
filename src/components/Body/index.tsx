/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Technique, TechniqueInstance } from '../../models/Technique';
import Api from '../../services/api';
import AddTechnique from '../AddTechnique';
import TechniqueItem from '../TechniqueItem';
import * as C from './styles';

function Body() {
  const [list, setList] = useState<TechniqueInstance[]>([]);

  const getListTechniques = async () => {
    let auxList: TechniqueInstance[] = [];
    auxList = await Api.getTechniques();
    setList(auxList);
  };

  useEffect(() => {
    getListTechniques();
  }, []);

  const handleAddClick = async (title: string, body: string, link: string, reference: string, file: File | null) => {
    const tech: Technique = {
      title,
      body,
      link,
      reference,
      name_image: 'default.png',
      url_image: 'https://firebasestorage.googleapis.com/v0/b/arreactgallery.appspot.com/o/poetry_images%2Fe4825c98-aacd-43d7-8493-9d3a86ded9d9?alt=media&token=3d11a295-f54d-4ea5-ad18-6d43c4912a77',
    };
    const result = await Api.addTechnique(tech, file);

    if (result.error === '') {
      getListTechniques();
    }
    return result;
  };

  return (
    <C.Container>
      <C.Introduction>
        <h2>Introdução às técnicas de estudos</h2>
        <p>
          Este é um artigo que descreve uma série de técnicas de estudos para auxiliar os estudantes. O uso de bons métodos de estudos fará o aproveitamento satisfatório. O estudioso Renato Alves afirma, em seu livro (Não pergunte se ele estudou), que muitos alunos que dizem não gostar de estudar é porque na verdade eles não sabem como estudar. Diante disso descrevemos algumas técnicas elaboradas por alguns estudiosos.
        </p>
        <p>
          ALVES, Renato. Não pergunte se ele estudou : Como despertar nos filhos o interesse e a motivação nos estudos. São Paulo : Humano Editora, 2012.
        </p>
      </C.Introduction>
      { list.length > 0
        && list.map((item) => (
          <TechniqueItem
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            image={`${process.env.REACT_APP_BASE_URL}/files/${item.name_image}`}
            reference={item.reference}
            link={item.link}
          />
        ))}
      <AddTechnique onAdd={handleAddClick} />

    </C.Container>
  );
}

export default Body;

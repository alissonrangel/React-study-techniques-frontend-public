/* eslint-disable no-unused-vars */
import { useState } from 'react';
import * as C from './styles';

interface Props {
  onAdd: (title: string,
    body: string,
    link: string,
    reference: string,
    file: any) => Promise<any>;
}

function AddTechnique({ onAdd }: Props) {
  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');
  const [addLinkText, setAddLinkText] = useState('');
  const [addReferenceText, setAddReferenceText] = useState('');
  const [addPassword, setAddPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [addFileField, setAddFileField] = useState<File | null>(null);
  const [error, setError] = useState('');

  const clearData = () => {
    setAddTitleText('');
    setAddBodyText('');
    setAddLinkText('');
    setAddReferenceText('');
    setAddFileField(null);
    setAddPassword('');
  };

  const handleAddClick = async (e: any) => {
    setLoading(true);
    if (!addBodyText || !addTitleText) {
      // eslint-disable-next-line no-alert
      alert('Digite os dados!');
    } else if (addPassword === process.env.REACT_APP_PASSWORD as String) {
      const result = await onAdd(
        addTitleText,
        addBodyText,
        addLinkText,
        addReferenceText,
        addFileField,
      );

      if (result.error !== '') {
        setError('Doenst create the technique');
        setTimeout(() => {
          setError('');
        }, 4000);
      } else {
        setError('Technique created successfully');
        setTimeout(() => {
          setError('');
        }, 4000);
        clearData();
      }
    } else {
      setError('Wrong password');
      setTimeout(() => {
        setError('');
      }, 4000);
    }
    setLoading(false);
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%',
    }}
    >
      { error !== ''
        && (
        <C.Error>
          <h3>{error}</h3>
        </C.Error>
        )}
      <C.Fieldset>
        <legend>Adicionar Nova Técnica</legend>
        <form onSubmit={handleAddClick} style={{ display: 'flex', flexDirection: 'column' }}>
          <C.Input
            value={addTitleText}
            onChange={(e) => setAddTitleText(e.target.value)}
            type="text"
            placeholder="Digite um título"
            disabled={loading}
          />
          <C.TextArea
            value={addBodyText}
            onChange={(e) => setAddBodyText(e.target.value)}
            className=""
            placeholder="Digite a técnica de estudo"
            disabled={loading}
          />
          <C.Input
            value={addLinkText}
            onChange={(e) => setAddLinkText(e.target.value)}
            type="text"
            placeholder="Digite um link"
            disabled={loading}
          />
          <C.Input
            value={addReferenceText}
            onChange={(e) => setAddReferenceText(e.target.value)}
            type="text"
            placeholder="Digite a referência do texto"
            disabled={loading}
          />
          <C.InputFile
            type="file"
            name="image"
            onChange={(e) => setAddFileField(e.target.files ? e.target.files[0] : null)}
            disabled={loading}
          />
          <C.Input
            value={addPassword}
            onChange={(e) => setAddPassword(e.target.value)}
            type="password"
            placeholder="Digite a senha para adicionar a técnica"
            disabled={loading}
          />
          <C.Button type="submit" disabled={loading}>Adicionar Technique</C.Button>
        </form>
      </C.Fieldset>
    </div>
  );
}

export default AddTechnique;

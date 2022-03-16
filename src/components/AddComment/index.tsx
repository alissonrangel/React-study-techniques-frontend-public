/* eslint-disable no-unused-vars */
import { useState } from 'react';
import * as C from './styles';

type Props = {
  onAdd: (
    body: string
  ) => Promise<any>
}

function AddComment({ onAdd }: Props) {
  const [addBodyText, setAddBodyText] = useState('');
  const [addPassword, setAddPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const clearData = () => {
    setAddBodyText('');
    setAddPassword('');
  };

  const handleAddClick = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    if (!addBodyText) {
      // eslint-disable-next-line no-alert
      alert('Digite os dados!');
    } else if (addPassword === process.env.REACT_APP_PASSWORD as String) {
      const result = await onAdd(
        addBodyText,
      );

      if (result.error !== '') {
        setError('Doenst create the comment');
        setTimeout(() => {
          setError('');
        }, 4000);
      } else {
        setError('Comment created successfully');
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
      <C.Container>
        <h4>Adicionar Novo Comentário</h4>
        <form onSubmit={handleAddClick} style={{ display: 'flex', flexDirection: 'column' }}>
          <C.TextArea
            value={addBodyText}
            onChange={(e) => setAddBodyText(e.target.value)}
            placeholder="Digite um comentário"
            disabled={loading}
            maxLength={250}
          />
          <C.Input
            value={addPassword}
            onChange={(e) => setAddPassword(e.target.value)}
            type="password"
            placeholder="Digite a senha para adicionar a técnica"
            disabled={loading}
          />
          <C.Button type="submit" disabled={loading}>Adicionar Comentário</C.Button>
        </form>
      </C.Container>
    </div>
  );
}

export default AddComment;

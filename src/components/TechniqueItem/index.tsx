/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import AddComment from '../AddComment';
import * as C from './styles';
import { Comment, CommentInstance } from '../../models/Comment';
import Api from '../../services/api';

type Props = {
  id: number,
  title: string,
  body: string,
  reference: string,
  image: string,
  link: string
}

function TechniqueItem({
  id, title, body, reference, image, link,
}: Props) {
  const [commentList, setCommentList] = useState<CommentInstance[]>([]);

  const getCommentList = async () => {
    let list: CommentInstance[] = commentList;
    list = await Api.getCommentsByTechnique(id);
    setCommentList(list);
  };

  useEffect(() => {
    getCommentList();
  }, []);

  const handleAddClick = async (body2: string) => {
    const comment: Comment = {
      body: body2,
      TechniqueId: id,
    };
    const result = await Api.addComment(comment);

    if (result.error === '') {
      getCommentList();
    }
    return result;
  };

  return (
    <C.Item>
      <fieldset>
        <img src={image} alt={title} />
        <legend>{title}</legend>
        <pre>{body}</pre>
        <p>
          Referência:
          {' '}
          {reference}
        </p>
        <a href={link} target="_blank" rel="noreferrer">{link}</a>
        <hr />
        <fieldset>
          <legend>Comentários</legend>
          { commentList.length === 0
          && <p>No Comments</p>}
          { commentList.length > 0
          && commentList.map((item) => (
            <>
              <hr />
              <p className="comment" key={item.id}>{item.body}</p>
            </>
          ))}
          <AddComment onAdd={handleAddClick} />
        </fieldset>
      </fieldset>
    </C.Item>
  );
}

export default TechniqueItem;

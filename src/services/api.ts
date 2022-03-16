/* eslint-disable no-restricted-syntax */
import { Technique, TechniqueInstance } from '../models/Technique';
import { Comment, CommentInstance } from '../models/Comment';

const baseUrl = process.env.REACT_APP_BASE_URL;

type Headers = {
  'Content-Type': string,
  Authorization?: string
}

const Api = {
  getTechniques: async () => {
    const list: TechniqueInstance[] = [];
    const json = await fetch(`${baseUrl}/list`).then((res) => res.json());

    for (const tech of json.list) {
      list.push(
        {
          id: tech.id,
          title: tech.title,
          body: tech.body,
          link: tech.link,
          url_image: tech.url_image,
          name_image: tech.name_image,
          reference: tech.reference,
        },
      );
    }

    return list;
  },
  addTechnique: async (body: Technique, file: File | null, token?: string) => {
    const headers: Headers = { 'Content-Type': 'multipart/form-data' };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const formData = new FormData();

    formData.append('title', body.title);
    formData.append('body', body.body);
    formData.append('link', body.link);
    formData.append('reference', body.reference);
    if (body.name_image) {
      formData.append('name_image', body.name_image);
    }
    if (body.url_image) {
      formData.append('url_image', body.url_image);
    }

    if (file) {
      formData.append('file', file);
    }

    const json = await fetch(`${baseUrl}/techniques`, {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    if (json.error === '') {
      return json;
    }
    return json;
  },
  addComment: async (body: Comment, token?: string) => {
    const headers: Headers = { 'Content-Type': 'application/json' };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const comment = {
      body: body.body,
      TechniqueId: body.TechniqueId,
    };

    const json = await fetch(`${baseUrl}/comments`, {
      method: 'POST',
      headers,
      body: JSON.stringify(comment),
    }).then((res) => res.json());

    if (json.error === '') {
      return json;
    }
    return json;
  },
  getCommentsByTechnique: async (id: number) => {
    const list: CommentInstance[] = [];
    const json = await fetch(`${baseUrl}/listCommnetsByTechnique/${id}`).then((res) => res.json());

    for (const comment of json.list) {
      list.push(
        {
          id: comment.id,
          body: comment.body,
          TechniqueId: comment.TechniqueId,
        },
      );
    }

    return list;
  },
};

export default Api;

import React, { useEffect, useState } from 'react';
import axiosApi from '../axiosApi.ts';
import {useNavigate} from 'react-router-dom';

const AdminPanel: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchPageContent = async () => {
      if (selectedPage) {
        try {
          const response = await axiosApi.get(`/pages/${selectedPage}.json`);
          console.log(response.data);
          setContent(response.data?.content || '');

        } catch (error) {
          console.error('Ошибка: ', error);
        }
      }
    };

    fetchPageContent();
  }, [selectedPage]);

  const navigate = useNavigate();
  const handleSave = async () => {
    try {
      await axiosApi.patch(`/pages/${selectedPage}.json`, { content });
      navigate(`/pages/${selectedPage}`);
    } catch (error) {
      console.error('Ошибка: ', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(e.target.value);
  };

  return (
    <div className='d-flex flex-column align-items-start gap-2'>
      <select value={selectedPage} onChange={handleChange} className='btn btn-primary'>
        <option value="">Выберите категорию</option>
        <option value="home">Home</option>
        <option value="about">About</option>
        <option value="contacts">Contacts</option>
        <option value="price">Price</option>
      </select>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={handleSave} className='btn btn-success'>Сохранить</button>
    </div>
  );
}

export default AdminPanel;

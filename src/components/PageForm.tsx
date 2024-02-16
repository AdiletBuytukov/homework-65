import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axiosApi from '../axiosApi.ts';

interface PageFormData {
  title: string;
  content: string;
}

const PageForm: React.FC = () => {
  const { pageName } = useParams<{ pageName: string }>();
  const [pageData, setPageData] = useState<PageFormData | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axiosApi.get(`/pages/${pageName}.json`);
        setPageData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPageData();
  }, [pageName]);

  return (
    <div>
      {pageData && (
        <>
          <h2>{pageData.title}</h2>
          <p>{pageData.content}</p>
        </>
      )}
    </div>
  );
}

export default PageForm;
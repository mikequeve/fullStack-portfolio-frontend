import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const projectsUrl =
  'https://fullstack-portfolio-backend-production.up.railway.app/projects';
const certificatesUrl =
  'http://fullstack-portfolio-backend-production.up.railway.app/certificates';

const GlobalContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [projectsResp, certificatesResp] = await axios.all([
          axios.get(projectsUrl),
          axios.get(certificatesUrl),
        ]);
        setLoading(false);
        setProjects(projectsResp.data);
        console.log(projectsResp.data);
        setCertificates(certificatesResp.data);
        console.log(certificatesResp.data);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const getProjectById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${projectsUrl}/${id}`);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log('Error fetching project data: ', error);
      setLoading(false);
      return null;
    }
  };

  const openModal = (img) => {
    setIsModalOpen(true);
    setSelectedImg(img);
  };

  return (
    <GlobalContext.Provider
      value={{
        projects,
        getProjectById,
        certificates,
        loading,
        isModalOpen,
        setIsModalOpen,
        openModal,
        selectedImg,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

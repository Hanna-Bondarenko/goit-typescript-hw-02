import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages, Image } from "./services/imageApi";
import { Toaster } from "react-hot-toast";
import { getSeason } from "./utils/getSeason";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    const defaultQuery = getSeason(); // Визначаємо тему для поточної пори року
    setQuery(defaultQuery); // Встановлюємо як початковий пошуковий запит
  }, []); // Виконується лише один раз при завантаженні сторінки

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage((prevPage) => prevPage + 1);

  const openModal = (image: Image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setShowModal(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster position="top-center" reverseOrder={false} />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {showModal && (
        <ImageModal
          images={images} // Передаємо весь масив зображень
          currentImage={modalImage!} // Поточне зображення
          onClose={closeModal} // Закриття модального вікна
          onNext={() => {
            const currentIndex = images.findIndex(
              (img) => img.id === modalImage?.id
            );
            if (currentIndex < images.length - 1) {
              setModalImage(images[currentIndex + 1]);
            }
          }}
          onPrev={() => {
            const currentIndex = images.findIndex(
              (img) => img.id === modalImage?.id
            );
            if (currentIndex > 0) {
              setModalImage(images[currentIndex - 1]);
            }
          }}
        />
      )}
    </div>
  );
};

export default App;

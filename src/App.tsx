import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./services/imageApi"; // API запит
import { Toaster } from "react-hot-toast"; // Додаємо для відображення повідомлень

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1); // Підтримка сторінок для пагінації
  const [query, setQuery] = useState(""); // Запит для пошуку
  const [totalPages, setTotalPages] = useState(0); // Загальна кількість сторінок
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchImages(query, page); // API запит
        setImages((prevImages) => [...prevImages, ...data.results]); // Зберігаємо отримані зображення
        setTotalPages(data.total_pages); // Зберігаємо загальну кількість сторінок
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]); // Очищаємо масив зображень при новому запиті
    setPage(1); // Скидаємо сторінку до першої
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Завантажуємо наступну сторінку
  };

  const openModal = (image) => {
    setModalImage(image); // Передаємо зображення в модальне вікно
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {/* Виведення повідомлень */}
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} /> // Кнопка для завантаження наступної сторінки
      )}
      {showModal && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;

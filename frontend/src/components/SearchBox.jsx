import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
const SearchBox = () => {
  const navigate = useNavigate();
  const { keyWord: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');
  const {
    data: searchResults,
    error,
    isLoading,
  } = useGetProductsQuery({
    keyword,
    pageNumber: 1, // You may adjust the page number as needed
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword('');
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-light" className="p-2 mx-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
import React, { useState, FormEvent, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import categories from '../utils/navigate';
import cardapio from '../mocks/cardapio';
import { TextField } from '@mui/material';
import inputTheme from '../themes/input';
import MenuInterface from '../interface/menu';
import ProductPopup from '../components/Pop-up';
import '../App.css';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [userSearch, setUserSearch] = useState<string>('');
  const [filteredCardapio, setFilteredCardapio] = useState<MenuInterface[]>([]);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [notFoundMessage, setNotFoundMessage] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuInterface | null>(null);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
  }, [showPopUp]);

  const handleClose = () => {
    setShowPopUp(false);
    document.body.style.overflow = 'auto';
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleProductClick = (product: MenuInterface) => {
    setSelectedProduct(product);
    setShowPopUp(true);
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userSearch.length < 3) {
      setNotFoundMessage(false);
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    const search = userSearch.toLowerCase();
    const filteredItems = cardapio.filter((item) => {
      const title = item.titulo.toLowerCase();
      const category = item.categoria.toLowerCase();
      return title.includes(search) || category.includes(search);
    });
    if(filteredItems.length === 0) {
      setNotFoundMessage(true);
      return;
    }
    setErrorMessage(false);
    setNotFoundMessage(false);
    setFilteredCardapio(filteredItems);
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <form className="flex justify-center m-3 mb-14" onSubmit={handleSearch}>
        <TextField
          type="text"
          placeholder="Produto ou Categoria"
          value={userSearch}
          name="name"
          id="outlined-basic"
          label="Digite o nome do produto"
          variant="outlined"
          onChange={({ target }) => setUserSearch(target.value)}
          className="w-full sm:w-64 lg:w-80 xl:w-1/4 sm:mr-0"
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: inputTheme.palette.text.secondary,
              },
              '&.MuiInputLabel-required': {
                color: inputTheme.palette.primary.light,
              },
            },
          }}
          InputProps={{
            sx: {
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: inputTheme.palette.primary.main,
              },
            },
          }}
        />
        <button
          type="submit"
          className="w-24 py-4 px-4 text-white bg-primary hover:bg-secondary hover:bg-corBotaoHover focus:outline-none rounded-l-none rounded-r-xl"
          style={{ marginLeft: '-1px'}}
        >
          Buscar
        </button>
      </form>

      { errorMessage && (
        <div className='flex justify-center mb-10 px-2 text-center text-sm md:text-md lg:text-lg text-red-500'>
          <p>Insira pelo menos 3 caracteres para realizar a busca.</p>
        </div>
      )}

      { notFoundMessage && (
        <div className='px-4 flex justify-center mb-10 text-sm md:text-md lg:text-lg text-red-500'>
          <p>Nenhum produto encontrado.</p>
        </div>
      )}

      { showPopUp && selectedProduct && (
        <section className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-0"
            onClick={handleBackdropClick}
          >
          </div>
          <div className="flex items-center justify-center message-box z-10">
            <ProductPopup product={selectedProduct} onClose={handleClose} />
          </div>
        </section>
      )}

      <div className="flex flex-col w-full">
        {filteredCardapio.length === 0 ? (
          categories.map(({ categoria }, index) => (
          <section
            key={index}
            id={categoria}
            className="flex flex-col pt-3 pb-0 px-1 rounded-lg mb-4 w-full sm:w-3/4 sm:mx-auto shadow-sm bg-white"
          >
            <h2
              className="text-md font-bold mb-4 flex items-center cursor-pointer relative"
              onClick={() => handleCategoryClick(categoria)}
            >
              {categoria}
              <span className="absolute  right-0 top-1/2 transform-translate-y-1/2">
                {selectedCategory === categoria ? (
                  <IoIosArrowUp className="text-primary" />
                ) : (
                  <IoIosArrowDown className="text-secondary" />
                )}
              </span>
            </h2>
            {selectedCategory === categoria &&
              cardapio
                .filter((item) => item.categoria === categoria)
                .map((item, itemIndex) => (
                  <div key={itemIndex} className="flex align-center justify-between bg-gray-50 mb-8 cursor-pointer hover:bg-gray-100 rounded-xl text-justify px-2 shadow-md" onClick={() => handleProductClick(item)}>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-md font-bold mb-2" id={item.titulo}>{item.titulo}</h3>
                      <div className="description-container my-2 mr-2">
                        <p className="text-gray-600 text-sm description">
                          {item.descricao.length > 60
                            ? `${item.descricao.substring(0, 80)}...`
                            : item.descricao
                          }
                        </p>
                      </div>
                      <p className="font-barlow py-5">
                        {item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                      </p>
                    </div>
                    <div className="image-container">
                      <img
                        src={item.imagem}
                        alt={item.titulo}
                        className="rounded-full object-contain custom-round card-image"
                      />
                    </div>
                  </div>
                ))}
            </section>
        ))):(
          filteredCardapio
            .map((item, itemIndex) => (
              <div key={itemIndex} className="flex align-center justify-between sm:w-3/4 sm:mx-auto bg-gray-50 mb-8 cursor-pointer hover:bg-gray-100 rounded-xl text-justify px-2 shadow-md" onClick={() => handleProductClick(item)}>
                <div className="flex flex-col justify-center">
                  <h3 className="text-md font-bold mb-2" id={item.titulo}>{item.titulo}</h3>
                  <div className="description-container my-2 mr-2">
                    <p className="text-gray-600 text-sm description">
                      {item.descricao.length > 60
                        ? `${item.descricao.substring(0, 80)}...`
                        : item.descricao
                      }
                    </p>
                  </div>
                  <p className="font-barlow py-5">
                    {item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
                <div className="image-container">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="rounded-full object-contain custom-round card-image"
                  />
                </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { FiMenu, FiArrowLeft, FiSearch, FiX } from 'react-icons/fi';
import { Container, SearchContainer, Icon } from './styles';

interface Props {
  title: string;
  hasMenu?: boolean;
  hasSearch?: boolean;
  searchCallback?: any;
  closeCallback?: any;
}

const Header: React.FC<Props> = ({ title, hasMenu, hasSearch, searchCallback, closeCallback }) => {
  const history = useHistory();
  const [isSearching, setIsSearching] = useState(false);

  const debounceSubmitSearch = AwesomeDebouncePromise(
    searchCallback,
    500
  );  

  const onChangeSearch = (value: string) => {
    debounceSubmitSearch(value)
  };

  const navContent = (
    <Container>
      <div>
        <Icon>
          {hasMenu ?
            <FiMenu size={22} /> :
            <FiArrowLeft
              size={22}
              onClick={history.goBack}
            />
          }        
        </Icon>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {hasSearch && <Icon>
          <FiSearch
            size={22}
            onClick={() => setIsSearching(!isSearching)}
          />      
        </Icon>}
      </div>
    </Container>
  );

  const searchContent = (
    <SearchContainer>
      <input
        type="text"
        onChange={(event) => onChangeSearch(event.target.value)}
        placeholder="Type to search..."
      />
      <button onClick={
        () => {
          setIsSearching(!isSearching);
          closeCallback();
        }
      }>
        <FiX size={20} />
      </button>
    </SearchContainer>
  );

  return isSearching ? searchContent : navContent;
};

export default Header;

import React, {useState}  from "react";
import styled from "@emotion/styled";


export const HomeHeader = () => {
  const [search, setFilter] = useState('')
  const searchText = (event) => {
    setFilter(event.target.value);
  }
  
  return (
    <HeaderContainer>
      <Logo>Shoppy</Logo>
      <div>
        <SearchInput 
        value={search}
        onChange={searchText}
        type="text" />
        <SearchButton>Search</SearchButton>
      </div>
      <br />
      <p>you search for: {search}</p>
      <div />
    </HeaderContainer>
  );
};

export default HomeHeader;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  padding: 10px 6px;
`;

const Logo = styled.h2`
  color: #850045;
  padding: 4px;
  margin: 0px;
  font-size: 20px;
`;

const SearchInput = styled.input`
  background: #bdbdbd;
  border: none;
  padding: 8px;
  outline: none;
  color: #214823;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  margin: 0px;
  height: 100%;
  font-size: 14px;
  min-width: 300px;
`;

const SearchButton = styled.button`
  background-color: #00641e;
  color: #fff;
  padding: 8px;
  border: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin: 0px;
  font-size: 14px;
  height: 100%;
`;

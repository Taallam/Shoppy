import styled from '@emotion/styled'

export const HomeHeader = () => {
  return (
    <HeaderContainer>
      <Logo>Shoppy</Logo>
      <div>
        <SearchInput type="text" />
        <SearchButton>Search</SearchButton>
      </div>
      <div>Life is good</div>
      <div/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EEEEEE;
  padding: 10px 6px;
`

const Logo = styled.h2`
  color: #6B0B3D;
  padding: 4px;
  margin: 0px;
  font-size: 20px;
`

const SearchInput = styled.input`
  background: #BDBDBD;
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
`

const SearchButton = styled.button`
  background-color: #6B0B3D;
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
`
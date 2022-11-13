import React from 'react'
import styled from '@emotion/styled'

function AdvancedFilters({ visible, setAdvancedFiltersVisibility }) {

  if (!visible) return <div />

  return (
    <Wrapper>
      <div>
        <h3>Advanced filters</h3>
        <InputsWrapper>
          <PriceTitle>
            Price
          </PriceTitle>
          <label>
            from
            <input type="number" />
          </label>
          <label>
            to
            <input type="number" />
          </label>
          <label>
            <input type="checkbox" />
            Use from
          </label>
          <label>
            <input type="checkbox" />
            Use to
          </label>
        </InputsWrapper>
      </div>
      <ButtonsContainer>
        <button onClick={() => setAdvancedFiltersVisibility(false)}>Use filters</button>
        <button onClick={() => setAdvancedFiltersVisibility(false)}>Reset</button>
      </ButtonsContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #eff5f5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PriceTitle = styled.h4`
  grid-column: 1 / 3;
  margin: none;
  border-bottom-color: #D6E4E5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-gap: 5px;
  max-height: 140px;
`

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`

export default AdvancedFilters

import React, {Dispatch, SetStateAction} from 'react'
import styled from '@emotion/styled'

type AdvancedFiltersProps = {
  visible: boolean,
  priceFrom: String,
  priceTo: String,
  setAdvancedFiltersVisibility: Dispatch<SetStateAction<boolean>>,
  setPriceFrom: Dispatch<SetStateAction<string>>,
  setPriceTo: Dispatch<SetStateAction<string>>,
}

function AdvancedFilters({
  visible,
  setAdvancedFiltersVisibility,
  priceFrom,
  priceTo,
  setPriceFrom,
  setPriceTo,
} : AdvancedFiltersProps) {

  if (!visible) return <div />

  const resetFilters = () => {
    setPriceFrom("")
    setPriceTo("")
    setAdvancedFiltersVisibility(false)
  }

  return (
    <Wrapper>
      <div>
        <h3>Advanced filters</h3>
        <InputsWrapper>
          <PriceTitle>Price</PriceTitle>
          <label>
            from
            <input
              type="number"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
          </label>
          <label>
            to
            <input
              type="number"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </label>
          <button onClick={() => setPriceFrom("") }>Clear filter</button>
          <button onClick={() => setPriceTo("")}>Clear filter</button>
        </InputsWrapper>
      </div>
      <ButtonsContainer>
        <button onClick={() => setAdvancedFiltersVisibility(false)}>
          Use filters
        </button>
        <button onClick={resetFilters}>
          Reset
        </button>
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
  border-bottom-color: #d6e4e5;
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

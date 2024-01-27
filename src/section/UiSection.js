import styled from "styled-components";
import Modal from "../component/Modal";
import {useUiState} from "../context/UiReducer";

const UiSectionStyle = styled.section`
  width: 100%;
  height: calc(var(--vh) * 100);
  
  pointer-events: none;
  
  position: fixed;
  top: 0;
  left: 0;
`

const UiSection = () => {
  const uiState = useUiState()

  return (
    <UiSectionStyle>
      <Modal isShow={uiState.isModalShow}/>
    </UiSectionStyle>
  )
}

export default UiSection
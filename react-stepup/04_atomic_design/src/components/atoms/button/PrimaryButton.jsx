import styled from "styled-components";
import {BaseButton} from "./BaseButton";

export const PrimaryButton = (props) => {
  //<PrimaryButton>childrenで受け取る部分</PrimaryButton>
  const {children} = props;

  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
    background-color: #40514e;
`
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {SecondaryButton} from "../atoms/button/SecondaryButton";
import {UserContext} from "../../providers/UserProvider";
import {useContext} from "react";


export const Top = () => {
  const history = useHistory();
  const {setUserInfo} = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true});
    history.push("/users");
  }
  const onClickGeneral = () => {
    setUserInfo({isAdmin: false});
    history.push("/users");
  }
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br/><br/>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align:center;
`

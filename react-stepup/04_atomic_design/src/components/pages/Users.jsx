import styled from "styled-components";
import {SearchInput} from "../molecules/SearchInput";
import {UserCard} from "../organisms/user/UserCard";
import { useLocation} from "react-router-dom";

const users = [...Array(10).keys()].map( (val) => {
  return {
    id: val,
    name: "たろう" + val,
    image: "https://picsum.photos/id/237/160/160",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com"

  }
});


export const Users = () => {
  const {state} = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput/>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`




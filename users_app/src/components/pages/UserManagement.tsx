import {memo, useCallback, useEffect, VFC} from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";

import {UserCard} from "../organisms/user/UserCard";
import {useAllUsers} from "../../hooks/useAllUsers";
import {UserDetailModal} from "../organisms/user/UserDetailModal";
import {useSelectUser} from "../../hooks/useSelectUser";
import {useLoginUser} from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const {getUsers, users, loading} = useAllUsers();

  const {onSelectUser, selectedUser, setSelectedUser} = useSelectUser();

  const {loginUser} = useLoginUser()

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({id, users, onOpen})
    }
  , [users])

  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ?
        (
          <Center h="100vh">
            <Spinner/>
          </Center>
        ) : (
        <Wrap p={{base: 4, md: 10}}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://picsum.photos/800"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} setUser={setSelectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin}/>
    </>
  );
});





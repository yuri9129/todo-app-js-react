import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  memo,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
  VFC
} from "react";
import {
  Box,
  FormControl, FormLabel, Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import {User} from "../../../types/api/user";
import {PrimaryButton} from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  setUser:  Dispatch<SetStateAction<User | null>>;
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const {user, setUser, isOpen, onClose, isAdmin = false} = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user])

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangeName = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onChangePhone = (e:ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }

  const onClickUpdateButton = () => {
    onClose();
  };

  return(
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset={"slideInBottom"}>
      <ModalOverlay/>
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton/>
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={username} isReadOnly={!isAdmin} onChange={(e) => {console.log(e)}}/>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName}/>
              <FormLabel>メール</FormLabel>
              <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail}/>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone}/>
            </FormControl>
            <Box textAlign={"right"} display={isAdmin ? "" : "none"}>
              <PrimaryButton
                onClick={onClickUpdateButton}
              >更新</PrimaryButton>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
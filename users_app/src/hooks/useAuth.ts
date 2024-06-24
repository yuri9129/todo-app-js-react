import {useCallback, useState} from "react";
import axios from "axios";
import {User} from "../types/api/user";
import {useHistory} from "react-router-dom";
import {useMessage} from "./useMessage";
import {useLoginUser} from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const {showMessage} = useMessage();
  const {setLoginUser} = useLoginUser();

  const [loading, setLoading] = useState(false);



  const login = useCallback((id: string) => {
    setLoading(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
         if (res.data){
           const isAdmin = res.data.id === 10;
           setLoginUser({...res.data, isAdmin});
           showMessage({"title": "ログインしました", status:"success"})
           history.push("/home");
         }else{
           showMessage({"title": "ログインに失敗しました", status:"error"})
           setLoading(false);
         }
      })
      .catch(() => {
        showMessage({"title": "エラーが発生しました", status:"error"})
        setLoading(false)
      })

  }, [])
  return {login, loading}
}
import {useLocation, useParams} from "react-router-dom"

export const UrlParameter = () => {
  const { id } = useParams();
  const {search} = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは {id} です</p>
      <p>クエリパラメーターは {query.get('name')} です</p>
    </div>
  )
}
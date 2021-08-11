import { useDispatch, useSelector } from 'react-redux';
import { hideInfo } from './actions';

export const Profile = () => {
    const { id, name, email } = useSelector((state) => state.user);
    const  infoVisible = useSelector((state) => state.infoVisible);
   const dispatch = useDispatch();
    return (      
       <div>
        <h2>ID пользователя: </h2>{infoVisible && <p>{ id }</p>}
        <h3>Фамилия Имя Отчество: </h3> {infoVisible && <p>{ name }</p>}
        <h3>Электронная почта: </h3>{infoVisible && <p>{ email }</p>}
        <button onClick={() => dispatch(hideInfo())}>{(infoVisible) ? 'Скрыть информацию о пользователе' : 'Показать информацию о пользователе' }</button>

       </div>
   
      
    )
}
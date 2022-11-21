import axios from 'axios';
import { BASE_URL } from '../../../utils/request';
import icon from '../../img/notification-icon.svg'
import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(saleId: number) {
    // axios é uma biblioteca de requisição
    axios(`${BASE_URL}/sales/${saleId}/notification`).then(response => {
        console.log("Sucesso!");
    })
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function MenuItem({ item, index }) {
  return (
    <div className="menuItem" data-index={index}>
      <div className="menuItemContent">
        <h4>{item.nom}</h4>
        <p>{item.description}</p>
      </div>
      <span className="price">{item.prix}</span>
      <div className="checkIcon">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
    </div>
  );
} 
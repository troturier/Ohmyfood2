import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faList, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function Steps() {
  const steps = [
    {
      number: 1,
      icon: faMobileScreen,
      text: 'Choisissez un restaurant'
    },
    {
      number: 2,
      icon: faList,
      text: 'Composez votre menu'
    },
    {
      number: 3,
      icon: faUtensils,
      text: 'Dégustez au restaurant'
    }
  ];

  return (
    <section className="steps">
      <h2>Fonctionnement</h2>
      <div className="stepsContainer">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <span className="number">{step.number}</span>
            <span className="icon">
              <FontAwesomeIcon icon={step.icon} />
            </span>
            <p className="text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
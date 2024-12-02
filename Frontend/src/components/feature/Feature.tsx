import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

import './Feature.css';


interface FeatureProps {
    image: string;
    title: string;
    description: string;
}

interface FeaturesProps {
    features: FeatureProps[];
}


const Features: React.FC<FeaturesProps> = ({ features }) => {
    return (
        <div className="features">
            {features.map((feature, index) => (
                <div className="feature">
                <img src={feature.image} />
                <Accordion key={index}>
                    <AccordionSummary
                    aria-controls="panel1a-content">
                        <h2>{feature.title}</h2>
                    </AccordionSummary>
                    <p className='text-container'>{feature.description}</p>
                </Accordion>
                </div>
            ))}
        </div>
    );
}

export default Features;
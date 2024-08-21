import InstrumentCard from './InstrumentCard';
import instrumentsData from '../data/instruments.json';

const InstrumentList = () => {
  return (
    <div className="instrument-list">
      {instrumentsData.map(instrument => (
        <InstrumentCard key={instrument.id} instrument={instrument} />
      ))}
    </div>
  );
};

export default InstrumentList;


import { useRouter } from 'next/router';
import instrumentsData from '../data/instruments.json';
import ReactPlayer from 'react-player';

const InstrumentDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const instrument = instrumentsData.find(i => i.id === parseInt(id, 10));

  if (!instrument) {
    return <div>Instrument not found</div>;
  }

  return (
    <div className="instrument-detail">
      <h1>{instrument.name}</h1>
      <img src={instrument.image} alt={instrument.name} />
      <p><strong>History:</strong> {instrument.history}</p>
      <p><strong>Inventor:</strong> {instrument.inventor}</p>
      <p><strong>Year:</strong> {instrument.year}</p>
      <ReactPlayer url={instrument.sound} playing controls />
    </div>
  );
};

export default InstrumentDetail;

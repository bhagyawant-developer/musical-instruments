import Link from 'next/link';

const InstrumentCard = ({ instrument }) => {
  return (
    <div className="instrument-card">
      <Link href={`/instruments/${instrument.id}`}>
        {instrument.name}
      </Link>
    </div>
  );
};

export default InstrumentCard;

import { useState } from 'react';

type itemProps = {
  item: {
    id: number;
    rating: number;
    text: string;
  };
};

export default function FeedbackItem({ item }: itemProps) {
  const { rating, text } = item;
  const [ratingDisplay, setRatingDisplay] = useState(rating);
  const [textDisplay, setTextDisplay] = useState(text);

  return (
    <>
      <div className="card">
        <div className="num-display">{ratingDisplay}</div>
        <div className="text-display">{textDisplay}</div>
      </div>
    </>
  );
}

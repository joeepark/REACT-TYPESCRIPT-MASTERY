import FeedbackItem from './FeedbackItem';

type feedbackProps = {
  feedback: {
    id: number;
    rating: number;
    text: string;
  }[];
};

export default function FeedbackList({ feedback }: feedbackProps) {
  return (
    <>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </>
  );
}

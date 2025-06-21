export default function ReviewList({ reviews }) {
  if (!reviews.length) return <p>No reviews yet.</p>;
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{review.reviewer_name}</span>
            <span className="text-xs text-gray-500">{new Date(review.review_date).toLocaleDateString()}</span>
            <span className="ml-2 text-yellow-500">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </span>
          </div>
          <div className="font-medium">{review.title}</div>
          <div className="text-sm text-gray-700">{review.review_desc}</div>
        </div>
      ))}
    </div>
  );
}
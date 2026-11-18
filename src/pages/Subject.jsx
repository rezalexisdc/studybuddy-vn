import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GRADES, subjectBySlug } from "../data/subjects.js";
import NotFound from "./NotFound.jsx";

export default function Subject() {
  const { slug } = useParams();
  const subject = subjectBySlug(slug);
  const [grade, setGrade] = useState(10);

  if (!subject) return <NotFound />;

  return (
    <section className="subject" style={{ "--cover": subject.cover }}>
      <Link to="/" className="back">
        Tất cả các môn
      </Link>
      <h1>{subject.vi}</h1>
      <p className="tile-en">{subject.en}</p>

      <div className="grades" role="tablist" aria-label="Chọn lớp">
        {GRADES.map((g) => (
          <button
            key={g}
            type="button"
            role="tab"
            aria-selected={grade === g}
            className="grade"
            onClick={() => setGrade(g)}
          >
            Lớp {g}
          </button>
        ))}
      </div>

      <div className="empty paper" role="tabpanel">
        <p>
          Bài học {subject.vi} lớp {grade} đang được soạn.
        </p>
        <p className="muted">Trong lúc chờ, bạn có thể xem các môn khác.</p>
        <Link to="/" className="btn btn-ink">
          Xem các môn khác
        </Link>
      </div>
    </section>
  );
}

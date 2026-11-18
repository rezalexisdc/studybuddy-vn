import { Link } from "react-router-dom";
import { SUBJECTS } from "../data/subjects.js";

function SubjectTile({ s }) {
  return (
    <li>
      <Link to={`/mon/${s.slug}`} className="tile" style={{ "--cover": s.cover }}>
        <span className="tile-vi">{s.vi}</span>
        <span className="tile-en">{s.en}</span>
      </Link>
    </li>
  );
}

export default function Home() {
  const core = SUBJECTS.filter((s) => s.group === "core");
  const electives = SUBJECTS.filter((s) => s.group === "elective");

  return (
    <>
      <section className="hero paper">
        <div className="hero-text">
          <h1>Học cùng bạn, mỗi ngày một chút.</h1>
          <p className="lede">
            Bài học, bài tập và đề ôn thi cho tất cả các môn lớp 10, 11 và 12. Chọn môn bạn muốn học hôm nay.
          </p>
          <a href="#mon-hoc" className="btn btn-ink">
            Chọn môn học
          </a>
        </div>
        <aside className="hero-note" aria-label="Cấu trúc kỳ thi tốt nghiệp THPT">
          <p className="note-title">Thi tốt nghiệp THPT</p>
          <p>
            <strong>2 môn bắt buộc:</strong> Toán và Ngữ văn.
          </p>
          <p>
            <strong>2 môn tự chọn</strong> trong các môn còn lại.
          </p>
        </aside>
      </section>

      <section id="mon-hoc" className="subjects">
        <div className="group">
          <h2>Môn bắt buộc</h2>
          <ul className="tiles tiles-core">
            {core.map((s) => (
              <SubjectTile key={s.slug} s={s} />
            ))}
          </ul>
        </div>
        <div className="group">
          <h2>Môn tự chọn</h2>
          <ul className="tiles">
            {electives.map((s) => (
              <SubjectTile key={s.slug} s={s} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

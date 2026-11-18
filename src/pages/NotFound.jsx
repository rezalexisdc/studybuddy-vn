import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="empty paper">
      <h1>Không tìm thấy trang này</h1>
      <p className="muted">Đường link có thể đã sai hoặc trang đã được chuyển.</p>
      <Link to="/" className="btn btn-ink">
        Về trang chủ
      </Link>
    </section>
  );
}

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function AppHeader() {
  const { user, ready, signIn, logOut, enabled } = useAuth();

  return (
    <header className="top">
      <Link to="/" className="brand" aria-label="StudyBuddy.vn, trang chủ">
        <img src="/icon.svg" alt="" width="30" height="30" />
        <span>
          StudyBuddy<span className="brand-tld">.vn</span>
        </span>
      </Link>
      {enabled && ready && (
        user ? (
          <button type="button" className="btn btn-quiet" onClick={logOut}>
            Đăng xuất
          </button>
        ) : (
          <button type="button" className="btn btn-quiet" onClick={signIn}>
            Đăng nhập bằng Google
          </button>
        )
      )}
    </header>
  );
}

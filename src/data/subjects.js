// The high-school (THPT) subjects, grouped the way the graduation exam groups
// them under the 2018 curriculum (from 2025): Toán and Ngữ văn are compulsory,
// and each student picks 2 more from the elective list.
// `cover` is the notebook-cover colour used for the subject's tab.

export const GRADES = [10, 11, 12];

export const SUBJECTS = [
  { slug: "toan", vi: "Toán", en: "Math", group: "core", cover: "#4b2fa8" },
  { slug: "ngu-van", vi: "Ngữ văn", en: "Literature", group: "core", cover: "#e0484b" },
  { slug: "tieng-anh", vi: "Tiếng Anh", en: "English", group: "elective", cover: "#2f6fd6" },
  { slug: "vat-li", vi: "Vật lí", en: "Physics", group: "elective", cover: "#1f7a8c" },
  { slug: "hoa-hoc", vi: "Hóa học", en: "Chemistry", group: "elective", cover: "#2e8b57" },
  { slug: "sinh-hoc", vi: "Sinh học", en: "Biology", group: "elective", cover: "#5a8f29" },
  { slug: "lich-su", vi: "Lịch sử", en: "History", group: "elective", cover: "#9a5b2e" },
  { slug: "dia-li", vi: "Địa lí", en: "Geography", group: "elective", cover: "#b07a12" },
  { slug: "gdktpl", vi: "Giáo dục kinh tế và pháp luật", en: "Economics & Law", group: "elective", cover: "#7d3c98" },
  { slug: "tin-hoc", vi: "Tin học", en: "Computer Science", group: "elective", cover: "#34495e" },
  { slug: "cong-nghe", vi: "Công nghệ", en: "Technology", group: "elective", cover: "#6b6f2a" },
];

export const subjectBySlug = (slug) => SUBJECTS.find((s) => s.slug === slug);

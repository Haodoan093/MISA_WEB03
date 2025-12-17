(function () {
  "use strict";

  /**
   * Utils dùng chung toàn app.
   * Export qua window.Common để các file khác dùng được (không bundler).
   * Created By DCHAO - 16/12/2025
   */
  const Common = {
    safeText(v) {
      const s = (v ?? "").toString().trim();
      return s.length ? s : "—";
    },
  /**
   * Chuẩn hoá text để so sánh/tìm kiếm (trim + lowercase).
   * @param {any} s - Giá trị đầu vào.
   * @returns {string} - Chuỗi đã chuẩn hoá.
   * Created By DCHAO - 16/12/2025
   */
    normalizeText(s) {
      return (s ?? "").toString().trim().toLowerCase();
    },

  /**
   * Chuẩn hoá số điện thoại (chỉ giữ chữ số).
   * @param {any} phone - Số điện thoại đầu vào.
   * @returns {string} - Chuỗi chỉ gồm digits.
   * Created By DCHAO - 16/12/2025
   */
    normalizePhone(phone) {
      return (phone ?? "").toString().replace(/\D+/g, "");
    },
  /**
   * Giới hạn một số trong khoảng [min, max].
   * @param {number} n - Giá trị.
   * @param {number} min - Cận dưới.
   * @param {number} max - Cận trên.
   * @returns {number} - Giá trị sau clamp.
   * Created By DCHAO - 16/12/2025
   */
    clamp(n, min, max) {
      return Math.max(min, Math.min(max, n));
    },

  /**
   * Lấy chữ viết tắt từ họ tên (VD: "Nguyễn Văn A" -> "NA") để hiển thị avatar.
   * @param {string} fullName - Họ tên ứng viên.
   * @returns {string} - Initials (2 ký tự) hoặc "--" nếu thiếu dữ liệu.
   * Created By DCHAO - 16/12/2025
   */
    initials(fullName) {
      const parts = (fullName ?? "").trim().split(/\s+/).filter(Boolean);
      if (!parts.length) return "--";
      const a = parts[0][0] ?? "";
      const b = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
      return (a + b).toUpperCase();
    },
  /**
   * Hash string đơn giản để map màu ổn định theo ứng viên (id/fullName).
   * @param {string} str - Chuỗi key.
   * @returns {number} - Số hash không âm.
   * Created By DCHAO - 16/12/2025
   */
    hashString(str) {
      const s = (str ?? "").toString();
      let h = 0;
      for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
      return Math.abs(h);
    },

  /**
   * Lấy màu nền avatar theo candidate (ổn định theo id/fullName).
   * @param {object} candidate - Ứng viên.
   * @returns {string} - Mã màu HEX.
   * Created By DCHAO - 16/12/2025
   */
    avatarBg(candidate) {
      const palette = [
        "#22C55E",
        "#14B8A6",
        "#06B6D4",
        "#A3E635",
        "#F59E0B",
        "#F97316",
        "#3B82F6",
        "#6366F1",
        "#A855F7",
        "#EC4899",
        "#EF4444",
        "#10B981",
      ];
      const key = (candidate?.id ?? candidate?.fullName ?? "").toString();
      const idx = Common.hashString(key) % palette.length;
      return palette[idx];
    },
  /**
   * Parse đánh giá về số sao 0..5 (accept number hoặc text: "tốt", "khá"...).
   * @param {any} rate - Đánh giá.
   * @returns {number} - Số sao (0..5).
   * Created By DCHAO - 16/12/2025
   */
    rateToNumber(rate) {
      if (rate == null) return 0;

      const asNumber = Number(rate);
      if (Number.isFinite(asNumber)) return Common.clamp(Math.round(asNumber), 0, 5);

      const s = Common.normalizeText(rate);
      const map = {
        "xuất sắc": 5,
        "xuat sac": 5,
        "tốt": 4,
        tot: 4,
        "khá": 3,
        kha: 3,
        "trung bình": 2,
        "trung binh": 2,
        "kém": 1,
        kem: 1,
        "-": 0,
        "—": 0,
        "": 0,
      };
      return map[s] ?? 0;
    },

  };

  window.Common = Common;
})();
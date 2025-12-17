(function () {
  "use strict";

  /**
   * Toggle nút clear của ô search (header).
   * Created By DCHAO - 16/12/2025
   */
  window.onInputChange = function onInputChange() {
    const searchInput = document.getElementById("text-editor-input");
    const clearButton = document.getElementsByClassName("clear-button-area");
    if (!searchInput || !clearButton?.[0]) return;

    if ((searchInput.value ?? "").length > 0) {
      clearButton[0].style.display = "flex";
    } else {
      clearButton[0].style.display = "none";
    }
  };

  /**
   * Clear ô search (header).
   * Created By DCHAO - 16/12/2025
   */
  window.clearSearchInput = function clearSearchInput() {
    const searchInput = document.getElementById("text-editor-input");
    const clearButton = document.getElementsByClassName("clear-button-area");
    if (!searchInput || !clearButton?.[0]) return;

    searchInput.value = "";
    clearButton[0].style.display = "none";
  };

  /**
   * Mở link trang tuyển dụng ở tab mới.
   * Created By DCHAO - 16/12/2025
   */
  window.targetBlankRecruitmentLinks = function targetBlankRecruitmentLinks() {
    window.open("https://nhietdien.jobday.vn/", "_blank")?.focus?.();
  };
})();
const detailRoot = document.querySelector("#bookDetail");
const params = new URLSearchParams(window.location.search);
const bookId = Number(params.get("id"));

function setText(selector, value) {
  const element = detailRoot.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function renderMissingBook() {
  detailRoot.innerHTML = `
    <div class="detail-copy">
      <p class="eyebrow">Không tìm thấy sách</p>
      <h1>Cuốn sách này chưa có trong danh mục.</h1>
      <p>Vui lòng quay lại danh mục để chọn một cuốn sách khác.</p>
      <a class="button primary" href="index.html#sach">Xem danh mục sách</a>
    </div>
  `;
}

function renderBookDetail(book) {
  document.title = `${book.title} - Thư viện tỉnh Tây Ninh`;
  detailRoot.innerHTML = `
    <div class="detail-cover ${book.cover ? "has-image" : ""}">
      ${book.cover ? `<img src="${book.cover}" alt="">` : `<span></span>`}
    </div>
    <div class="detail-copy">
      <p class="eyebrow detail-label"></p>
      <h1 class="detail-title"></h1>
      <div class="detail-meta">
        <span class="detail-author"></span>
        <span class="detail-category"></span>
      </div>
      <section>
        <h2>Giới thiệu sách</h2>
        <p class="detail-desc"></p>
      </section>
      <section>
        <h2>Vì sao nên đọc?</h2>
        <p class="detail-reason"></p>
      </section>
      <div class="detail-actions">
        <a class="button primary" href="index.html#sach">Chọn sách khác</a>
        <a class="button outline" href="index.html#lien-he">Liên hệ thư viện</a>
      </div>
    </div>
  `;

  setText(".detail-label", book.label);
  setText(".detail-title", book.title);
  setText(".detail-author", `Tác giả/nguồn: ${book.author}`);
  setText(".detail-category", `Chủ đề: ${book.label}`);
  setText(".detail-desc", book.desc);
  setText(".detail-reason", `Cuốn sách này phù hợp để trưng bày, giới thiệu trong các buổi tuyên truyền văn hóa đọc và giúp bạn đọc tiếp cận chủ đề "${book.label}" một cách gần gũi, dễ nhớ.`);

  const coverFallback = detailRoot.querySelector(".detail-cover span");
  if (coverFallback) {
    coverFallback.textContent = book.title;
  }
}

async function initBookDetail() {
  if (!detailRoot) {
    return;
  }

  await window.libraryBooksReady;
  const detailBook = window.libraryBooks?.[bookId];

  if (!Number.isInteger(bookId) || !detailBook) {
    renderMissingBook();
    return;
  }

  renderBookDetail(detailBook);
}

initBookDetail();

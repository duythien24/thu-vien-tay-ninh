const loginPanel = document.querySelector("#loginPanel");
const editorPanel = document.querySelector("#editorPanel");
const loginForm = document.querySelector("#loginForm");
const bookForm = document.querySelector("#bookForm");
const bookList = document.querySelector("#adminBookList");
const adminMessage = document.querySelector("#adminMessage");
const newBookButton = document.querySelector("#newBookButton");
const importBooksButton = document.querySelector("#importBooksButton");
const deleteBookButton = document.querySelector("#deleteBookButton");

let sessionToken = "";
let adminBooks = [];

function showMessage(message, type = "info") {
  adminMessage.textContent = message;
  adminMessage.dataset.type = type;
}

function bookToForm(book = {}) {
  bookForm.elements.id.value = book.id || "";
  bookForm.elements.title.value = book.title || "";
  bookForm.elements.author.value = book.author || "";
  bookForm.elements.category.value = book.category || "lich-su";
  bookForm.elements.label.value = book.label || "";
  bookForm.elements.cover.value = book.cover || "";
  bookForm.elements.sortOrder.value = book.sortOrder || 0;
  bookForm.elements.desc.value = book.desc || "";
}

function formToBook() {
  return {
    title: bookForm.elements.title.value.trim(),
    author: bookForm.elements.author.value.trim(),
    category: bookForm.elements.category.value,
    label: bookForm.elements.label.value.trim(),
    cover: bookForm.elements.cover.value.trim(),
    sortOrder: bookForm.elements.sortOrder.value,
    desc: bookForm.elements.desc.value.trim()
  };
}

function renderBookList() {
  bookList.innerHTML = adminBooks.map((book) => `
    <button class="admin-book-item" type="button" data-id="${book.id}">
      <strong>${book.title}</strong>
      <span>${book.label} - ${book.author}</span>
    </button>
  `).join("");
}

async function loadAdminBooks() {
  adminBooks = await window.LibraryDB.fetchBooks();
  renderBookList();
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value;

  try {
    const session = await window.LibraryDB.signIn(email, password);
    sessionToken = session.access_token;
    loginPanel.classList.add("hidden");
    editorPanel.classList.remove("hidden");
    showMessage("Dang nhap thanh cong. Dang tai danh muc sach...");
    await loadAdminBooks();
    showMessage("Da tai danh muc sach tu database.");
  } catch (error) {
    showMessage("Dang nhap that bai. Kiem tra email, mat khau va cau hinh Supabase.", "error");
    console.error(error);
  }
});

newBookButton.addEventListener("click", () => {
  bookToForm();
  showMessage("Dang tao sach moi. Nhap thong tin va bam Luu sach.");
});

importBooksButton.addEventListener("click", async () => {
  const confirmed = confirm("Nhap tat ca sach mau hien co len database? Neu da nhap roi, thao tac nay co the tao sach trung.");
  if (!confirmed) {
    return;
  }

  try {
    await window.libraryBooksReady;
    const sampleBooks = window.libraryBooks || [];
    showMessage(`Dang nhap ${sampleBooks.length} sach mau len database...`);

    for (let index = 0; index < sampleBooks.length; index += 1) {
      await window.LibraryDB.createBook({
        ...sampleBooks[index],
        sortOrder: index + 1
      }, sessionToken);
    }

    await loadAdminBooks();
    showMessage("Da nhap xong du lieu mau. Hay kiem tra danh sach ben duoi.");
  } catch (error) {
    showMessage("Khong nhap duoc du lieu mau. Kiem tra bang books va quyen RLS.", "error");
    console.error(error);
  }
});

bookList.addEventListener("click", (event) => {
  const button = event.target.closest(".admin-book-item");
  if (!button) {
    return;
  }

  const book = adminBooks.find((item) => String(item.id) === button.dataset.id);
  if (book) {
    bookToForm(book);
    showMessage(`Dang sua: ${book.title}`);
  }
});

bookForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = bookForm.elements.id.value;
  const book = formToBook();

  try {
    if (id) {
      await window.LibraryDB.updateBook(id, book, sessionToken);
      showMessage("Da cap nhat sach.");
    } else {
      await window.LibraryDB.createBook(book, sessionToken);
      showMessage("Da them sach moi.");
    }

    await loadAdminBooks();
    bookToForm();
  } catch (error) {
    showMessage("Khong luu duoc sach. Kiem tra bang books va quyen RLS.", "error");
    console.error(error);
  }
});

deleteBookButton.addEventListener("click", async () => {
  const id = bookForm.elements.id.value;
  if (!id) {
    showMessage("Chon mot sach truoc khi xoa.", "error");
    return;
  }

  const confirmed = confirm("Ban co chac muon xoa sach nay?");
  if (!confirmed) {
    return;
  }

  try {
    await window.LibraryDB.deleteBook(id, sessionToken);
    showMessage("Da xoa sach.");
    await loadAdminBooks();
    bookToForm();
  } catch (error) {
    showMessage("Khong xoa duoc sach. Kiem tra quyen RLS.", "error");
    console.error(error);
  }
});

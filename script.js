const books = [
  {
    title: "Tây Ninh xưa và nay",
    category: "lich-su",
    label: "Lịch sử địa phương",
    author: "Tủ sách địa chí",
    cover: "assets/books/tay-ninh-xua-va-nay.jpg",
    desc: "Gợi ý cho bạn đọc muốn tìm hiểu vùng đất, con người, di tích và ký ức văn hóa Tây Ninh."
  },
  {
    title: "Ghề núi Bà Đen - Cảm nhận sự linh thiêng miền biên viễn Đông Nam Bộ",
    category: "lich-su",
    label: "Văn hóa Tây Ninh",
    author: "Chuyên đề địa phương",
    cover: "assets/books/ghe-nui-ba-den.webp",
    desc: "Cuốn sách đưa bạn đọc đến với núi Bà Đen, biểu tượng văn hóa - tâm linh đặc sắc của Tây Ninh, qua những cảm nhận về vẻ đẹp linh thiêng nơi miền biên viễn Đông Nam Bộ."
  },
  {
    title: "Dế Mèn phiêu lưu ký",
    category: "thieu-nhi",
    label: "Thiếu nhi",
    author: "Tô Hoài",
    cover: "assets/books/de-men-phieu-luu-ky.jpg",
    desc: "Một lựa chọn quen thuộc để khơi gợi trí tưởng tượng và tình yêu tiếng Việt cho thiếu nhi."
  },
  {
    title: "Tôi thấy hoa vàng trên cỏ xanh",
    category: "van-hoc",
    label: "Văn học Việt Nam",
    author: "Nguyễn Nhật Ánh",
    cover: "assets/books/toi-thay-hoa-vang.jpg",
    desc: "Câu chuyện tuổi thơ gần gũi, dễ đọc, thích hợp cho học sinh trung học và gia đình cùng đọc."
  },
  {
    title: "Khuyến học",
    category: "ky-nang",
    label: "Tự học",
    author: "Fukuzawa Yukichi",
    cover: "assets/books/khuyen-hoc.jpg",
    desc: "Gợi mở tinh thần học tập suốt đời, rất hợp với các buổi tuyên truyền văn hóa đọc."
  },
  {
    title: "Tuổi trẻ đáng giá bao nhiêu",
    category: "ky-nang",
    label: "Kỹ năng sống",
    author: "Rosie Nguyễn",
    cover: "assets/books/tuoi-tre-dang-gia-bao-nhieu.png",
    desc: "Dành cho thanh niên đang tìm định hướng học tập, nghề nghiệp và thói quen phát triển bản thân."
  },
  {
    title: "Tư tưởng Hồ Chí Minh về phòng, chống tham ô, lãng phí, quan liêu",
    category: "ho-chi-minh",
    label: "Học và làm theo Bác",
    author: "TS. Nguyễn Ngọc Anh",
    cover: "assets/books/hcm-01.jpg",
    desc: "Cuốn sách giúp bạn đọc hiểu rõ hơn giá trị tư tưởng Hồ Chí Minh trong xây dựng đạo đức công vụ, thực hành tiết kiệm và chống những biểu hiện làm suy giảm niềm tin của nhân dân."
  },
  {
    title: "Bác Hồ với phụ nữ và thiếu niên nhi đồng",
    category: "ho-chi-minh",
    label: "Bác Hồ với nhân dân",
    author: "Khánh Linh tuyển chọn",
    cover: "assets/books/hcm-02.jpg",
    desc: "Tập sách gợi lại tình cảm gần gũi của Bác dành cho phụ nữ và thiếu nhi, phù hợp cho các buổi sinh hoạt chủ điểm, kể chuyện đạo đức và giáo dục truyền thống."
  },
  {
    title: "Chủ tịch Hồ Chí Minh với các nước châu Âu",
    category: "ho-chi-minh",
    label: "Lịch sử - đối ngoại",
    author: "Nguyễn Văn Dương sưu tầm, biên soạn",
    cover: "assets/books/hcm-03.jpg",
    desc: "Qua những tư liệu về mối liên hệ của Chủ tịch Hồ Chí Minh với các nước châu Âu, cuốn sách mở ra góc nhìn về hành trình tìm đường cứu nước và tầm vóc ngoại giao của Người."
  },
  {
    title: "Hồ Chí Minh mạch nguồn và ánh sáng",
    category: "ho-chi-minh",
    label: "Tư tưởng Hồ Chí Minh",
    author: "PGS.TS. Nguyễn Thanh Tú",
    cover: "assets/books/hcm-04.jpg",
    desc: "Nhan đề giàu hình ảnh cho thấy tư tưởng Hồ Chí Minh như nguồn sáng soi đường. Sách phù hợp với bạn đọc muốn tìm hiểu giá trị bền vững của tư tưởng, đạo đức và phong cách Hồ Chí Minh."
  },
  {
    title: "Thực hiện di chúc Chủ tịch Hồ Chí Minh",
    category: "ho-chi-minh",
    label: "Di chúc của Bác",
    author: "Khánh Linh tuyển chọn",
    cover: "assets/books/hcm-05.jpg",
    desc: "Cuốn sách nhắc lại ý nghĩa của Di chúc Chủ tịch Hồ Chí Minh và khơi gợi trách nhiệm tiếp nối lời căn dặn của Người trong học tập, lao động, đoàn kết và phụng sự đất nước."
  },
  {
    title: "Thế giới ngưỡng mộ Hồ Chí Minh",
    category: "ho-chi-minh",
    label: "Hồ Chí Minh trong lòng thế giới",
    author: "GS.TS. Đinh Xuân Dũng",
    cover: "assets/books/hcm-06.jpg",
    desc: "Từ tiêu đề, cuốn sách hướng người đọc đến hình ảnh Hồ Chí Minh trong sự kính trọng của bạn bè quốc tế, qua đó giúp thế hệ trẻ thêm tự hào về giá trị Việt Nam."
  },
  {
    title: "5 tác phẩm tiêu biểu của Hồ Chí Minh bảo vật quốc gia",
    category: "ho-chi-minh",
    label: "Tác phẩm của Bác",
    author: "TS. Hoàng Chí Bảo, TS. Trần Thị Minh Tuyết",
    cover: "assets/books/hcm-07.jpg",
    desc: "Sách giới thiệu những tác phẩm có giá trị đặc biệt của Chủ tịch Hồ Chí Minh, giúp bạn đọc tiếp cận trực tiếp di sản tư tưởng, văn hóa và chính trị của Người."
  },
  {
    title: "Chủ tịch Hồ Chí Minh với phụ nữ, phong trào phụ nữ và bình đẳng giới",
    category: "ho-chi-minh",
    label: "Phụ nữ - bình đẳng giới",
    author: "GS.TS. Đinh Xuân Dũng, GS.TS. Nguyễn Như Ý biên soạn",
    cover: "assets/books/hcm-08.jpg",
    desc: "Cuốn sách làm nổi bật sự quan tâm của Chủ tịch Hồ Chí Minh đối với phụ nữ và bình đẳng giới, phù hợp cho hoạt động tuyên truyền nhân ngày 8/3, 20/10 và các chuyên đề xã hội."
  },
  {
    title: "Văn hóa chính trị Hồ Chí Minh với việc xây dựng văn hóa chính trị Việt Nam",
    category: "ho-chi-minh",
    label: "Sách chuyên khảo",
    author: "Nguyễn Minh Khoa",
    cover: "assets/books/hcm-09.jpg",
    desc: "Sách gợi mở cách nhìn về văn hóa chính trị từ tư tưởng Hồ Chí Minh, qua đó giúp bạn đọc hiểu thêm về phẩm chất người cán bộ và nền chính trị vì dân."
  },
  {
    title: "Đạo đức \"Bộ đội Cụ Hồ\" trong tình hình mới",
    category: "ho-chi-minh",
    label: "Đạo đức cách mạng",
    author: "Trung tướng, PGS.TS. Nguyễn Văn Bạo chủ biên",
    cover: "assets/books/hcm-10.jpg",
    desc: "Cuốn sách bàn về phẩm chất Bộ đội Cụ Hồ trong bối cảnh mới, thích hợp cho bạn đọc quan tâm đến truyền thống Quân đội nhân dân Việt Nam và giáo dục đạo đức, trách nhiệm."
  },
  {
    title: "Hồ Chí Minh - Sự hình thành một nhân cách lớn",
    category: "ho-chi-minh",
    label: "Chân dung Hồ Chí Minh",
    author: "Trần Thái Bình",
    cover: "assets/books/hcm-11.jpg",
    desc: "Từ hành trình hình thành nhân cách của Chủ tịch Hồ Chí Minh, cuốn sách giúp người đọc nhận ra giá trị của ý chí, lòng yêu nước, tinh thần học hỏi và lối sống giản dị."
  },
  {
    title: "Tấm gương học tập của Chủ tịch Hồ Chí Minh",
    category: "ho-chi-minh",
    label: "Tinh thần tự học",
    author: "Tống Thu Uyên biên soạn",
    cover: "assets/books/hcm-12.jpg",
    desc: "Cuốn sách đặc biệt phù hợp với học sinh, sinh viên: từ tấm gương tự học của Bác, bạn đọc có thêm động lực rèn luyện mỗi ngày, học trong trường đời, công việc và nhân dân."
  },
  {
    title: "Tư tưởng Hồ Chí Minh: Tầm vóc, giá trị và ý nghĩa",
    category: "ho-chi-minh",
    label: "Tư tưởng Hồ Chí Minh",
    author: "PGS.TS.NGND Nguyễn Bá Dương, ThS. Nguyễn Bá Duy",
    cover: "assets/books/hcm-13.jpg",
    desc: "Cuốn sách khái quát tầm vóc và ý nghĩa của tư tưởng Hồ Chí Minh, phù hợp cho bạn đọc muốn có cái nhìn hệ thống trước khi đi sâu vào các chuyên đề cụ thể."
  },
  {
    title: "Hồ Chí Minh - Người dẫn dắt dân tộc Việt Nam từ đêm trường nô lệ đến mùa thu độc lập 1945",
    category: "ho-chi-minh",
    label: "Lịch sử cách mạng",
    author: "PGS.TS Vũ Như Khôi chủ biên",
    cover: "assets/books/hcm-14.jpg",
    desc: "Cuốn sách giới thiệu vai trò của Chủ tịch Hồ Chí Minh trong hành trình dẫn dắt dân tộc Việt Nam đi từ thân phận nô lệ đến mùa thu độc lập năm 1945. Đây là tư liệu phù hợp cho bạn đọc muốn tìm hiểu Cách mạng Tháng Tám, Tuyên ngôn Độc lập và tầm vóc lãnh tụ Hồ Chí Minh trong lịch sử dân tộc."
  }
];

window.libraryBooks = books;
window.libraryBooksReady = loadBooksFromDatabase();

async function loadBooksFromDatabase() {
  if (!window.LibraryDB?.isConfigured()) {
    return books;
  }

  try {
    const remoteBooks = await window.LibraryDB.fetchBooks();
    if (remoteBooks.length > 0) {
      books.splice(0, books.length, ...remoteBooks);
    }
  } catch (error) {
    console.warn("Dang dung du lieu sach trong file vi chua doc duoc Supabase.", error);
  }

  window.libraryBooks = books;
  return books;
}

const suggestions = [
  {
    title: "Sách về lịch sử kháng chiến Tây Ninh",
    reason: "Hỗ trợ học sinh tìm hiểu lịch sử địa phương."
  },
  {
    title: "Sách tranh song ngữ cho thiếu nhi",
    reason: "Giúp các em vừa đọc truyện vừa học ngoại ngữ."
  }
];

const bookGrid = document.querySelector("#bookGrid");
const filterButtons = document.querySelectorAll(".filter");
const suggestForm = document.querySelector("#suggestForm");
const suggestionsList = document.querySelector("#suggestions");

function getBookId(book) {
  return books.findIndex((item) => item.title === book.title && item.author === book.author);
}

function renderBooks(category = "all") {
  const visibleBooks = category === "all"
    ? books
    : books.filter((book) => book.category === category);

  bookGrid.innerHTML = visibleBooks.map((book) => `
    <a class="book-card" href="book.html?id=${getBookId(book)}" aria-label="Xem chi tiết sách ${book.title}">
      <div class="book-cover ${book.cover ? "has-image" : ""}">
        ${book.cover ? `<img src="${book.cover}" alt="Bìa sách ${book.title}">` : book.title}
      </div>
      <div class="book-info">
        <span class="tag">${book.label}</span>
        <h3>${book.title}</h3>
        <p><strong>Tác giả/nguồn:</strong> ${book.author}</p>
        <p>${book.desc}</p>
      </div>
    </a>
  `).join("");
}

function renderSuggestions() {
  suggestionsList.innerHTML = suggestions.map((item) => `
    <li>
      <strong>${item.title}</strong>
      <p>${item.reason || "Bạn đọc đề xuất bổ sung vào tủ sách."}</p>
    </li>
  `).join("");
}

if (bookGrid) {
  let currentFilter = "all";

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      currentFilter = button.dataset.filter;
      renderBooks(currentFilter);
    });
  });

  renderBooks();
  window.libraryBooksReady.then(() => renderBooks(currentFilter));
}

if (suggestForm && suggestionsList) {
  suggestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(suggestForm);
    suggestions.unshift({
      title: data.get("title").trim(),
      reason: data.get("reason").trim()
    });
    renderSuggestions();
    suggestForm.reset();
  });

  renderSuggestions();
}

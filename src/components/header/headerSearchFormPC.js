
function HeaderSearchFormPC() {
  return (<>
      <div className="search-form-pc flex">
        <input
          type="text"
          placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
        />
        <button>
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
  </>)
}

export default HeaderSearchFormPC
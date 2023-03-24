import { memo } from "react"


function HeaderSearchFormPC() {
  // console.log('HeaderSearchFormPC re-render')

  return (<>
      <div className="search-form-pc flex">
        <input
          type="text"
          placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
        />
        <button>
        <div class="base-ic">
        <i class={`demo-icon ic-search`}></i>
        </div>
        </button>
      </div>
  </>)
}

export default HeaderSearchFormPC = memo(HeaderSearchFormPC)
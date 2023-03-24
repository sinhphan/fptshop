import { ICONS } from "../../config";

function Icon({ iconid }) {
  // console.log('icon' + iconid);
  let icon = ICONS.filter(icon => icon.id === +iconid)

  return (<>
    {icon.map(e => (
      <div class="base-ic">
        <i class={`demo-icon ${e.icon}`}></i>
      </div>))}
  </>)
}

export default Icon = Icon
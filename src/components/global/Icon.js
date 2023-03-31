import { ICONS } from "../../config";

function Icon({ iconid, text }) {
  // console.log('icon' + iconid);
  let icon = ICONS.filter(icon => icon.id === +iconid)

  return (<>
    {icon.map((e,id) => (
      <div className="base-ic" key={id}>
        <i className={`demo-icon ${e.icon}`}></i>
        {text}
      </div>
      ))}
  </>)
}

export default Icon = Icon
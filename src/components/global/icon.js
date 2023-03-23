import { ICONS } from "../../config";

function Icon({iconid}) {
  // console.log('icon' + iconid);
  let icon = ICONS.filter(icon=> icon.id === +iconid)

  return (<>                  
    {icon.map(e=><i className={`fa-solid ${e.icon} `} key={e.id}/>)}
  </>)
}

export default Icon
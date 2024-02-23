import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom"


function CategoryBox({label,icon:Icon,selected}) {
  const [params,setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick =()=>{
    // console.log(label);
    let currentQuery = {};
    if(params){
      currentQuery = qs.parse(params.toString());
      const updatedQuery = {...currentQuery,category:label}
      const url = qs.stringifyUrl({
        url:'/',
        query:updatedQuery
      })
      navigate(url)
    }
  }
  params.get('category')
  return (
    <div onClick={handleClick}
    className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800' :''}`}>
        <Icon size={26}/>
        <div className="text-sm font-medium">
        {label}
        </div>
    </div>
  )
}

export default CategoryBox
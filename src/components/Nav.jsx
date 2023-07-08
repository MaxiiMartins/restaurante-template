import { navData } from "../data";

const getOptions = (options)=> {
  return options.map((item,i)=>(
    <li key={i}>
      <a className="text-xl capitalize font-primary italic hover:text-dark transition-all durationn-300 " href={"#"}>{item.name}</a>
    </li>
  ))
}
 


const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-4" >
      {getOptions(navData)}
      </ul>
    </nav>
  )
};

export default Nav;

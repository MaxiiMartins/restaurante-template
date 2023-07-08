import { socialData } from "../data";

const getSocials = (options) =>{
  return (
    options.map((item,i) =>(
      <a key={i} className="border-2 rounded-full w-9 h-9 flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all durationn-300 " href={"#"}>{item.icon}</a>
    ))
  )
}

const Socials = () => {
  return <div className="flex gap-x-[10px]" >
    {getSocials(socialData)}
  </div>;
};

export default Socials;

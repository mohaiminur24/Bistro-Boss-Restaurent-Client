import { useEffect, useState } from "react";

const FindMenuByCatagory = (catagory)=>{
        const [menu, setMenu] = useState(null);
        useEffect(()=>{
            fetch("menu.json").then(res=>res.json()).then(data=>{ 
                const filter = data.filter(mn=> mn.category === catagory);
                setMenu(filter);
            });
        },[])

        console.log(menu);

        return [menu];
};

export default FindMenuByCatagory;
import Categories from "./Categories";
import Menu from "./Menu";
import Title from "./Title";
import menu from './data'
import { useState } from "react";

/* 
const tempCategories = menu.map((item)=> item.category);
const tempSet = new Set(tempCategories);    //new Set gives us an object with the elements 
const tempItems = ['all', ...tempSet];    // We need an array */

const allCategories = ['all', ...new Set(menu.map((item)=> item.category))]; //all in one line


const App = () => {

  const [menuItems, setMenuItems] = useState(menu);
  const [categories,setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems(menu);
      return;
    }
    console.log(category);
    const newItems = menu.filter((item)=> item.category === category);
    setMenuItems(newItems);
  } 
  return ( <main>
    <section className="menu">
      <Title text='our menu'/>
      <Categories categories= {categories} filterItems={filterItems}/>
      <Menu items= {menuItems} />
    </section>
  </main>
  );
};
export default App;

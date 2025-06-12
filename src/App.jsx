import { NavBar } from "./components/navbar/navbar"
import { HomePage } from "./components/homepage/homepage";
import { Menu } from "./components/menu/menu";

function App() {
  let menu = [
    { // 1
      img: "https://kirbiecravings.com/wp-content/uploads/2020/02/souffle-omelette-14.jpg",
      title: "1. Galactic Sunrise Breakfast Burrito",
      para: "Start your day with fluffy eggs, savory bacon, and melted cheese, all wrapped up in a warm tortilla. Served with a side of cosmic potatoes.",
    },
    {// 2
      img: "https://s3.ap-southeast-1.amazonaws.com/localiiz-prod/uploads/gram-cafe-pancakes-best-japanese-souffle-pancakes-in-hong-kong-feb-2023.jpg?mtime=20230220141835&focal=none",
      title: "2. Lunar Lava Pancakes",
      para: "Stacked high and drizzled with molten maple syrup. Served with asteroid berries and a sprinkle of stardust sugar.",
    },
    { // 3
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      title: "3. Martian Melt Sandwich",
      para: "Grilled to perfection with layers of intergalactic cheese and smoked nebula ham. Comes with plasma fries.",
    },
    { // 4
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHg6RirdtIJIaCwRQEiJd6skieYQGCreJI-g&s",
      title: "4. Saturn Rings Salad",
      para: "A crunchy orbit of lettuce, comet croutons, and planetary veggies, dressed in cosmic vinaigrette.",
    },
    { // 5
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
      title: "5. Cosmic Cappuccino",
      para: "Steamed stardust milk poured over deep-roasted dark side beans. Finished with a galaxy swirl on top.",
    },
    { // 6
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      title: "6. Nebula Nachos",
      para: "Crispy space chips layered with molten cheddar, comet salsa, and spicy asteroid jalapeños, topped with a sour cream swirl.",
    },
    { // 7
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
      title: "7. Supernova Spaghetti",
      para: "Twisted pasta spirals in a rich meteor marinara, garnished with meteorite meatballs and parmesan stardust.",
    },
    { // 8
      img: "https://media.istockphoto.com/id/1367485863/vector/ice-cream-cone.jpg?s=612x612&w=0&k=20&c=_TNW6JSfq8Lgakt7waJutCLUemkcDrmgysWRu74Cgeg=",
      title: "8. Interstellar Ice Cream Stack",
      para: "Three scoops from different galaxies stacked high and crowned with a comet-shaped chocolate wafer.",
    },
    {
      img: "https://www.hindustantimes.com/ht-img/img/2025/06/04/original/ihihihihihiowh_1749039711048.jpg",
      title: "9. Moon Crater Mac & Cheese",
      para: "Creamy, bubbly cheese baked into soft pasta moons, served in a crater-shaped bowl of comfort.",
    }

    ,
    { // 10
      img: "https://static.toiimg.com/photo/90396846.cms",
      title: "10. Solar Flare Smoothie",
      para: "A radiant blend of mango, pineapple, and citrus sunswirl — served cold with a glowing straw.",
    }
  ];

  // menu.map(dish => console.log(dish))

  let MenuComponent = menu.map(dish => <Menu
    img={dish.img}
    title={dish.title}
    para={dish.para}
  />)

  console.log(MenuComponent);


  return <div>
    <NavBar />
    <HomePage />
    <div className="menu">
      {MenuComponent}
      {/* <Menu img={menu[0].img} title={menu[0].title} para={menu[0].para} />

      <Menu img={menu[1].img} title={menu[1].title} para={menu[1].para} />

      <Menu img={menu[2].img} title={menu[2].title} para={menu[2].para} />

      <Menu img={menu[3].img} title={menu[3].title} para={menu[3].para} />¸ */}
    </div>

  </div>
}

export default App

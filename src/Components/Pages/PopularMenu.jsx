import Title from "../Title/Title";
import MenuItem from "./MenuItem";
import useMenu from "../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const popular = menu.filter(item => item.category === "popular");

  return (
    <section className="mb-12">
      <Title subHeading="Check it out" heading="FROM OUR MENU"></Title>

      <div className="grid md:grid-cols-2 gap-4">
        {popular.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;

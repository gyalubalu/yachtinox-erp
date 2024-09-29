import TopBar from "../topbar/TopBar.tsx";
import SecondaryMenu from "../secondarymenu/SecondaryMenu.tsx";

const MainArea: React.FC = () => {
  return (
    <div className="p-0">
      <TopBar />
      <SecondaryMenu />
      <h2>Üdvözöljük a fő területen!</h2>
      <p>
        Itt jelenik meg a kiválasztott menü tartalma. - ezt a szöveget PC-n
        írtam!
      </p>
    </div>
  );
};

export default MainArea;

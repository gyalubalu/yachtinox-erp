import "./Topbar.css";

const TopBar: React.FC = () => {
  return (
    <>
      <div className="p-2">
        <p className="text-right">
          <span className="badge rounded-pill text-bg-primary">Árajánlat</span>
          <span> 3 árajánlat függőben! | </span>
          <span className="badge rounded-pill text-bg-danger">
            Anyagrendelés
          </span>
          <span> 3 anyag hiányzik! | </span>
          <span className="badge rounded-pill text-bg-success">Számlázás</span>
          <span> 4 projekt számlázható!</span>
        </p>
        <div className="hidden">
          <span className="badge rounded-pill text-bg-primary">1</span>
          <span className="badge rounded-pill text-bg-secondary">2</span>
          <span className="badge rounded-pill text-bg-success">3</span>
          <span className="badge rounded-pill text-bg-danger">4</span>
          <span className="badge rounded-pill text-bg-warning">5</span>
          <span className="badge rounded-pill text-bg-info">6</span>
          <span className="badge rounded-pill text-bg-light">7</span>
          <span className="badge rounded-pill text-bg-dark">8</span>
        </div>
      </div>
    </>
  );
};

export default TopBar;

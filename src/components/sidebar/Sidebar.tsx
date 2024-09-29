import "./Sidebar.css";

const menuitems = [
  "Projektek",
  "Késztermékek",
  "Anyagok",
  "Munkaidő",
  "Beállítások",
];

function Sidebar() {
  return (
    <>
      <div className="navbar">
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sdb-normal">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi pe-none me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">
              <i className="bi bi-6-square-fill"></i>Sidebar
            </span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            {menuitems.map((menuitem) => (
              <li className="nav-item" key={menuitem}>
                <a href="#" className="nav-link" aria-current="page">
                  {menuitem}
                </a>
              </li>
            ))}
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

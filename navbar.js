function NavBar(){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mynav">
        <div className="container-fluid">
          <li className="nav-item dropdown">
            
          <a className="navbar-brand" href="#">Bad Bank 💰</a>
             <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item mydropdown">Home Page</a></li>
              </ul>
          </li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">

            <li className="nav-item dropdown">
                <a className="nav-link" href="#/CreateAccount/">Create An Account</a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item">Bank With Us</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#/deposit/">Deposit Funds</a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item">Make a Deposit</a></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link" href="#/withdraw/">Withdraw Cash</a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item">Take Out Money</a></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link" href="#/alldata">View All Data</a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item">View All User Data</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
 

    </>
  );
}
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `  <a href="/index.html"><img src='/assets/Home_Logo.jpg' alt="Daisy Chain Hair & Beauty Logo" class="logo" aria-label="Daisy Chain Hair & Beauty"></img></a> 
        <div id="wrap">
              <a href="#main-menu" id="main-menu-toggle" class="menu-toggle" aria-label="Open main menu">
                <span class="sr-only">Open main menu</span>
                <span class="fa fa-bars" aria-hidden="true"></span>
              </a>
              <nav id="main-menu" class="main-menu" aria-label="Main menu">
                <a href="#main-menu-toggle" id="main-menu-close" class="menu-close" aria-label="Close main menu">
                  <span class="sr-only">Close main menu</span>
                  <span class="fa fa-close" aria-hidden="true"></span>
                </a>
                <ul>
                  <li class="list-item">
                    <a href="/index.html" class="nav-link" id="home">Home</a>
                  </li>
                  <li class="list-item">
                    <a href="/html/services.html" class="nav-link" id="services">Services</a>
                  </li>
                  <li class="list-item">
                    <a href="/html/gallery.html" class="nav-link" id="gallery">Gallery</a>
                  </li>
                  <li class="list-item">
                    <a href="/html/contact.html"  class="nav-link" id="contact">Contact</a>
                  </li>
                  <li class="list-item">
                    <a href="/html/booking.html" class="nav-link" id="booking">BOOK</a>
                  </li>
                </ul>
              </nav>
              <a href="#main-menu-toggle" class="backdrop" tabindex="-1" aria-hidden="true" hidden></a>
        </div>`;
    }
}
customElements.define('main-header', Header);

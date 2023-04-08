const categories = [
    { name: "Niño", subcategories: ["Zapatillas", "Ropa", "Accesorios"] },
    { name: "Mujer", subcategories: ["Zapatillas", "Ropa", "Accesorios"] },
    { name: "Hombre", subcategories: ["Zapatillas", "Ropa", "Accesorios"] },
    { name: "Accesorios", subcategories: ["Gorras", "Balones", "Calcetines"] },
  ];
  
  const navBar = document.createElement("nav");
  navBar.classList.add("navbar", "navbar-expand-lg", "navbar-dark");
  
  const navBrand = document.createElement("a");
  navBrand.classList.add("navbar-brand");
  navBrand.href = "#";
  
  const navLogo = document.createElement("img");
  navLogo.src = "logo.png";
  navLogo.alt = "box Out :: Shop Basquet Area";
  
  navBrand.appendChild(navLogo);
  navBar.appendChild(navBrand);
  
  const navButton = document.createElement("button");
  navButton.classList.add("navbar-toggler");
  navButton.type = "button";
  navButton.dataset.toggle = "collapse";
  navButton.dataset.target = "#navbarNavDropdown";
  navButton.setAttribute("aria-controls", "navbarNavDropdown");
  navButton.setAttribute("aria-expanded", "false");
  navButton.setAttribute("aria-label", "Toggle navigation");
  
  const navIcon = document.createElement("span");
  navIcon.classList.add("navbar-toggler-icon");
  navButton.appendChild(navIcon);
  navBar.appendChild(navButton);
  
  const navMenu = document.createElement("div");
  navMenu.classList.add("collapse", "navbar-collapse");
  navMenu.id = "navbarNavDropdown";
  
  const navList = document.createElement("ul");
  navList.classList.add("navbar-nav");
  
  const navHome = document.createElement("li");
  navHome.classList.add("nav-item", "active");
  
  const navHomeLink = document.createElement("a");
  navHomeLink.classList.add("nav-link");
  navHomeLink.href = "#";
  navHomeLink.textContent = "Inicio";
  navHome.appendChild(navHomeLink);
  navList.appendChild(navHome);
  
  categories.forEach((category) => {
    const navCategory = document.createElement("li");
    navCategory.classList.add("nav-item", "dropdown");
  
    const navCategoryLink = document.createElement("a");
    navCategoryLink.classList.add("nav-link", "dropdown-toggle");
    navCategoryLink.href = "#";
    navCategoryLink.textContent = category.name;
    navCategoryLink.setAttribute("id", "navbarDropdownMenuLink");
    navCategoryLink.setAttribute("role", "button");
    navCategoryLink.setAttribute("data-toggle", "dropdown");
    navCategoryLink.setAttribute("aria-haspopup", "true");
    navCategoryLink.setAttribute("aria-expanded", "false");
    navCategory.appendChild(navCategoryLink);
  
    const navSubcategories = document.createElement("div");
    navSubcategories.classList.add("dropdown-menu");
    navSubcategories.setAttribute("aria-labelledby", "navbarDropdownMenuLink");
  
    category.subcategories.forEach((subcategory) => {
      const navSubcategory = document.createElement("a");
      navSubcategory.classList.add("dropdown-item");
      navSubcategory.href = "#";
      navSubcategory.textContent = subcategory;
      navSubcategories.appendChild(navSubcategory);
    });
  
    navCategory.appendChild(navSubcategories);
    navList.appendChild(navCategory);
  });
  
  navMenu.appendChild(navList);
  navBar.appendChild(navMenu);
  
  // Agregar el navbar al DOM
  const header = document.querySelector("header");
  header.appendChild(navBar);
  
  
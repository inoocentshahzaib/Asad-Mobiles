 document.querySelector('.menu-btn').addEventListener('click', () => {
      document.querySelector('.nav-content').classList.toggle('show');
    });

    function toggleDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    window.addEventListener('click', (e) => {
      const dropdown = document.querySelector('.dropdown');
      const dropbtn = dropdown.querySelector('.dropbtn');
      const dropdownContent = document.getElementById('myDropdown');
      if (e.target !== dropbtn && !dropdown.contains(e.target)) {
        dropdownContent.classList.remove('show');
      }
    });

    document.querySelector('.dropbtn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

function loginWithGoogle() {
  window.location.href = "/.auth/login/google";
}

function logout() {
  window.location.href = "/.auth/logout";
}

// Check if user is logged in
fetch('/.auth/me')
  .then(res => res.json())
  .then(data => {
    const user = data.clientPrincipal;

    if (user) {
      // OPTIONAL: Display user info
      const display = document.getElementById("userName");
      if (display) {
        display.innerText = `Welcome, ${user.userDetails}`;
      }

      // 👇 DON'T redirect to index.html if already on it
      const currentPath = window.location.pathname;
      if (currentPath === "/login.html") {
        // Only redirect to index.html if currently on login page
        window.location.href = "/index.html";
      }
    }
  })
  .catch(err => console.error("Auth check failed", err));


function sendAppointment() {
  const data = {
      FullName: document.getElementsByName("fullName")[0].value,
      Email: document.getElementsByName("Email")[0].value,
      PhoneNumber: document.getElementsByName("phoneNumber")[0].value,
      AppointmentDate: document.getElementsByName("AD")[0].value,
      AppointmentTime: document.getElementsByName("AT")[0].value,
      DoctorName: document.getElementsByName("doctor")[0].value,
      ComplimentaryMessage: document.getElementsByName("message")[0].value
  };

  fetch("/data-api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
  })
    .then(() => {
      alert("✅ Appointment submitted successfully!");
  });
}




$(document).ready(function () {
  $(".carousel-caption").fadeIn(3000);

  $(".btn-ViewDental").hover(
    function () {
      $(".btn-ViewDental").css({
        color: "white",
        "background-color": "#00bcd4",
      });
    },
    function () {
      $(".btn-ViewDental").css({
        "background-color": "white",
        color: "#00bcd4",
      });
    }
  );

  $(".btn-custom1").hover(
    function () {
      $(".btn-custom1").css({
        "background-color": "white",
        color: "#00bcd4",
      });
    },
    function () {
      $(".btn-custom1").css({
        color: "white",
        "background-color": "#00bcd4",
      });
    }
  );

  $(".form-control").focus(function () {
    $(".form-control").css("background-color", "transparent");
  });

  $(".offersDiv").hover(
    function () {
      $(this).css({
        "background-color": "#00bcd4",
        cursor: "pointer",
        color: "white",
      });
    },
    function () {
      $(this).css({
        "background-color": "white",
        color: "black",
      });
    }
  );

  $(".offersDiv").hover(
    function () {
      $(this).find(".offericons").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".offericons").css({
        color: "#00bcd4",
      });
    }
  );

  $(".offersDiv").hover(
    function () {
      $(this).find(".offertext").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".offertext").css({
        color: "rgb(143, 143, 143)",
      });
    }
  );

  $(".innerServiceDivs").hover(
    function () {
      $(this).css({
        "background-color": "#00BCD4",
        cursor: "pointer",
      });
    },
    function () {
      $(this).css({
        "background-color": "white",
      });
    }
  );
  $(".innerServiceDivs").hover(
    function () {
      $(this).find(".servicesTextInner").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".servicesTextInner").css({
        color: "black",
      });
    }
  );
  $(".innerServiceDivs").hover(
    function () {
      $(this).find(".offertext").css({
        color: "rgba(255, 255, 255, 0.804)",
      });
    },
    function () {
      $(this).find(".offertext").css({
        color: "rgb(143, 143, 143)",
      });
    }
  );
  $(".innerServiceDivs").hover(
    function () {
      $(this).find(".iconsServices").css({
        "background-color": "white",
      });
    },
    function () {
      $(this).find(".iconsServices").css({
        "background-color": "#00bcd4",
      });
    }
  );
  $(".innerServiceDivs").hover(
    function () {
      $(this).find(".iconsServices span").css({
        color: "#00bcd4",
      });
    },
    function () {
      $(this).find(".iconsServices span").css({
        color: "white",
      });
    }
  );
  $(".Cards").hover(
    function () {
      $(this).css({
        "background-color": "#00bcd4",
      });
    },
    function () {
      $(this).css({
        "background-color": "white",
      });
    }
  );
  $(".Cards").hover(
    function () {
      $(this).css({
        color: "white",
      });
    },
    function () {
      $(this).css({
        color: "black",
      });
    }
  );
  $(".Cards").hover(
    function () {
      $(this).find(".cardDRPosition").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".cardDRPosition").css({
        color: "#00bcd4",
      });
    }
  );
  $(".Cards").hover(
    function () {
      $(this).find(".card-text").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".card-text").css({
        color: "#999999",
      });
    }
  );
});

function loginWithGoogle() {
  window.location.href = "/.auth/login/google";
}

function logout() {
  window.location.href = "/.auth/logout";
}

// 🔐 Authentication Logic
fetch("/.auth/me")
  .then(res => res.json())
  .then(data => {
    const user = data.clientPrincipal;

    const path = window.location.pathname;

    if (user) {
      // ✅ User is logged in
      if (path.includes("login.html")) {
        // 👉 Redirect to index.html if we're still on login page
        window.location.href = "/index.html";
      } else if (path.includes("index.html") || path === "/") {
        // ✅ On index.html → show content
        const protectedContent = document.getElementById("protectedContent");
        if (protectedContent) protectedContent.style.display = "block";

        const userDisplay = document.getElementById("userName");
        if (userDisplay) {
          userDisplay.innerText = `Welcome, ${user.userDetails}`;
        }
      }
    } else {
      // ❌ Not logged in
      if (!path.includes("login.html")) {
        window.location.href = "/login.html";
      }
    }
  })
  .catch((err) => {
    console.error("Auth check failed", err);
    if (!window.location.pathname.includes("login.html")) {
      window.location.href = "/login.html";
    }
  });




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

if (
  !data.FullName || !data.Email || !data.PhoneNumber ||
  !data.AppointmentDate || !data.AppointmentTime || !data.DoctorName
) {
  alert("Please fill all required fields.");
  return;
}
console.log("🚀 Payload:", JSON.stringify(data));


fetch("/data-api/appointment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
})
.then(async (response) => {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`❌ Server error: ${response.status} - ${text}`);
  }

  alert("✅ Appointment submitted successfully!");
})

.catch(error => {
    console.error("Submission failed:", error);
    alert("Appointment submission failed. Check console for details.");
});




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

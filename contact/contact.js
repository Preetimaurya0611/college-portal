document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  try {
    const res = await fetch("/contact", {
      method: "POST",
      body: formData
    });

    if (!res.ok) throw new Error("Server error");

    document.getElementById("msg").innerText = "Form submitted successfully!";
    this.reset();

  } catch (err) {
    document.getElementById("msg").innerText = "Server error! Backend not reachable";
  }
});


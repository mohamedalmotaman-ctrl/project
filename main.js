/* ================= GPA CALCULATOR ================= */

function calculateGPA() {
    const c1 = document.getElementById("c1").value;
    const c2 = document.getElementById("c2").value;
    const c3 = document.getElementById("c3").value;
    const result = document.getElementById("gpa-result");

    // Validation
    if (c1 === "" || c2 === "" || c3 === "") {
        result.innerHTML = "❌ Please enter all course marks.";
        result.style.color = "red";
        return;
    }

    if (c1 < 0 || c1 > 100 || c2 < 0 || c2 > 100 || c3 < 0 || c3 > 100) {
        result.innerHTML = "❌ Marks must be between 0 and 100.";
        result.style.color = "red";
        return;
    }

    // Convert marks to grade points
    function gradePoint(mark) {
        if (mark >= 70) return 4.0;
        if (mark >= 60) return 3.5;
        if (mark >= 50) return 3.0;
        if (mark >= 45) return 2.5;
        if (mark >= 40) return 2.0;
        return 0;
    }

    const g1 = gradePoint(c1);
    const g2 = gradePoint(c2);
    const g3 = gradePoint(c3);

    const gpa = ((g1 + g2 + g3) / 3).toFixed(2);

    let classification = "";

    if (gpa >= 3.6) classification = "First Class";
    else if (gpa >= 3.0) classification = "Second Class Upper";
    else if (gpa >= 2.5) classification = "Second Class Lower";
    else if (gpa >= 2.0) classification = "Pass";
    else classification = "Fail";

    result.style.color = "green";
    result.innerHTML = `✅ GPA: ${gpa} <br> 🎓 Classification: ${classification}`;
}


/* ================= CONTACT FORM VALIDATION ================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                valid = false;
            } else {
                input.style.border = "1px solid #cbd5e1";
            }
        });

        if (!valid) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully! (No backend connected)");
        contactForm.reset();
    });
}


/* ================= DYNAMIC YEAR IN FOOTER ================= */

const footer = document.querySelector("footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Your Name | All Rights Reserved`;
}


/* ================= DARK / LIGHT MODE ================= */

// Create toggle button
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "20px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.background = "#1f2937";
toggleBtn.style.color = "white";
toggleBtn.style.zIndex = "999";

document.body.appendChild(toggleBtn);

let darkMode = false;

toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.background = "#0f172a";
        document.body.style.color = "white";
        toggleBtn.innerText = "☀️ Light Mode";

        document.querySelectorAll("section").forEach(sec => {
            sec.style.background = "#020617";
        });

    } else {
        document.body.style.background = "#f5f7fa";
        document.body.style.color = "#333";
        toggleBtn.innerText = "🌙 Dark Mode";

        document.querySelectorAll("#about").forEach(sec => sec.style.background = "white");
        document.querySelectorAll("#projects").forEach(sec => sec.style.background = "white");
        document.querySelectorAll("#cv").forEach(sec => sec.style.background = "white");

        document.querySelectorAll("#skills, #calculator, #contact").forEach(sec => {
            sec.style.background = "#f1f5f9";
        });
    }
});

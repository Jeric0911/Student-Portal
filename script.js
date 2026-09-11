let pageHistory = [];

// CURRENT ATTENDANCE SUBJECT
let currentAttendanceSubject = "HUMCOMP";


// PAGE NAVIGATION

function showPage(id, saveHistory = true) {

    const targetPage = document.getElementById(id);

    if (!targetPage) {
        console.error("Page not found:", id);
        return;
    }

    const currentPage =
        document.querySelector(".page.active");

    if (
        saveHistory &&
        currentPage &&
        currentPage.id !== id
    ) {
        pageHistory.push(currentPage.id);
    }

    document
        .querySelectorAll(".page")
        .forEach(function(page) {
            page.classList.remove("active");
        });

    targetPage.classList.add("active");

    const menu =
        document.getElementById("navigation-menu");

    if (menu) {
        menu.classList.remove("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// LOGIN

function login() {

    const studentId =
        document.getElementById("student-id");

    const password =
        document.getElementById("password");


    if (studentId) {

        studentId.value =
            studentId.value.replace(/[^0-9]/g, "");


        if (studentId.value.trim() === "") {

            alert(
                "Please enter your Student ID."
            );

            studentId.focus();

            return;
        }
    }


    if (password) {

        if (password.value.trim() === "") {

            alert(
                "Please enter your Password."
            );

            password.focus();

            return;
        }
    }


    pageHistory = [];

    showPage(
        "dashboard",
        false
    );
}


// ATTENDANCE

function openAttendance() {

    showPage("attendance");

}


// HUMCOMP ATTENDANCE

function openAttendanceDetails() {

    currentAttendanceSubject = "HUMCOMP";

    showPage("details");

}


// QUANMET ATTENDANCE

function openQuanmetAttendance() {

    currentAttendanceSubject = "QUANMET";

    showPage("quanmet-details");

}


// INTPROG ATTENDANCE

function openIntprogAttendance() {

    currentAttendanceSubject = "INTPROG";

    showPage("intprog-details");

}


// SHOW SUCCESS PAGE

function showSuccess(subject) {

    currentAttendanceSubject = subject;

    const subjectElement =
        document.getElementById(
            "success-subject"
        );

    const subjectNameElement =
        document.getElementById(
            "success-subject-name"
        );

    const dateElement =
        document.getElementById(
            "success-date"
        );


    if (subject === "HUMCOMP") {

        if (subjectElement) {
            subjectElement.textContent = "HUMCOMP";
        }

        if (subjectNameElement) {
            subjectNameElement.textContent =
                "Human Computer Interaction";
        }

        if (dateElement) {
            dateElement.textContent =
                "Aug 27, 2026 • 9:41 PM";
        }

    }


    else if (subject === "QUANMET") {

        if (subjectElement) {
            subjectElement.textContent = "QUANMET";
        }

        if (subjectNameElement) {
            subjectNameElement.textContent =
                "Quantitative Method";
        }

        if (dateElement) {
            dateElement.textContent =
                "Aug 28, 2026 • 5:00 PM";
        }

    }


    else if (subject === "INTPROG") {

        if (subjectElement) {
            subjectElement.textContent = "INTPROG";
        }

        if (subjectNameElement) {
            subjectNameElement.textContent =
                "Integrative Programming";
        }

        if (dateElement) {
            dateElement.textContent =
                "Sep 9, 2026 • 4:00 PM";
        }

    }


    showPage("success");

}


// SUBJECTS

function openSubjects() {

    showPage("subjects");

}


// GRADES

function openGrades() {

    showPage("grades");

}


// SCHEDULE

function openSchedule() {

    showPage("schedule");

}


// ANNOUNCEMENTS

function openAnnouncements() {

    showPage("announcements");

}


// NOTIFICATIONS

function openNotifications() {

    showPage("notifications");

}


// MARK NOTIFICATION AS READ

function readNotification(notification) {

    if (!notification) {
        return;
    }


    if (
        notification.classList.contains(
            "notification-unread"
        )
    ) {

        notification.classList.remove(
            "notification-unread"
        );


        updateNotificationBadge();

    }

}


// UPDATE NOTIFICATION BADGE

function updateNotificationBadge() {

    const unreadNotifications =
        document.querySelectorAll(
            ".notification-unread"
        ).length;


    const badge =
        document.getElementById(
            "notification-badge"
        );


    if (!badge) {
        return;
    }


    if (unreadNotifications > 0) {

        badge.textContent =
            unreadNotifications;

        badge.style.display =
            "flex";

    } else {

        badge.style.display =
            "none";

    }

}


// THREE-LINE MENU

function toggleMenu() {

    const menu =
        document.getElementById(
            "navigation-menu"
        );


    if (!menu) {
        return;
    }


    menu.classList.toggle(
        "active"
    );

}


// MENU NAVIGATION

function openMenuPage(page) {

    const menu =
        document.getElementById(
            "navigation-menu"
        );


    if (menu) {

        menu.classList.remove(
            "active"
        );

    }


    if (page === "dashboard") {

        pageHistory = [];

        showPage(
            "dashboard",
            false
        );

        return;
    }


    showPage(page);

}


// BACK BUTTON

function goBack() {

    if (pageHistory.length > 0) {

        const previousPage =
            pageHistory.pop();

        showPage(
            previousPage,
            false
        );

    } else {

        showPage(
            "dashboard",
            false
        );

    }

}


// LOGOUT

function logout() {

    const menu =
        document.getElementById(
            "navigation-menu"
        );


    if (menu) {

        menu.classList.remove(
            "active"
        );

    }


    pageHistory = [];


    const studentId =
        document.getElementById(
            "student-id"
        );

    const password =
        document.getElementById(
            "password"
        );


    if (studentId) {
        studentId.value = "";
    }


    if (password) {
        password.value = "";
    }


    showPage(
        "login",
        false
    );

}


// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener(
    "click",
    function(event) {

        const menu =
            document.getElementById(
                "navigation-menu"
            );

        const menuButton =
            event.target.closest(
                ".header span:first-child"
            );


        if (!menu) {
            return;
        }


        if (
            menu.classList.contains("active") &&
            !menu.contains(event.target) &&
            !menuButton
        ) {

            menu.classList.remove(
                "active"
            );

        }

    }
);


// INITIALIZE

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateNotificationBadge();

    }
);


// MAKE FUNCTIONS AVAILABLE TO HTML

window.showPage =
    showPage;

window.login =
    login;

window.openAttendance =
    openAttendance;

window.openAttendanceDetails =
    openAttendanceDetails;

window.openQuanmetAttendance =
    openQuanmetAttendance;

window.openIntprogAttendance =
    openIntprogAttendance;

window.showSuccess =
    showSuccess;

window.openSubjects =
    openSubjects;

window.openGrades =
    openGrades;

window.openSchedule =
    openSchedule;

window.openAnnouncements =
    openAnnouncements;

window.openNotifications =
    openNotifications;

window.readNotification =
    readNotification;

window.toggleMenu =
    toggleMenu;

window.openMenuPage =
    openMenuPage;

window.goBack =
    goBack;

window.logout =
    logout;

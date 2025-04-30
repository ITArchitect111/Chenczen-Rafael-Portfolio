function footer() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    const year = now.getFullYear();

    const dateTimeString = `${time} - ${year}`;
    document.getElementById("datetime").textContent = "@" + dateTimeString;
}

footer();
setInterval(footer, 1000);
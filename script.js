/* =========================
   NAMA TAMU
========================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const guest =
    params.get("to");


if (guest) {

    document.getElementById(
        "guestName"
    ).textContent =
        decodeURIComponent(
            guest.replace(/\+/g, " ")
        );

}

/* BUKA UNDANGAN */
const openButton = document.getElementById("openInvitation");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

openButton.addEventListener("click", function () {
    opening.style.display = "none";
    mainContent.classList.remove("hidden");
    window.scrollTo(0, 0);
});


/* =========================
   COUNTDOWN
========================= */

const weddingDate =
    new Date(
        "2026-12-12T08:00:00+07:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.getElementById(
            "days"
        ).textContent = 0;

        document.getElementById(
            "hours"
        ).textContent = 0;

        document.getElementById(
            "minutes"
        ).textContent = 0;

        document.getElementById(
            "seconds"
        ).textContent = 0;

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance /
                (1000 * 60 * 60))
            % 24
        );


    const minutes =
        Math.floor(
            (distance /
                (1000 * 60))
            % 60
        );


    const seconds =
        Math.floor(
            (distance / 1000)
            % 60
        );


    document.getElementById(
        "days"
    ).textContent = days;


    document.getElementById(
        "hours"
    ).textContent = hours;


    document.getElementById(
        "minutes"
    ).textContent = minutes;


    document.getElementById(
        "seconds"
    ).textContent = seconds;

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================
   WHATSAPP RSVP
========================= */

const whatsappNumber =
    "6281234567890";


const guestName =
    document.getElementById(
        "guestName"
    ).textContent;


const message =
    `Assalamu'alaikum, saya ${guestName}. Saya ingin mengonfirmasi kehadiran pada acara pernikahan Arkan & Aulia.`;


const whatsappLink =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);


document.getElementById(
    "whatsappButton"
).href =
    whatsappLink;


/* =========================
   COPY REKENING
========================= */

const copyButton =
    document.querySelector(
        ".copy-button"
    );


copyButton.addEventListener(
    "click",
    async function () {

        const number =
            this.dataset.copy;


        try {

            await navigator
                .clipboard
                .writeText(number);


            this.textContent =
                "Berhasil Disalin ✓";


            setTimeout(
                () => {

                    this.textContent =
                        "Salin Nomor Rekening";

                },
                2000
            );

        } catch (error) {

            alert(
                "Nomor rekening: " +
                number
            );

        }

    }
);
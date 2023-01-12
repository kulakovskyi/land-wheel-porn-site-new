var playBtn = document.querySelector(".sam__main-wheel-btn"),
    playBtnText = document.querySelector(".sam__main-wheel-btn span"),
    wheel = document.querySelector(".sam__main-wheel-reel"), tries = document.querySelector(".try-number"),
    overlay = document.querySelector(".sam__overlay"), popupFirst = document.querySelector(".sam__firstWin"),
    popupFirstBtn = document.querySelector(".sam__firstWin-btn"),
    popupSecond = document.querySelector(".sam__secondWin"), rules = document.querySelector(".sam__rules"),
    footerRulesBtn = document.querySelector(".sam__footer-rules"), overflow = document.querySelector("body"),
    popupClose = document.querySelector(".sam__rules-close"), wrapper = document.querySelector(".sam"),
    totalTriesCounter = 2, imageTitle1 = document.querySelector(".sam__main-left-try_img1"),
    imageTitle2 = document.querySelector(".sam__main-left-try_img2"),
    presentWheel = document.querySelector(".sam__main-wheel_present"), mainSam = document.querySelector(".sam__main"),
    footerSam = document.querySelector(".sam__footer"), triesCounter = 0;

function blurAdd() {
    mainSam.classList.add("_blur"), footerSam.classList.add("_blur")
}

function blurRemove() {
    mainSam.classList.remove("_blur"), footerSam.classList.remove("_blur")
}

function updTriesCounter() {
    var e = totalTriesCounter - triesCounter;
    tries.innerText = 2 == e ? "В тебе 2 спроби" : 1 == e ? "В тебе 1 спроба" : "В тебе 0 спроб"
}

function runFirstRotation() {
    wheel.classList.add("reel-rotation-first"), playBtn.classList.remove("pulse-btn"), playBtnText.classList.add("hide"), playBtn.style.transform = "scale(0.7)", playBtn.style.cursor = "default", wrapper.style.pointerEvents = "none", setTimeout(function () {
        doAfterFirstRotation()
    }, 6e3), triesCounter++, updTriesCounter()
}

function doAfterFirstRotation() {
    wheel.style.transform = "rotate(992deg)", wheel.classList.remove("reel-rotation-first"), displayPopup(popupFirst), wrapper.style.pointerEvents = "auto", overflow.style.overflow = "hidden", blurAdd(), setTimeout(function () {
        playBtn.classList.add("pulse-btn"), playBtnText.classList.remove("hide"), playBtn.style.transform = "scale(1)", playBtn.style.cursor = "pointer"
    }, 1200), setTimeout(function () {
        imageTitle1.style.display = "none", imageTitle2.style.display = "block", presentWheel.style.display = "block"
    }, 500)
}

function runSecondRotation() {
    wheel.classList.add("reel-rotation-second"), playBtn.classList.remove("pulse-btn"), playBtnText.classList.add("hide"), playBtn.style.transform = "scale(0.7)", playBtn.style.cursor = "default", overflow.style.overflow = "hidden", wrapper.style.pointerEvents = "none", setTimeout(function () {
        doAfterSecondRotation(), blurAdd()
    }, 6e3), triesCounter++, updTriesCounter()
}

function doAfterSecondRotation() {
    displayPopup(popupSecond), wrapper.style.pointerEvents = "auto"
}

function displayPopup(e) {
    overlay.classList.remove("opacity-overlay"), e.classList.remove("hide")
}

footerRulesBtn.addEventListener("click", function () {
    blurAdd(), overlay.classList.remove("opacity-overlay"), rules.classList.remove("hide"), overlay.classList.add("_overflow")
}), popupClose.addEventListener("click", function () {
    blurRemove(), overlay.classList.add("opacity-overlay"), rules.classList.add("hide"), overflow.style.overflow = "unset", overlay.classList.remove("_overflow")
}), playBtn.addEventListener("click", function () {
    (0 === triesCounter ? runFirstRotation : runSecondRotation)()
}), popupFirstBtn.addEventListener("click", function () {
    blurRemove(), overlay.classList.add("opacity-overlay"), popupFirst.classList.add("hide"), overflow.style.overflow = "unset"
}), function () {
    var e, o = new URL(window.location.href),
        a = ["l", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "param1", "param2"];
    o.searchParams.has("redirectUrl") && 4 === (e = new URL(o.searchParams.get("redirectUrl"))).href.match(/\//g).length && e.searchParams.get("l") && localStorage.setItem("redirectUrl", e.href), a.forEach(function (e) {
        o.searchParams.has(e) && localStorage.setItem(e, o.searchParams.get(e))
    }), ["affid", "cpaid"].forEach(function (e) {
        o.searchParams.has(e) && localStorage.setItem(e, o.searchParams.get(e))
    }), window.addEventListener("click", function (e) {
        var t, r = e.target.closest("a");
        "https://tds.favbet.partners" === r.getAttribute("href") && r && (e.preventDefault(), localStorage.getItem("redirectUrl") ? t = new URL(localStorage.getItem("redirectUrl")) : (t = new URL(r.href), affid = localStorage.getItem("affid"), cpaid = localStorage.getItem("cpaid"), affid && cpaid && (t.pathname = "/" + affid + "/" + cpaid)), a.forEach(function (e) {
            o.searchParams.has(e) && t.searchParams.set(e, localStorage.getItem(e))
        }), document.location.href = t)
    })
}();
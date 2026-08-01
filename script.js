* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background:
        radial-gradient(circle at top, #421018, #10090b 45%, #050505);
    color: white;
    font-family: Arial, sans-serif;
    min-height: 100vh;
    padding-bottom: 90px;
}


/* TOP BAR */

.topbar {
    height: 78px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;

    background: #120d0f;
    border-bottom: 1px solid #3d171e;

    position: sticky;
    top: 0;
    z-index: 20;
}


.logo {
    width: 55px;
    font-size: 25px;
    font-weight: 900;
    color: #ff193e;
    font-style: italic;
}


.balance {
    flex: 1;
    max-width: 250px;

    padding: 12px 18px;

    border-radius: 30px;

    background:
        linear-gradient(90deg,
        #25171b,
        #3a2026);

    box-shadow:
        inset 0 0 10px #000;

    font-size: 19px;
    font-weight: bold;
}


.gift {
    font-size: 30px;
}


.profile {
    width: 55px;
    height: 55px;

    border-radius: 50%;

    background: #292124;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 23px;
}

.profile small {
    color: #ffd23c;
    font-size: 9px;
    font-weight: bold;
}


/* HERO */

.hero {
    margin: 18px 10px;

    min-height: 470px;

    border-radius: 20px;

    overflow: hidden;

    position: relative;

    background:
        radial-gradient(
            circle at 50% 35%,
            #9e2b28,
            #390c13 45%,
            #100508 75%
        );

    border: 1px solid #713025;

    box-shadow:
        0 0 30px rgba(255, 30, 50, .25);
}


.hero::before {
    content: "👑";
    position: absolute;

    top: 40px;
    left: 30px;

    font-size: 70px;

    filter: drop-shadow(0 0 10px gold);
}


.hero-content {
    position: absolute;

    left: 20px;
    right: 20px;
    bottom: 35px;

    text-align: center;
}


.badge {
    display: inline-block;

    background: #b90e1e;

    border: 2px solid #ffd34a;

    padding: 8px 15px;

    border-radius: 20px;

    font-size: 12px;
    font-weight: bold;
}


.hero h1 {
    margin-top: 20px;

    font-size: 28px;

    color: #fff;

    text-shadow:
        0 2px 5px #000;
}


.hero p {
    margin-top: 12px;

    font-size: 15px;
}


.hero strong {
    display: block;

    font-size: 38px;

    color: #ffd23a;

    margin: 5px;
}


.hero button {
    margin-top: 12px;

    width: 85%;

    padding: 16px;

    border: 0;

    border-radius: 30px;

    background:
        linear-gradient(#ffce42, #ff5a08);

    color: white;

    font-size: 18px;
    font-weight: bold;

    box-shadow:
        0 5px 15px #ff4d00;
}


/* GAMES */

.games {
    padding: 5px 12px;
}


.game-card {
    height: 125px;

    margin: 18px 0;

    border-radius: 12px;

    border: 2px solid #a74318;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 20px;

    overflow: hidden;

    box-shadow:
        0 5px 20px #000;

    transition: .2s;
}


.game-card:active {
    transform: scale(.97);
}


.game-card h2 {
    font-size: 28px;

    color: #ffd23c;

    text-shadow:
        2px 2px 4px #000;
}


.game-card p {
    color: white;
    font-weight: bold;
}


.game-card button {
    width: 55px;
    height: 55px;

    border-radius: 14px;

    border: 1px solid #ff5263;

    background:
        linear-gradient(#ff2348, #7e071d);

    color: white;

    font-size: 22px;
}


.crash {
    background:
        radial-gradient(circle,
        #ed4a18,
        #35070b 70%);
}


.jili {
    background:
        radial-gradient(circle,
        #b46a12,
        #241005 70%);
}


.sports {
    background:
        radial-gradient(circle,
        #123f77,
        #050a16 70%);
}


/* BOTTOM NAV */

.bottom-nav {
    position: fixed;

    bottom: 0;
    left: 0;
    right: 0;

    height: 78px;

    display: flex;

    justify-content: space-around;
    align-items: center;

    background:
        linear-gradient(#351016, #0d080a);

    border-top: 2px solid #77212d;

    z-index: 100;

    box-shadow:
        0 -5px 25px #000;
}


.bottom-nav div {
    text-align: center;

    min-width: 55px;

    color: #ffd45a;
}


.bottom-nav span {
    display: block;

    font-size: 25px;
}


.bottom-nav label {
    display: block;

    font-size: 10px;

    margin-top: 4px;

    color: #ffd45a;
}


.bottom-nav .cash {
    transform: translateY(-12px);

    width: 80px;
    height: 80px;

    border-radius: 50%;

    display: flex;

    flex-direction: column;

    justify-content: center;

    background:
        radial-gradient(circle,
        #ffd83e,
        #9d1a1d 65%,
        #26080b);

    border: 3px solid #ffcc37;

    box-shadow:
        0 0 25px #ffbd22;
}